export const KOTLIN_APP_SOURCE = `package com.example.hivegame

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.animation.*
import androidx.compose.foundation.Canvas
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.gestures.detectTransformGestures
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.LazyRow
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.*
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.Path
import androidx.compose.ui.graphics.drawscope.Stroke
import androidx.compose.ui.input.pointer.pointerInput
import androidx.compose.ui.text.*
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import kotlinx.coroutines.launch
import kotlin.math.*

// ============================================================================
// 1. DATA MODELS & DEFINITIONS
// ============================================================================

enum class Player { ONE, TWO }

enum class BugType(
    val title: String,
    val emoji: String,
    val defaultCount: Int,
    val isExpansion: Boolean = false
) {
    QUEEN("Queen Bee", "🐝", 1),
    SPIDER("Spider", "🕷️", 2),
    BEETLE("Beetle", "🐜", 2),
    GRASSHOPPER("Grasshopper", "🦗", 3),
    SOLDIER_ANT("Soldier Ant", "🐜", 3),
    MOSQUITO("Mosquito", "🦟", 1, true),
    LADYBUG("Ladybug", "🐞", 1, true),
    PILLBUG("Pillbug", "💊", 1, true)
}

data class Piece(val id: String, val type: BugType, val player: Player)

data class AxialHex(val q: Int, val r: Int) {
    fun key() = "$q,$r"
    fun getNeighbors(): List<AxialHex> = listOf(
        AxialHex(q + 1, r), AxialHex(q + 1, r - 1), AxialHex(q, r - 1),
        AxialHex(q - 1, r), AxialHex(q - 1, r + 1), AxialHex(q, r + 1)
    )
}

enum class GameMode { PASS_AND_PLAY, AI }
enum class AIDifficulty { EASY, MEDIUM, HARD }

data class ExpansionsConfig(
    val mosquito: Boolean = true,
    val ladybug: Boolean = true,
    val pillbug: Boolean = true
)

data class MoveLogEntry(val turn: Int, val player: Player, val text: String)

data class MoveAction(
    val type: ActionType,
    val pieceId: String,
    val bugType: BugType,
    val player: Player,
    val fromHex: AxialHex? = null,
    val toHex: AxialHex,
    val pillbugTargetHex: AxialHex? = null
) {
    enum class ActionType { PLACE, MOVE, PILLBUG_SPECIAL }
}

// ============================================================================
// 2. CORE GAME ENGINE & HIVE RULES
// ============================================================================

class HiveEngine {
    val board = mutableMapOf<String, MutableList<Piece>>()
    val p1Reserve = mutableListOf<Piece>()
    val p2Reserve = mutableListOf<Piece>()
    var currentPlayer = Player.ONE
    var turnCountP1 = 1
    var turnCountP2 = 1
    var lastMovedPieceId: String? = null
    val history = mutableListOf<MoveLogEntry>()

    fun initNewGame(expansions: ExpansionsConfig) {
        board.clear()
        p1Reserve.clear()
        p2Reserve.clear()
        history.clear()
        currentPlayer = Player.ONE
        turnCountP1 = 1
        turnCountP2 = 1
        lastMovedPieceId = null

        fun createReserve(player: Player): List<Piece> {
            val list = mutableListOf<Piece>()
            BugType.values().forEach { bug ->
                if (!bug.isExpansion || (bug == BugType.MOSQUITO && expansions.mosquito)
                    || (bug == BugType.LADYBUG && expansions.ladybug)
                    || (bug == BugType.PILLBUG && expansions.pillbug)
                ) {
                    repeat(bug.defaultCount) { idx ->
                        list.add(Piece("\${player.name}_\${bug.name}_\$idx", bug, player))
                    }
                }
            }
            return list
        }

        p1Reserve.addAll(createReserve(Player.ONE))
        p2Reserve.addAll(createReserve(Player.TWO))
    }

    fun isQueenPlaced(player: Player): Boolean {
        return board.values.flatten().any { it.player == player && it.type == BugType.QUEEN }
    }

    fun isHiveConnected(testBoard: Map<String, List<Piece>> = board): Boolean {
        val occupied = testBoard.filterValues { it.isNotEmpty() }.keys.map { parseKey(it) }
        if (occupied.size <= 1) return true

        val visited = mutableSetOf<String>()
        val queue = mutableListOf(occupied.first())
        visited.add(occupied.first().key())

        while (queue.isNotEmpty()) {
            val current = queue.removeAt(0)
            for (neighbor in current.getNeighbors()) {
                val nKey = neighbor.key()
                if (testBoard[nKey]?.isNotEmpty() == true && !visited.contains(nKey)) {
                    visited.add(nKey)
                    queue.add(neighbor)
                }
            }
        }
        return visited.size == occupied.size
    }

    fun canRemovePieceWithoutBreakingHive(fromHex: AxialHex): Boolean {
        val stack = board[fromHex.key()] ?: return false
        if (stack.size > 1) return true // Top piece removal doesn't empty the hex

        val copyBoard = board.mapValues { it.value.toList() }.toMutableMap()
        copyBoard.remove(fromHex.key())
        return isHiveConnected(copyBoard)
    }

    fun getValidPlacements(player: Player): List<AxialHex> {
        val occupiedKeys = board.filterValues { it.isNotEmpty() }.keys
        if (occupiedKeys.isEmpty()) return listOf(AxialHex(0, 0))
        if (occupiedKeys.size == 1) return parseKey(occupiedKeys.first()).getNeighbors()

        val candidateSet = mutableSetOf<AxialHex>()
        occupiedKeys.forEach { key ->
            parseKey(key).getNeighbors().forEach { n ->
                if (board[n.key()]?.isEmpty() != false) candidateSet.add(n)
            }
        }

        return candidateSet.filter { cand ->
            val neighbors = cand.getNeighbors()
            val touchesFriendly = neighbors.any { board[it.key()]?.lastOrNull()?.player == player }
            val touchesEnemy = neighbors.any { board[it.key()]?.lastOrNull()?.let { p -> p.player != player } == true }
            touchesFriendly && !touchesEnemy
        }
    }

    fun checkWinner(): Player? {
        fun isQueenSurrounded(player: Player): Boolean {
            val queenEntry = board.entries.firstOrNull { entry ->
                entry.value.any { it.type == BugType.QUEEN && it.player == player }
            } ?: return false
            val queenHex = parseKey(queenEntry.key)
            return queenHex.getNeighbors().all { board[it.key()]?.isNotEmpty() == true }
        }

        val p1Surrounded = isQueenSurrounded(Player.ONE)
        val p2Surrounded = isQueenSurrounded(Player.TWO)

        if (p1Surrounded && !p2Surrounded) return Player.TWO
        if (p2Surrounded && !p1Surrounded) return Player.ONE
        return null
    }

    private fun parseKey(key: String): AxialHex {
        val parts = key.split(",").map { it.toInt() }
        return AxialHex(parts[0], parts[1])
    }
}

// ============================================================================
// 3. MAIN JETPACK COMPOSE UI APP
// ============================================================================

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun HiveApp() {
    val engine = remember { HiveEngine() }
    var gameSettings by remember { mutableStateOf(GameSettings(GameMode.AI, AIDifficulty.MEDIUM, ExpansionsConfig())) }
    var isSetupOpen by remember { mutableStateOf(true) }
    var gameOverWinner by remember { mutableStateOf<Player?>(null) }

    var selectedHex by remember { mutableStateOf<AxialHex?>(null) }
    var selectedReserveBug by remember { mutableStateOf<BugType?>(null) }

    // Init new game when settings change
    LaunchedEffect(gameSettings) {
        engine.initNewGame(gameSettings.expansions)
    }

    MaterialTheme(
        colorScheme = darkColorScheme(
            primary = Color(0xFFF59E0B),
            background = Color(0xFF0F172A),
            surface = Color(0xFF1E293B)
        )
    ) {
        Scaffold(
            topBar = {
                TopAppBar(
                    title = { Text("🐝 Hive Strategy", fontWeight = FontWeight.Black) },
                    actions = {
                        IconButton(onClick = { isSetupOpen = true }) {
                            Icon(Icons.Default.Settings, contentDescription = "Settings")
                        }
                    },
                    colors = TopAppBarDefaults.topAppBarColors(containerColor = Color(0xFF0F172A))
                )
            }
        ) { paddingValues ->
            Box(
                modifier = Modifier
                    .fillMaxSize()
                    .padding(paddingValues)
                    .background(Color(0xFF0F172A))
            ) {
                // Main Interactive Hexagon Canvas
                HexCanvasBoard(
                    board = engine.board,
                    selectedHex = selectedHex,
                    onHexClick = { hex ->
                        if (engine.board[hex.key()]?.isNotEmpty() == true) {
                            selectedHex = hex
                            selectedReserveBug = null
                        }
                    }
                )

                // Reserve Bar at Bottom
                Column(
                    modifier = Modifier
                        .align(Alignment.BottomCenter)
                        .fillMaxWidth()
                        .padding(16.dp)
                ) {
                    ReserveBar(
                        reserve = if (engine.currentPlayer == Player.ONE) engine.p1Reserve else engine.p2Reserve,
                        selectedBug = selectedReserveBug,
                        onSelectBug = { bug ->
                            selectedReserveBug = bug
                            selectedHex = null
                        }
                    )
                }

                // New Game / Setup Modal
                if (isSetupOpen) {
                    SetupModal(
                        onStart = { newSettings ->
                            gameSettings = newSettings
                            isSetupOpen = false
                        },
                        onDismiss = { isSetupOpen = false }
                    )
                }
            }
        }
    }
}

@Composable
fun HexCanvasBoard(
    board: Map<String, List<Piece>>,
    selectedHex: AxialHex?,
    onHexClick: (AxialHex) -> Unit
) {
    var scale by remember { mutableStateOf(1f) }
    var offset by remember { mutableStateOf(Offset.Zero) }

    Canvas(
        modifier = Modifier
            .fillMaxSize()
            .pointerInput(Unit) {
                detectTransformGestures { _, pan, zoom, _ ->
                    scale = (scale * zoom).coerceIn(0.5f, 2.5f)
                    offset += pan
                }
            }
    ) {
        val hexRadius = 40dp.toPx() * scale
        val center = Offset(size.width / 2 + offset.x, size.height / 2 + offset.y)

        // Draw occupied hexes
        board.forEach { (key, stack) ->
            if (stack.isNotEmpty()) {
                val parts = key.split(",").map { it.toInt() }
                val q = parts[0]
                val r = parts[1]

                val x = center.x + hexRadius * sqrt(3f) * (q + r / 2f)
                val y = center.y + hexRadius * (3f / 2f) * r

                val path = Path().apply {
                    for (i in 0..5) {
                        val angle = (60 * i - 30) * Math.PI / 180.0
                        val px = x + hexRadius * cos(angle).toFloat()
                        val py = y + hexRadius * sin(angle).toFloat()
                        if (i == 0) moveTo(px, py) else lineTo(px, py)
                    }
                    close()
                }

                val topPiece = stack.last()
                val isP1 = topPiece.player == Player.ONE

                drawPath(path, color = if (isP1) Color.White else Color(0xFF1E293B))
                drawPath(path, color = Color(0xFFF59E0B), style = Stroke(width = 3f))
            }
        }
    }
}

@Composable
fun ReserveBar(
    reserve: List<Piece>,
    selectedBug: BugType?,
    onSelectBug: (BugType) -> Unit
) {
    val grouped = reserve.groupBy { it.type }

    Surface(
        shape = RoundedCornerShape(20.dp),
        color = Color(0xFF1E293B),
        tonalElevation = 8.dp,
        modifier = Modifier.fillMaxWidth()
    ) {
        LazyRow(
            contentPadding = PaddingValues(12.dp),
            horizontalArrangement = Arrangement.spacedBy(8.dp)
        ) {
            items(grouped.entries.toList()) { entry ->
                val bug = entry.key
                val count = entry.value.size
                val isSelected = selectedBug == bug

                Box(
                    modifier = Modifier
                        .clip(RoundedCornerShape(12.dp))
                        .background(if (isSelected) Color(0xFFF59E0B) else Color(0xFF0F172A))
                        .border(1.dp, Color.Gray, RoundedCornerShape(12.dp))
                        .clickable { onSelectBug(bug) }
                        .padding(horizontal = 12.dp, vertical = 8.dp),
                    contentAlignment = Alignment.Center
                ) {
                    Text(
                        text = "\${bug.emoji} x\$count",
                        color = if (isSelected) Color.Black else Color.White,
                        fontWeight = FontWeight.Bold,
                        fontSize = 14.sp
                    )
                }
            }
        }
    }
}

@Composable
fun SetupModal(onStart: (GameSettings) -> Unit, onDismiss: () -> Unit) {
    var mode by remember { mutableStateOf(GameMode.AI) }
    var diff by remember { mutableStateOf(AIDifficulty.MEDIUM) }

    AlertDialog(
        onDismissRequest = onDismiss,
        title = { Text("🐝 New Hive Game", fontWeight = FontWeight.Bold) },
        text = {
            Column(verticalArrangement = Arrangement.spacedBy(12.dp)) {
                Text("Select Game Mode:")
                Row(horizontalArrangement = Arrangement.spacedBy(8.dp)) {
                    FilterChip(
                        selected = mode == GameMode.PASS_AND_PLAY,
                        onClick = { mode = GameMode.PASS_AND_PLAY },
                        label = { Text("Pass & Play") }
                    )
                    FilterChip(
                        selected = mode == GameMode.AI,
                        onClick = { mode = GameMode.AI },
                        label = { Text("VS AI Engine") }
                    )
                }
            }
        },
        confirmButton = {
            Button(onClick = { onStart(GameSettings(mode, diff, ExpansionsConfig())) }) {
                Text("Start Match")
            }
        }
    )
}
`;
