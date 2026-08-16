package com.tecepeipe.bugzstrategy

import org.junit.Assert.assertEquals
import org.junit.Assert.assertFalse
import org.junit.Assert.assertNull
import org.junit.Assert.assertTrue
import org.junit.Test

/**
 * JVM unit tests for the bugz core engine (rules in BugzApp.kt). These pure
 * functions have no Android dependencies, so they run as plain JUnit tests.
 */
class BugzEngineTest {

    // --- hex helpers ---

    @Test
    fun `parseKey round trips`() {
        assertEquals(AxialHex(1, -2), parseKey("1,-2"))
        assertEquals("3,4", AxialHex(3, 4).key())
    }

    @Test
    fun `axial hex neighbors are the six surrounding hexes`() {
        val neighbors = AxialHex(0, 0).getNeighbors()
        assertEquals(6, neighbors.size)
        assertTrue(neighbors.contains(AxialHex(1, 0)))
        assertTrue(neighbors.contains(AxialHex(0, 1)))
        assertTrue(neighbors.contains(AxialHex(-1, 1)))
        assertTrue(neighbors.contains(AxialHex(-1, 0)))
        assertTrue(neighbors.contains(AxialHex(0, -1)))
        assertTrue(neighbors.contains(AxialHex(1, -1)))
    }

    // --- board helpers ---

    @Test
    fun `board helpers handle empty and stacked hexes`() {
        val board: Map<String, List<Piece>> = emptyMap()
        assertFalse(isOccupied(board, AxialHex(0, 0)))
        assertEquals(0, getStackHeight(board, AxialHex(0, 0)))
        assertNull(getTopPiece(board, AxialHex(0, 0)))

        val queen = Piece("p1_QUEEN_0", BugType.QUEEN, Player.ONE)
        val beetle = Piece("p1_BEETLE_0", BugType.BEETLE, Player.ONE)
        val boardWithStack = mapOf("0,0" to listOf(queen, beetle))

        assertTrue(isOccupied(boardWithStack, AxialHex(0, 0)))
        assertEquals(2, getStackHeight(boardWithStack, AxialHex(0, 0)))
        assertEquals(beetle, getTopPiece(boardWithStack, AxialHex(0, 0)))
    }

    @Test
    fun `cloneBoard deep copies stacks`() {
        val queen = Piece("p1_QUEEN_0", BugType.QUEEN, Player.ONE)
        val original = mapOf("0,0" to mutableListOf(queen))
        val copy = cloneBoard(original)

        copy["0,0"]!!.clear()

        assertEquals(1, original["0,0"]!!.size)
    }

    @Test
    fun `queen helpers report placement and location`() {
        val queen = Piece("p2_QUEEN_0", BugType.QUEEN, Player.TWO)
        val board = mapOf("2,1" to listOf(queen))

        assertTrue(isQueenPlaced(board, Player.TWO))
        assertFalse(isQueenPlaced(board, Player.ONE))
        assertEquals(AxialHex(2, 1), getQueenHex(board, Player.TWO))
        assertNull(getQueenHex(board, Player.ONE))
    }

    // --- swarm connectivity ---

    @Test
    fun `empty and single-piece swarms are connected`() {
        assertTrue(isSwarmConnected(emptyMap()))
        val single = mapOf("0,0" to listOf(Piece("p1_QUEEN_0", BugType.QUEEN, Player.ONE)))
        assertTrue(isSwarmConnected(single))
    }

    @Test
    fun `two adjacent pieces keep the swarm connected`() {
        val board = mapOf(
            "0,0" to listOf(Piece("p1_QUEEN_0", BugType.QUEEN, Player.ONE)),
            "1,0" to listOf(Piece("p2_QUEEN_0", BugType.QUEEN, Player.TWO))
        )
        assertTrue(isSwarmConnected(board))
    }

    @Test
    fun `two separated pieces break the swarm`() {
        val board = mapOf(
            "0,0" to listOf(Piece("p1_QUEEN_0", BugType.QUEEN, Player.ONE)),
            "0,2" to listOf(Piece("p2_QUEEN_0", BugType.QUEEN, Player.TWO))
        )
        assertFalse(isSwarmConnected(board))
    }

    @Test
    fun `canRemovePiece returns true for stacks`() {
        val queen = Piece("p1_QUEEN_0", BugType.QUEEN, Player.ONE)
        val beetle = Piece("p1_BEETLE_0", BugType.BEETLE, Player.ONE)
        val board = mapOf(
            "0,0" to listOf(queen, beetle),
            "1,0" to listOf(Piece("p2_QUEEN_0", BugType.QUEEN, Player.TWO))
        )
        assertTrue(canRemovePieceWithoutBreakingSwarm(board, AxialHex(0, 0)))
    }

    // --- sliding / placement rules ---

    @Test
    fun `canSlide is false when both common neighbors are blocked`() {
        // From (0,0) to (1,-1): common neighbors are (1,0) and (0,-1).
        val board = mapOf(
            "0,0" to listOf(Piece("p1_QUEEN_0", BugType.QUEEN, Player.ONE)),
            "1,0" to listOf(Piece("p2_QUEEN_0", BugType.QUEEN, Player.TWO)),
            "0,-1" to listOf(Piece("p2_SPIDER_0", BugType.SPIDER, Player.TWO))
        )
        assertFalse(canSlide(board, AxialHex(0, 0), AxialHex(1, -1)))
    }

    @Test
    fun `first placement is at the origin`() {
        val placements = getValidPlacements(emptyMap(), Player.ONE, 1)
        assertEquals(listOf(AxialHex(0, 0)), placements)
    }

    @Test
    fun `second placement touches the first piece`() {
        val board = mapOf(
            "0,0" to listOf(Piece("p1_QUEEN_0", BugType.QUEEN, Player.ONE))
        )
        val placements = getValidPlacements(board, Player.TWO, 1)
        assertEquals(6, placements.size)
    }

    @Test
    fun `placements cannot touch enemy pieces`() {
        val board = mapOf(
            "0,0" to listOf(Piece("p1_QUEEN_0", BugType.QUEEN, Player.ONE)),
            "1,0" to listOf(Piece("p2_QUEEN_0", BugType.QUEEN, Player.TWO))
        )
        // A placement for P1 adjacent to the P2 queen would touch an enemy hex.
        val p1Placements = getValidPlacements(board, Player.ONE, 2)
        assertFalse(p1Placements.contains(AxialHex(2, 0)))
    }

    // --- BugzEngine state machine ---

    @Test
    fun `initNewGame creates full reserves`() {
        val engine = BugzEngine()
        engine.initNewGame(ExpansionsConfig())
        assertEquals(1 + 2 + 2 + 3 + 3 + 1 + 1 + 1, engine.p1Reserve.size)
        assertEquals(engine.p1Reserve.size, engine.p2Reserve.size)
        assertEquals(Player.ONE, engine.currentPlayer)
        assertEquals(1, engine.turnCountP1)
        assertEquals(1, engine.turnCountP2)
    }

    @Test
    fun `initNewGame without expansions shrinks reserves`() {
        val engine = BugzEngine()
        engine.initNewGame(ExpansionsConfig(mosquito = false, ladybug = false, pillbug = false))
        assertEquals(1 + 2 + 2 + 3 + 3, engine.p1Reserve.size)
    }

    @Test
    fun `placing the first piece updates the board and turns`() {
        val engine = BugzEngine()
        engine.initNewGame(ExpansionsConfig())

        val queen = engine.p1Reserve.first { it.type == BugType.QUEEN }
        engine.executeMove(
            MoveAction(MoveAction.ActionType.PLACE, queen.id, BugType.QUEEN, Player.ONE, toHex = AxialHex(0, 0))
        )

        assertTrue(engine.board.containsKey("0,0"))
        assertFalse(engine.p1Reserve.any { it.id == queen.id })
        assertEquals(Player.TWO, engine.currentPlayer)
        assertEquals(2, engine.turnCountP1)
        assertEquals(1, engine.history.size)
    }

    @Test
    fun `snapshot and restore preserve state`() {
        val engine = BugzEngine()
        engine.initNewGame(ExpansionsConfig())
        val queen = engine.p1Reserve.first { it.type == BugType.QUEEN }
        engine.executeMove(
            MoveAction(MoveAction.ActionType.PLACE, queen.id, BugType.QUEEN, Player.ONE, toHex = AxialHex(0, 0))
        )

        val snap = engine.snapshot()
        engine.restore(snap)

        assertEquals(Player.TWO, engine.currentPlayer)
        assertTrue(engine.board.containsKey("0,0"))
        assertEquals(2, engine.turnCountP1)
    }

    @Test
    fun `game status is not over with only queens placed`() {
        val engine = BugzEngine()
        engine.initNewGame(ExpansionsConfig())

        val p1Queen = engine.p1Reserve.first { it.type == BugType.QUEEN }
        engine.executeMove(
            MoveAction(MoveAction.ActionType.PLACE, p1Queen.id, BugType.QUEEN, Player.ONE, toHex = AxialHex(0, 0))
        )
        val p2Queen = engine.p2Reserve.first { it.type == BugType.QUEEN }
        engine.executeMove(
            MoveAction(MoveAction.ActionType.PLACE, p2Queen.id, BugType.QUEEN, Player.TWO, toHex = AxialHex(1, 0))
        )

        val status = engine.checkGameStatus()
        assertFalse(status.isGameOver)
        assertNull(status.winner)
    }

    @Test
    fun `queen surrounded on all six sides ends the game`() {
        val engine = BugzEngine()
        engine.initNewGame(ExpansionsConfig())

        // P1 queen at origin; P2 surrounds it completely.
        val p1Queen = engine.p1Reserve.first { it.type == BugType.QUEEN }
        engine.executeMove(
            MoveAction(MoveAction.ActionType.PLACE, p1Queen.id, BugType.QUEEN, Player.ONE, toHex = AxialHex(0, 0))
        )

        val p2Pieces = engine.p2Reserve.filter { it.type != BugType.QUEEN }.toMutableList()
        val neighbors = AxialHex(0, 0).getNeighbors()
        var p2Index = 0
        for (hex in neighbors) {
            if (engine.currentPlayer != Player.TWO) engine.switchTurn()
            val piece = p2Pieces[p2Index++]
            engine.executeMove(
                MoveAction(MoveAction.ActionType.PLACE, piece.id, piece.type, Player.TWO, toHex = hex)
            )
        }

        // Give P1 a non-surrounding filler so the game status can be evaluated.
        val p1Filler = engine.p1Reserve.first { it.type != BugType.QUEEN }
        if (engine.currentPlayer != Player.ONE) engine.switchTurn()
        engine.executeMove(
            MoveAction(MoveAction.ActionType.PLACE, p1Filler.id, p1Filler.type, Player.ONE, toHex = AxialHex(2, -2))
        )

        val status = engine.checkGameStatus()
        assertTrue(status.isGameOver)
        assertEquals(Player.TWO, status.winner)
        assertEquals(6, status.p1QueenSurroundedCount)
    }
}
