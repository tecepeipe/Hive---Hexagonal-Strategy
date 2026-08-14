import React from 'react';
import { BUG_DEFINITIONS, BugType, Piece, Player } from '../types/hive';
import { AlertCircle } from 'lucide-react';

interface ReservePanelProps {
  player: Player;
  reserve: Piece[];
  isActive: boolean;
  selectedBugType: BugType | null;
  onSelectBugType: (bugType: BugType) => void;
  turnCount: number;
  queenPlaced: boolean;
  isAITurn?: boolean;
}

export const ReservePanel: React.FC<ReservePanelProps> = ({
  player,
  reserve,
  isActive,
  selectedBugType,
  onSelectBugType,
  turnCount,
  queenPlaced,
  isAITurn = false,
}) => {
  // Group reserve pieces by bug type
  const groupedReserve = new Map<BugType, Piece[]>();
  for (const piece of reserve) {
    const list = groupedReserve.get(piece.type) || [];
    list.push(piece);
    groupedReserve.set(piece.type, list);
  }

  const isTurn4MustPlaceQueen = turnCount === 4 && !queenPlaced;

  return (
    <div
      className={`p-4 rounded-2xl border transition-all duration-300 ${
        isActive
          ? player === 1
            ? 'bg-slate-800/90 border-amber-400/60 shadow-[0_0_15px_rgba(245,158,11,0.15)]'
            : 'bg-slate-900/90 border-blue-400/60 shadow-[0_0_15px_rgba(59,130,246,0.15)]'
          : 'bg-slate-900/50 border-slate-800/80 opacity-70'
      }`}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div
            className={`w-3.5 h-3.5 rounded-full border ${
              player === 1 ? 'bg-white border-slate-300' : 'bg-slate-950 border-slate-600'
            }`}
          />
          <h3 className="font-bold text-sm text-slate-100">
            Player {player} {player === 1 ? '(White)' : '(Black)'}
          </h3>
        </div>
        <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
          Reserve ({reserve.length})
        </span>
      </div>

      {/* Mandatory Queen Placement Warning on Turn 4 */}
      {isTurn4MustPlaceQueen && isActive && (
        <div className="mb-3 p-2 bg-amber-500/20 border border-amber-500/50 rounded-lg text-amber-300 text-xs flex items-center gap-1.5 animate-bounce">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>Turn 4 Mandatory: You MUST place your Queen Bee!</span>
        </div>
      )}

      {/* Reserve Bug List */}
      <div className="grid grid-cols-4 sm:grid-cols-4 gap-2">
        {Array.from(groupedReserve.entries()).map(([bugType, pieces]) => {
          const info = BUG_DEFINITIONS[bugType];
          const count = pieces.length;
          const isSelected = selectedBugType === bugType;

          // If turn 4 and queen not placed, disable all other pieces
          const isDisabled =
            !isActive ||
            isAITurn ||
            count === 0 ||
            (isTurn4MustPlaceQueen && bugType !== 'QUEEN');

          return (
            <button
              key={bugType}
              onClick={() => !isDisabled && onSelectBugType(bugType)}
              disabled={isDisabled}
              title={`${info.name}: ${info.description}`}
              className={`relative flex flex-col items-center justify-center p-2 rounded-xl border transition-all duration-200 ${
                isSelected
                  ? 'bg-amber-500/20 border-amber-400 text-amber-200 scale-105 shadow-md'
                  : isDisabled
                  ? 'bg-slate-950/40 border-slate-800/50 text-slate-600 opacity-40 cursor-not-allowed'
                  : 'bg-slate-800/60 border-slate-700/80 hover:bg-slate-700/80 text-slate-200 hover:border-slate-500 cursor-pointer'
              }`}
            >
              <span className="text-2xl mb-1 select-none">{info.emoji}</span>
              <span className="text-[10px] font-semibold truncate max-w-full">
                {info.name.split(' ')[0]}
              </span>

              {/* Count Badge */}
              <span
                className={`absolute -top-1 -right-1 px-1.5 py-0.2 rounded-full text-[10px] font-bold border ${
                  isSelected
                    ? 'bg-amber-500 text-slate-950 border-amber-300'
                    : 'bg-slate-900 text-slate-300 border-slate-700'
                }`}
              >
                x{count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
