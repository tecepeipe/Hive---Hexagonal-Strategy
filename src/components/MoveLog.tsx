import React, { useState } from 'react';
import { MoveLogEntry } from '../types/bugz';
import { ChevronDown, ChevronUp, History } from 'lucide-react';
import { useI18n } from '../utils/i18n';

interface MoveLogProps {
  logs: MoveLogEntry[];
}

export const MoveLog: React.FC<MoveLogProps> = ({ logs }) => {
  const { t } = useI18n();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="bg-slate-900/90 backdrop-blur border border-slate-800 rounded-xl overflow-hidden shadow-lg transition-all">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-2.5 flex items-center justify-between text-xs font-semibold text-slate-300 hover:text-white bg-slate-800/50 hover:bg-slate-800 transition-colors"
      >
        <div className="flex items-center gap-2">
          <History className="w-4 h-4 text-amber-400" />
          <span>{t('moveHistory', { n: logs.length })}</span>
        </div>
        {isOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
      </button>

      {isOpen && (
        <div className="max-h-48 overflow-y-auto p-3 divide-y divide-slate-800/60 text-xs text-slate-400">
          {logs.length === 0 ? (
            <p className="text-center italic py-2 text-slate-500">{t('noMoves')}</p>
          ) : (
            [...logs].reverse().map((entry, idx) => (
              <div key={idx} className="py-1.5 flex items-start justify-between gap-2">
                <span className="font-mono text-[10px] text-slate-500">
                  T{entry.turnNumber} P{entry.player}
                </span>
                <span className="text-slate-200 font-medium flex-1 text-right">
                  {entry.description}
                </span>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};
