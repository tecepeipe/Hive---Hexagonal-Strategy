import React from 'react';
import { Player } from '../types/hive';
import { Trophy, RefreshCw, Flag } from 'lucide-react';

interface GameOverModalProps {
  isOpen: boolean;
  winner: Player | 'DRAW' | null;
  onRestart: () => void;
  onNewGameSetup: () => void;
}

export const GameOverModal: React.FC<GameOverModalProps> = ({
  isOpen,
  winner,
  onRestart,
  onNewGameSetup,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fade-in">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-sm w-full p-6 text-center shadow-2xl relative overflow-hidden">
        <div className="w-16 h-16 rounded-full bg-amber-500/20 border border-amber-500/50 flex items-center justify-center mx-auto mb-4 text-amber-400">
          <Trophy className="w-8 h-8" />
        </div>

        <h2 className="text-2xl font-black text-slate-100 mb-2">
          {winner === 'DRAW'
            ? '🤝 Mutual Draw!'
            : winner === 1
            ? '🎉 Player 1 (White) Wins!'
            : '🎉 Player 2 (Black) Wins!'}
        </h2>

        <p className="text-xs text-slate-400 mb-6">
          {winner === 'DRAW'
            ? 'Both Queen Bees were completely surrounded simultaneously!'
            : `The opposing Queen Bee has been completely surrounded on all 6 sides!`}
        </p>

        <div className="flex flex-col gap-2">
          <button
            onClick={onRestart}
            className="w-full py-3 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-lg shadow-amber-500/20"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Play Again</span>
          </button>

          <button
            onClick={onNewGameSetup}
            className="w-full py-3 rounded-2xl border border-slate-700 text-slate-300 font-bold text-xs hover:bg-slate-800 transition-colors"
          >
            Match Options / Difficulty
          </button>
        </div>
      </div>
    </div>
  );
};
