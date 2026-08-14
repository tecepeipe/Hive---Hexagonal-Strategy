import React from 'react';
import { X } from 'lucide-react';

interface RulesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RulesModal: React.FC<RulesModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-lg w-full max-h-[85vh] flex flex-col shadow-2xl relative overflow-hidden">
        {/* Glow accent */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-amber-500 via-emerald-500 to-blue-500 rounded-full" />

        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-900/80">
          <h2 className="text-xl font-black text-slate-100">How to Play Hive</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800 border border-slate-700 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors"
            title="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="px-6 py-5 overflow-y-auto space-y-4">
          <div>
            <p className="text-sm text-slate-300 leading-relaxed">
              <span className="font-bold text-amber-400">🎯 Goal:</span> Surround the opponent's
              Queen Bee with pieces on all six sides. First to do so wins; both surrounded at once
              is a draw.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              📜 Core Rules
            </h3>
            <ul className="space-y-1.5 text-sm text-slate-300 leading-relaxed list-none">
              <li>• Play one piece per turn (placement) or move one of your pieces.</li>
              <li>• Your Queen Bee must be introduced by your 4th turn.</li>
              <li>
                • Your first piece is placed anywhere; later pieces must be placed adjacent to one
                of your pieces. Except for your second placement, pieces may not be placed touching
                an opponent's piece.
              </li>
              <li>
                • The Hive must always stay connected. You may never move a piece that would split
                the Hive, and you may not move a piece into a gap unless it still fits the
                freedom-to-move rule (no squeezing between stacked pieces).
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              🦗 Insect Movements
            </h3>
            <ul className="space-y-2 text-sm text-slate-300 leading-relaxed list-none">
              <li>
                <span className="text-base">🐝</span> <span className="font-semibold text-slate-100">Queen Bee</span> — moves exactly 1 hex per turn.
              </li>
              <li>
                <span className="text-base">🕷️</span> <span className="font-semibold text-slate-100">Spider</span> — crawls exactly 3 hexes along the outside edge, never retracing.
              </li>
              <li>
                <span className="text-base">🪲</span> <span className="font-semibold text-slate-100">Beetle</span> — moves 1 hex and can climb on top of other pieces (including a Queen) to block them; a beetle on top moves like a beetle over the stack.
              </li>
              <li>
                <span className="text-base">🦗</span> <span className="font-semibold text-slate-100">Grasshopper</span> — jumps in a straight line over at least one piece, landing on the first empty hex in that line.
              </li>
              <li>
                <span className="text-base">🐜</span> <span className="font-semibold text-slate-100">Soldier Ant</span> — may slide any number of hexes along the outside of the Hive.
              </li>
              <li>
                <span className="text-base">🦟</span> <span className="font-semibold text-slate-100">Mosquito</span> — copies the movement (or pillbug ability) of any piece it touches.
              </li>
              <li>
                <span className="text-base">🐞</span> <span className="font-semibold text-slate-100">Ladybug</span> — moves exactly 2 hexes on top of the Hive, then 1 hex back down to the board (may land on empty board hexes).
              </li>
              <li>
                <span className="text-base">🪳</span> <span className="font-semibold text-slate-100">Pillbug</span> — may not move itself, but it can move an adjacent enemy or friendly piece 2 hexes: up onto itself, then down into an adjacent empty space. The moved piece is stunned and cannot move on the opponent's next turn.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};