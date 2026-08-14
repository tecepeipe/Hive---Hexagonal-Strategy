import React, { useState, useEffect, useCallback } from 'react';
import {
  AxialHex,
  BoardState,
  BUG_DEFINITIONS,
  BugType,
  ExpansionsConfig,
  GameMode,
  GameSettings,
  GameSnapshot,
  hexKey,
  MoveAction,
  MoveLogEntry,
  Piece,
  Player,
} from './types/hive';
import {
  checkGameStatus,
  cloneBoard,
  getEffectiveBugTypes,
  getPlayerAllLegalActions,
  getPillbugSpecialTargets,
  getTopPiece,
  getValidMovesForPiece,
  getValidPlacements,
  isQueenPlaced,
} from './logic/hiveRules';
import { computeAIMove } from './logic/hiveAI';

import { HexBoard } from './components/HexBoard';
import { ReservePanel } from './components/ReservePanel';
import { MoveLog } from './components/MoveLog';
import { NewGameModal } from './components/NewGameModal';
import { GameOverModal } from './components/GameOverModal';
import { KotlinCodeViewer } from './components/KotlinCodeViewer';

import {
  RotateCcw,
  RefreshCw,
  Flag,
  Settings,
  Code2,
  Bot,
  Users,
  Sparkles,
  AlertCircle,
  HelpCircle,
} from 'lucide-react';

export default function App() {
  // --- GAME CONFIGURATION ---
  const [settings, setSettings] = useState<GameSettings>({
    mode: 'AI',
    aiDifficulty: 'MEDIUM',
    expansions: { mosquito: true, ladybug: true, pillbug: true },
  });

  // --- CORE GAME STATE ---
  const [board, setBoard] = useState<BoardState>(new Map());
  const [p1Reserve, setP1Reserve] = useState<Piece[]>([]);
  const [p2Reserve, setP2Reserve] = useState<Piece[]>([]);
  const [currentPlayer, setCurrentPlayer] = useState<Player>(1);
  const [turnCountP1, setTurnCountP1] = useState<number>(1);
  const [turnCountP2, setTurnCountP2] = useState<number>(1);
  const [lastMovedPieceId, setLastMovedPieceId] = useState<string | null>(null);
  const [lastMovedHex, setLastMovedHex] = useState<{ from?: AxialHex; to: AxialHex } | null>(null);
  const [moveHistory, setMoveHistory] = useState<MoveLogEntry[]>([]);
  const [snapshots, setSnapshots] = useState<GameSnapshot[]>([]);

  // --- SELECTION & INTERACTION STATE ---
  const [selectedHex, setSelectedHex] = useState<AxialHex | null>(null);
  const [selectedReserveBug, setSelectedReserveBug] = useState<BugType | null>(null);
  const [validDestinations, setValidDestinations] = useState<AxialHex[]>([]);
  const [pillbugTargetHex, setPillbugTargetHex] = useState<AxialHex | null>(null);
  const [pillbugDestinations, setPillbugDestinations] = useState<AxialHex[]>([]);
  const [isAITurn, setIsAITurn] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // --- MODALS ---
  const [isNewGameModalOpen, setIsNewGameModalOpen] = useState<boolean>(true);
  const [isGameOverModalOpen, setIsGameOverModalOpen] = useState<boolean>(false);
  const [isKotlinModalOpen, setIsKotlinModalOpen] = useState<boolean>(false);

  // Helper function to create initial reserves for a player
  const createInitialReserve = (player: Player, expansions: ExpansionsConfig): Piece[] => {
    const pieces: Piece[] = [];
    (Object.keys(BUG_DEFINITIONS) as BugType[]).forEach(bugType => {
      const info = BUG_DEFINITIONS[bugType];
      if (
        !info.isExpansion ||
        (bugType === 'MOSQUITO' && expansions.mosquito) ||
        (bugType === 'LADYBUG' && expansions.ladybug) ||
        (bugType === 'PILLBUG' && expansions.pillbug)
      ) {
        for (let i = 0; i < info.count; i++) {
          pieces.push({
            id: `p${player}_${bugType}_${i}`,
            type: bugType,
            player,
          });
        }
      }
    });
    return pieces;
  };

  // Initialize a new game
  const handleStartNewGame = useCallback((newSettings: GameSettings) => {
    setSettings(newSettings);
    setBoard(new Map());
    setP1Reserve(createInitialReserve(1, newSettings.expansions));
    setP2Reserve(createInitialReserve(2, newSettings.expansions));
    setCurrentPlayer(1);
    setTurnCountP1(1);
    setTurnCountP2(1);
    setLastMovedPieceId(null);
    setLastMovedHex(null);
    setMoveHistory([]);
    setSnapshots([]);
    setSelectedHex(null);
    setSelectedReserveBug(null);
    setValidDestinations([]);
    setPillbugTargetHex(null);
    setPillbugDestinations([]);
    setIsAITurn(false);
    setIsNewGameModalOpen(false);
    setIsGameOverModalOpen(false);
    setToastMessage(null);
  }, []);

  // Save game snapshot for Unlimited Undo
  const saveSnapshot = useCallback(
    (
      curBoard: BoardState,
      p1Res: Piece[],
      p2Res: Piece[],
      curPlayer: Player,
      tP1: number,
      tP2: number,
      lastId: string | null,
      history: MoveLogEntry[]
    ) => {
      const serializedBoard: [string, Piece[]][] = Array.from(curBoard.entries()).map(
        ([k, v]) => [k, [...v]]
      );
      const snapshot: GameSnapshot = {
        board: serializedBoard,
        p1Reserve: [...p1Res],
        p2Reserve: [...p2Res],
        currentPlayer: curPlayer,
        turnCountP1: tP1,
        turnCountP2: tP2,
        lastMovedPieceId: lastId,
        moveHistory: [...history],
      };
      setSnapshots(prev => [...prev, snapshot]);
    },
    []
  );

  // Unlimited Undo step
  const handleUndo = useCallback(() => {
    if (snapshots.length === 0 || isAITurn) return;

    // In AI mode, undo 2 steps if previous turn was AI
    let stepsToUndo = 1;
    if (settings.mode === 'AI' && snapshots.length >= 2) {
      stepsToUndo = 2;
    }

    const targetIndex = Math.max(0, snapshots.length - stepsToUndo);
    const targetSnapshot = snapshots[targetIndex];

    const restoredBoard = new Map<string, Piece[]>();
    targetSnapshot.board.forEach(([k, v]) => restoredBoard.set(k, [...v]));

    setBoard(restoredBoard);
    setP1Reserve([...targetSnapshot.p1Reserve]);
    setP2Reserve([...targetSnapshot.p2Reserve]);
    setCurrentPlayer(targetSnapshot.currentPlayer);
    setTurnCountP1(targetSnapshot.turnCountP1);
    setTurnCountP2(targetSnapshot.turnCountP2);
    setLastMovedPieceId(targetSnapshot.lastMovedPieceId);
    setMoveHistory([...targetSnapshot.moveHistory]);

    // Trim snapshot stack
    setSnapshots(prev => prev.slice(0, targetIndex));

    // Clear selections
    setSelectedHex(null);
    setSelectedReserveBug(null);
    setValidDestinations([]);
    setPillbugTargetHex(null);
    setPillbugDestinations([]);
  }, [snapshots, isAITurn, settings.mode]);

  // Check Game Status after move
  const gameStatus = checkGameStatus(board);

  useEffect(() => {
    if (gameStatus.isGameOver && !isGameOverModalOpen) {
      setIsGameOverModalOpen(true);
    }
  }, [gameStatus, isGameOverModalOpen]);

  // Handle Forced Pass check when turn changes
  useEffect(() => {
    if (gameStatus.isGameOver) return;

    const curReserve = currentPlayer === 1 ? p1Reserve : p2Reserve;
    const curTurnCount = currentPlayer === 1 ? turnCountP1 : turnCountP2;

    const legalActions = getPlayerAllLegalActions(
      board,
      currentPlayer,
      curReserve,
      curTurnCount,
      lastMovedPieceId,
      settings.expansions
    );

    if (legalActions.length === 0 && (board.size > 0 || p1Reserve.length > 0)) {
      // Player has NO legal moves or placements -> Forced Pass!
      setToastMessage(`Player ${currentPlayer} has no legal moves available. Turn passed!`);
      setTimeout(() => setToastMessage(null), 3000);

      // Record pass in history
      const passLog: MoveLogEntry = {
        turnNumber: curTurnCount,
        player: currentPlayer,
        actionType: 'PASS',
        bugType: 'QUEEN',
        description: `Player ${currentPlayer} was forced to pass turn.`,
      };
      setMoveHistory(prev => [...prev, passLog]);

      // Switch turn
      if (currentPlayer === 1) {
        setCurrentPlayer(2);
      } else {
        setCurrentPlayer(1);
      }
    }
  }, [currentPlayer, board, p1Reserve, p2Reserve, turnCountP1, turnCountP2, lastMovedPieceId, settings.expansions, gameStatus.isGameOver]);

  // --- AI MOVE TRIGGER ---
  useEffect(() => {
    if (
      settings.mode === 'AI' &&
      currentPlayer === 2 &&
      !gameStatus.isGameOver &&
      !isAITurn
    ) {
      setIsAITurn(true);

      const aiTimer = setTimeout(() => {
        const aiAction = computeAIMove(
          board,
          2,
          p2Reserve,
          p1Reserve,
          turnCountP2,
          turnCountP1,
          settings.aiDifficulty,
          lastMovedPieceId,
          settings.expansions
        );

        if (aiAction) {
          executeMove(aiAction);
        } else {
          // AI forced pass
          setToastMessage(`AI (Player 2) has no valid moves. Turn passed!`);
          setTimeout(() => setToastMessage(null), 3000);
          setCurrentPlayer(1);
        }

        setIsAITurn(false);
      }, 600);

      return () => clearTimeout(aiTimer);
    }
  }, [currentPlayer, settings, board, p1Reserve, p2Reserve, turnCountP1, turnCountP2, lastMovedPieceId, gameStatus.isGameOver, isAITurn]);

  // Execute a validated MoveAction
  const executeMove = (action: MoveAction) => {
    saveSnapshot(
      board,
      p1Reserve,
      p2Reserve,
      currentPlayer,
      turnCountP1,
      turnCountP2,
      lastMovedPieceId,
      moveHistory
    );

    const nextBoard = cloneBoard(board);
    let nextP1Res = [...p1Reserve];
    let nextP2Res = [...p2Reserve];
    let logDesc = '';

    if (action.type === 'PLACE') {
      if (action.player === 1) {
        const idx = nextP1Res.findIndex(p => p.id === action.pieceId);
        if (idx !== -1) nextP1Res.splice(idx, 1);
      } else {
        const idx = nextP2Res.findIndex(p => p.id === action.pieceId);
        if (idx !== -1) nextP2Res.splice(idx, 1);
      }

      const newPiece: Piece = {
        id: action.pieceId,
        type: action.bugType,
        player: action.player,
      };

      const key = hexKey(action.toHex.q, action.toHex.r);
      const stack = nextBoard.get(key) || [];
      nextBoard.set(key, [...stack, newPiece]);

      logDesc = `Placed ${BUG_DEFINITIONS[action.bugType].name} at (${action.toHex.q}, ${action.toHex.r})`;
      setLastMovedHex({ to: action.toHex });
    } else if (action.type === 'MOVE' && action.fromHex) {
      const fromKey = hexKey(action.fromHex.q, action.fromHex.r);
      const fromStack = nextBoard.get(fromKey) || [];
      const movedPiece = fromStack.pop();

      if (fromStack.length === 0) nextBoard.delete(fromKey);

      if (movedPiece) {
        const toKey = hexKey(action.toHex.q, action.toHex.r);
        const toStack = nextBoard.get(toKey) || [];
        nextBoard.set(toKey, [...toStack, movedPiece]);
      }

      logDesc = `Moved ${BUG_DEFINITIONS[action.bugType].name} from (${action.fromHex.q}, ${action.fromHex.r}) to (${action.toHex.q}, ${action.toHex.r})`;
      setLastMovedHex({ from: action.fromHex, to: action.toHex });
    } else if (action.type === 'PILLBUG_SPECIAL' && action.pillbugTargetHex) {
      const targetKey = hexKey(action.pillbugTargetHex.q, action.pillbugTargetHex.r);
      const targetStack = nextBoard.get(targetKey) || [];
      const movedPiece = targetStack.pop();

      if (targetStack.length === 0) nextBoard.delete(targetKey);

      if (movedPiece) {
        const toKey = hexKey(action.toHex.q, action.toHex.r);
        const toStack = nextBoard.get(toKey) || [];
        nextBoard.set(toKey, [...toStack, movedPiece]);
      }

      logDesc = `Pillbug moved ${movedPiece ? BUG_DEFINITIONS[movedPiece.type].name : 'piece'} from (${action.pillbugTargetHex.q}, ${action.pillbugTargetHex.r}) to (${action.toHex.q}, ${action.toHex.r})`;
      setLastMovedHex({ from: action.pillbugTargetHex, to: action.toHex });
    }

    setBoard(nextBoard);
    setP1Reserve(nextP1Res);
    setP2Reserve(nextP2Res);
    setLastMovedPieceId(action.pieceId);

    const logEntry: MoveLogEntry = {
      turnNumber: currentPlayer === 1 ? turnCountP1 : turnCountP2,
      player: currentPlayer,
      actionType: action.type,
      bugType: action.bugType,
      from: action.fromHex,
      to: action.toHex,
      description: logDesc,
    };
    setMoveHistory(prev => [...prev, logEntry]);

    // Reset interaction state
    setSelectedHex(null);
    setSelectedReserveBug(null);
    setValidDestinations([]);
    setPillbugTargetHex(null);
    setPillbugDestinations([]);

    // Update Turn Counts & Switch Player
    if (currentPlayer === 1) {
      setTurnCountP1(prev => prev + 1);
      setCurrentPlayer(2);
    } else {
      setTurnCountP2(prev => prev + 1);
      setCurrentPlayer(1);
    }
  };

  // --- USER INTERACTION HANDLERS ---

  // Reserve bug selected
  const handleSelectReserveBug = (bugType: BugType) => {
    if (isAITurn) return;

    setSelectedHex(null);
    setPillbugTargetHex(null);
    setPillbugDestinations([]);

    if (selectedReserveBug === bugType) {
      setSelectedReserveBug(null);
      setValidDestinations([]);
    } else {
      setSelectedReserveBug(bugType);
      const curTurnCount = currentPlayer === 1 ? turnCountP1 : turnCountP2;
      const placements = getValidPlacements(board, currentPlayer, curTurnCount);
      setValidDestinations(placements);
    }
  };

  // Board hex clicked
  const handleSelectHex = (hex: AxialHex) => {
    if (isAITurn) return;

    const stack = board.get(hexKey(hex.q, hex.r));
    const topPiece = stack && stack.length > 0 ? stack[stack.length - 1] : null;

    // Reset reserve selection
    setSelectedReserveBug(null);

    // If clicking same hex twice, toggle off selection
    if (selectedHex && selectedHex.q === hex.q && selectedHex.r === hex.r) {
      setSelectedHex(null);
      setValidDestinations([]);
      setPillbugTargetHex(null);
      setPillbugDestinations([]);
      return;
    }

    if (topPiece && topPiece.player === currentPlayer) {
      setSelectedHex(hex);
      const curTurnCount = currentPlayer === 1 ? turnCountP1 : turnCountP2;
      const moves = getValidMovesForPiece(
        board,
        hex,
        currentPlayer,
        curTurnCount,
        lastMovedPieceId,
        settings.expansions
      );
      setValidDestinations(moves);

      // Check Pillbug / Mosquito special action targets
      const effectiveTypes = getEffectiveBugTypes(board, hex, topPiece, settings.expansions);
      if (effectiveTypes.includes('PILLBUG')) {
        const pbTargets = getPillbugSpecialTargets(board, hex, currentPlayer, lastMovedPieceId);
        if (pbTargets.length > 0) {
          // If Pillbug selected, highlight target options
          setPillbugTargetHex(pbTargets[0].targetHex);
          setPillbugDestinations(pbTargets[0].destinationHexes);
        }
      } else {
        setPillbugTargetHex(null);
        setPillbugDestinations([]);
      }
    }
  };

  // Destination selected to execute move or placement
  const handleSelectDestination = (destHex: AxialHex) => {
    if (isAITurn) return;

    const curReserve = currentPlayer === 1 ? p1Reserve : p2Reserve;

    if (selectedReserveBug) {
      // Placement Action
      const pieceToPlace = curReserve.find(p => p.type === selectedReserveBug);
      if (pieceToPlace) {
        executeMove({
          type: 'PLACE',
          pieceId: pieceToPlace.id,
          bugType: selectedReserveBug,
          player: currentPlayer,
          toHex: destHex,
        });
      }
    } else if (selectedHex) {
      const topPiece = getTopPiece(board, selectedHex);
      if (topPiece) {
        if (
          pillbugTargetHex &&
          pillbugDestinations.some(d => d.q === destHex.q && d.r === destHex.r)
        ) {
          // Execute Pillbug Special Action
          executeMove({
            type: 'PILLBUG_SPECIAL',
            pieceId: topPiece.id,
            bugType: topPiece.type,
            player: currentPlayer,
            fromHex: selectedHex,
            pillbugTargetHex,
            toHex: destHex,
          });
        } else {
          // Standard Move Action
          executeMove({
            type: 'MOVE',
            pieceId: topPiece.id,
            bugType: topPiece.type,
            player: currentPlayer,
            fromHex: selectedHex,
            toHex: destHex,
          });
        }
      }
    }
  };

  return (
    <div className="flex flex-col h-screen w-screen bg-slate-950 text-slate-100 font-sans overflow-hidden">
      {/* Top Header Controls Bar */}
      <header className="bg-slate-900/90 border-b border-slate-800 px-4 py-3 flex items-center justify-between shadow-md z-30">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🐝</span>
            <h1 className="text-lg font-black tracking-tight text-amber-400">
              HIVE <span className="text-slate-400 text-xs font-normal">Strategy</span>
            </h1>
          </div>

          <span className="hidden sm:inline-block text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
            {settings.mode === 'AI' ? `VS AI (${settings.aiDifficulty})` : 'Pass & Play'}
          </span>
        </div>

        {/* Turn Status Badge */}
        <div className="flex items-center gap-3">
          <div
            className={`px-3 py-1.5 rounded-full border text-xs font-bold flex items-center gap-2 shadow-sm ${
              currentPlayer === 1
                ? 'bg-slate-800 border-amber-400 text-amber-300'
                : 'bg-slate-900 border-blue-400 text-blue-300'
            }`}
          >
            <div
              className={`w-2.5 h-2.5 rounded-full ${
                currentPlayer === 1 ? 'bg-white' : 'bg-slate-950 border border-slate-500'
              } ${isAITurn ? 'animate-ping' : ''}`}
            />
            <span>
              {isAITurn
                ? 'AI Thinking...'
                : `Player ${currentPlayer}'s Turn (${currentPlayer === 1 ? 'White' : 'Black'})`}
            </span>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-1">
            <button
              onClick={handleUndo}
              disabled={snapshots.length === 0 || isAITurn}
              className={`p-2 rounded-xl border transition-colors ${
                snapshots.length > 0 && !isAITurn
                  ? 'bg-slate-800 border-slate-700 text-slate-200 hover:bg-slate-700 hover:text-white'
                  : 'bg-slate-950/50 border-slate-800/50 text-slate-600 cursor-not-allowed'
              }`}
              title="Undo Move (Unlimited Step Rewind)"
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            <button
              onClick={() => setIsNewGameModalOpen(true)}
              className="p-2 rounded-xl bg-slate-800 border border-slate-700 text-slate-200 hover:bg-slate-700 hover:text-white transition-colors"
              title="New Game / Match Settings"
            >
              <Settings className="w-4 h-4" />
            </button>

            <button
              onClick={() => setIsKotlinModalOpen(true)}
              className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/40 text-amber-400 hover:bg-amber-500/20 transition-colors flex items-center gap-1.5 text-xs font-bold"
              title="View & Export Android Kotlin Compose Code"
            >
              <Code2 className="w-4 h-4" />
              <span className="hidden md:inline">Kotlin Source</span>
            </button>
          </div>
        </div>
      </header>

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-16 left-1/2 -translate-x-1/2 z-50 bg-amber-500 text-slate-950 font-bold px-4 py-2 rounded-2xl shadow-xl border border-amber-300 text-xs flex items-center gap-2 animate-bounce">
          <AlertCircle className="w-4 h-4" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main Board Stage & Panels Layout */}
      <div className="flex-1 flex flex-col md:flex-row relative overflow-hidden">
        {/* Left Sidebar: Player 1 Reserve (White) on top, Player 2 Reserve (Black) underneath */}
        <div className="hidden md:flex flex-col w-72 p-4 bg-slate-950/80 border-r border-slate-800/80 overflow-y-auto z-10 shrink-0 gap-4">
          {/* Player 1 Reserve (White - Always 1st) */}
          <ReservePanel
            player={1}
            reserve={p1Reserve}
            isActive={currentPlayer === 1 && !isAITurn}
            selectedBugType={currentPlayer === 1 ? selectedReserveBug : null}
            onSelectBugType={handleSelectReserveBug}
            turnCount={turnCountP1}
            queenPlaced={isQueenPlaced(board, 1)}
            isAITurn={settings.mode === 'AI' && settings.humanColor === 'BLACK'}
          />

          {/* Player 2 Reserve (Black - Underneath Player 1) */}
          <ReservePanel
            player={2}
            reserve={p2Reserve}
            isActive={currentPlayer === 2 && !isAITurn}
            selectedBugType={currentPlayer === 2 ? selectedReserveBug : null}
            onSelectBugType={handleSelectReserveBug}
            turnCount={turnCountP2}
            queenPlaced={isQueenPlaced(board, 2)}
            isAITurn={settings.mode === 'AI' && settings.humanColor === 'WHITE'}
          />
        </div>

        {/* Center Hex Grid Board Stage */}
        <div className="flex-1 relative h-full">
          <HexBoard
            board={board}
            selectedHex={selectedHex}
            validDestinations={validDestinations}
            pillbugTargetHex={pillbugTargetHex}
            pillbugDestinations={pillbugDestinations}
            onSelectHex={handleSelectHex}
            onSelectDestination={handleSelectDestination}
            currentPlayer={currentPlayer}
            isAITurn={isAITurn}
            lastMovedHex={lastMovedHex}
          />

          {/* Move History Drawer Overlay */}
          <div className="absolute bottom-4 right-4 z-20 max-w-xs w-full">
            <MoveLog logs={moveHistory} />
          </div>
        </div>

        {/* Mobile Reserves Bottom Switcher Bar */}
        <div className="block md:hidden p-3 bg-slate-900 border-t border-slate-800 z-20">
          <ReservePanel
            player={currentPlayer}
            reserve={currentPlayer === 1 ? p1Reserve : p2Reserve}
            isActive={!isAITurn}
            selectedBugType={selectedReserveBug}
            onSelectBugType={handleSelectReserveBug}
            turnCount={currentPlayer === 1 ? turnCountP1 : turnCountP2}
            queenPlaced={isQueenPlaced(board, currentPlayer)}
            isAITurn={
              settings.mode === 'AI' &&
              ((settings.humanColor === 'WHITE' && currentPlayer === 2) ||
                (settings.humanColor === 'BLACK' && currentPlayer === 1))
            }
          />
        </div>
      </div>

      {/* Modals */}
      <NewGameModal
        isOpen={isNewGameModalOpen}
        onStartGame={handleStartNewGame}
        onClose={() => setIsNewGameModalOpen(false)}
        canCancel={board.size > 0}
      />

      <GameOverModal
        isOpen={isGameOverModalOpen}
        winner={gameStatus.winner}
        onRestart={() => handleStartNewGame(settings)}
        onNewGameSetup={() => {
          setIsGameOverModalOpen(false);
          setIsNewGameModalOpen(true);
        }}
      />

      <KotlinCodeViewer
        isOpen={isKotlinModalOpen}
        onClose={() => setIsKotlinModalOpen(false)}
      />
    </div>
  );
}
