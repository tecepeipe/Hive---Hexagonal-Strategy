import React, { useState } from 'react';
import { AIDifficulty, ExpansionsConfig, GameMode, GameSettings } from '../types/hive';
import { Bot, Users, Sparkles, Shield, Play } from 'lucide-react';

interface NewGameModalProps {
  isOpen: boolean;
  onStartGame: (settings: GameSettings) => void;
  onClose?: () => void;
  canCancel?: boolean;
}

export const NewGameModal: React.FC<NewGameModalProps> = ({
  isOpen,
  onStartGame,
  onClose,
  canCancel = false,
}) => {
  const [mode, setMode] = useState<GameMode>('AI');
  const [aiDifficulty, setAIDifficulty] = useState<AIDifficulty>('MEDIUM');
  const [expansions, setExpansions] = useState<ExpansionsConfig>({
    mosquito: true,
    ladybug: true,
    pillbug: true,
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-md w-full p-6 shadow-2xl relative overflow-hidden">
        {/* Glow accent */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-amber-500 via-emerald-500 to-blue-500 rounded-full" />

        <h2 className="text-2xl font-black text-slate-100 mb-1 flex items-center gap-2">
          <span>🐝 Hive Board Game</span>
        </h2>
        <p className="text-xs text-slate-400 mb-6">
          Configure your match mode, AI strength, and expansion pieces.
        </p>

        {/* Game Mode */}
        <div className="mb-6">
          <label className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 block">
            Game Mode
          </label>
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => setMode('PASS_AND_PLAY')}
              className={`p-3 rounded-2xl border flex flex-col items-center gap-2 transition-all ${
                mode === 'PASS_AND_PLAY'
                  ? 'bg-amber-500/15 border-amber-400 text-amber-300 shadow-md'
                  : 'bg-slate-800/50 border-slate-700/60 text-slate-400 hover:bg-slate-800'
              }`}
            >
              <Users className="w-6 h-6" />
              <span className="text-xs font-bold">Pass & Play</span>
            </button>

            <button
              onClick={() => setMode('AI')}
              className={`p-3 rounded-2xl border flex flex-col items-center gap-2 transition-all ${
                mode === 'AI'
                  ? 'bg-blue-500/15 border-blue-400 text-blue-300 shadow-md'
                  : 'bg-slate-800/50 border-slate-700/60 text-slate-400 hover:bg-slate-800'
              }`}
            >
              <Bot className="w-6 h-6" />
              <span className="text-xs font-bold">VS AI Engine</span>
            </button>
          </div>
        </div>

        {/* AI Difficulty */}
        {mode === 'AI' && (
          <div className="mb-6 animate-fade-in">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 block">
              AI Difficulty
            </label>
            <div className="grid grid-cols-3 gap-2">
              {(['EASY', 'MEDIUM', 'HARD'] as AIDifficulty[]).map(diff => (
                <button
                  key={diff}
                  onClick={() => setAIDifficulty(diff)}
                  className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all ${
                    aiDifficulty === diff
                      ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300'
                      : 'bg-slate-800/50 border-slate-700/60 text-slate-400 hover:bg-slate-800'
                  }`}
                >
                  {diff === 'EASY' ? 'Easy' : diff === 'MEDIUM' ? 'Medium' : 'Hard (Minimax)'}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Expansions */}
        <div className="mb-6">
          <label className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 block flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Expansions</span>
          </label>
          <div className="space-y-2 bg-slate-950/60 p-3 rounded-2xl border border-slate-800">
            <label className="flex items-center justify-between text-xs text-slate-300 cursor-pointer p-1">
              <span className="flex items-center gap-2">
                <span className="text-lg">🦟</span> The Mosquito
              </span>
              <input
                type="checkbox"
                checked={expansions.mosquito}
                onChange={e => setExpansions({ ...expansions, mosquito: e.target.checked })}
                className="w-4 h-4 accent-amber-500 rounded"
              />
            </label>

            <label className="flex items-center justify-between text-xs text-slate-300 cursor-pointer p-1">
              <span className="flex items-center gap-2">
                <span className="text-lg">🐞</span> The Ladybug
              </span>
              <input
                type="checkbox"
                checked={expansions.ladybug}
                onChange={e => setExpansions({ ...expansions, ladybug: e.target.checked })}
                className="w-4 h-4 accent-amber-500 rounded"
              />
            </label>

            <label className="flex items-center justify-between text-xs text-slate-300 cursor-pointer p-1">
              <span className="flex items-center gap-2">
                <span className="text-lg">💊</span> The Pillbug
              </span>
              <input
                type="checkbox"
                checked={expansions.pillbug}
                onChange={e => setExpansions({ ...expansions, pillbug: e.target.checked })}
                className="w-4 h-4 accent-amber-500 rounded"
              />
            </label>
          </div>
        </div>

        {/* Submit */}
        <div className="flex items-center gap-3">
          {canCancel && onClose && (
            <button
              onClick={onClose}
              className="flex-1 py-3 px-4 rounded-2xl border border-slate-700 text-slate-300 font-bold text-xs hover:bg-slate-800 transition-colors"
            >
              Cancel
            </button>
          )}
          <button
            onClick={() => onStartGame({ mode, aiDifficulty, expansions })}
            className="flex-1 py-3 px-4 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-lg shadow-amber-500/20"
          >
            <Play className="w-4 h-4 fill-slate-950" />
            <span>Start Game</span>
          </button>
        </div>
      </div>
    </div>
  );
};
