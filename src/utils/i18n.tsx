// Lightweight i18n for Bugz Strategy: no external dependency.
// Languages: English (default), Spanish, Brazilian Portuguese, French, German, Japanese, Chinese.
// UI strings live in ./strings; components access them via useI18n() -> t('key').

import React, { createContext, useContext, useEffect, useState } from 'react';
import { STRINGS } from './strings';

export type Lang = 'en' | 'es' | 'pt' | 'fr' | 'de' | 'ja' | 'zh';

export const LANGS: Lang[] = ['en', 'es', 'pt', 'fr', 'de', 'ja', 'zh'];

export const LANG_NAMES: Record<Lang, string> = {
  en: 'English',
  es: 'Español',
  pt: 'Português',
  fr: 'Français',
  de: 'Deutsch',
  ja: '日本語',
  zh: '中文'
};

type Entry = Record<Lang, string>;

export type TFunc = (key: keyof typeof STRINGS, vars?: Record<string, string | number>) => string;

const LANG_KEY = 'bugz-lang-v1';

export function getStoredLang(): Lang {
  try {
    const saved = localStorage.getItem(LANG_KEY);
    if (saved && (LANGS as string[]).includes(saved)) return saved as Lang;
  } catch {
    // Ignore storage errors.
  }
  return detectDeviceLang();
}

/** Map the device/browser locale to a supported language, defaulting to English. */
function detectDeviceLang(): Lang {
  try {
    const candidates = typeof navigator !== 'undefined' ? navigator.languages ?? [navigator.language] : [];
    for (const raw of candidates) {
      const code = raw.toLowerCase().replace(/_/g, '-');
      if ((LANGS as string[]).includes(code)) return code as Lang;
      const base = code.split('-')[0];
      if ((LANGS as string[]).includes(base)) return base as Lang;
    }
  } catch {
    // Ignore detection errors.
  }
  return 'en';
}

interface I18nContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: TFunc;
}

const I18nContext = createContext<I18nContextValue>({
  lang: 'en',
  setLang: () => {},
  t: (key) => String(key)
});

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Lang>(() => getStoredLang());

  useEffect(() => {
    try {
      localStorage.setItem(LANG_KEY, lang);
    } catch {
      // Ignore storage errors.
    }
  }, [lang]);

  const t: TFunc = (key, vars) => {
    const entry = STRINGS[key] as Entry | undefined;
    const text = entry ? entry[lang] ?? entry.en : String(key);
    if (!vars) return text;
    return text.replace(/\{(\w+)\}/g, (_, name: string) =>
      vars[name] !== undefined ? String(vars[name]) : `{${name}}`
    );
  };

  return <I18nContext.Provider value={{ lang, setLang, t }}>{children}</I18nContext.Provider>;
};

export function useI18n(): I18nContextValue {
  return useContext(I18nContext);
}

/** Compact language selector for headers and menus. */
export const LanguageSwitcher: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { lang, setLang } = useI18n();
  return (
    <select
      value={lang}
      onChange={(e) => setLang(e.target.value as Lang)}
      aria-label="Language"
      className={`rounded-lg border border-slate-700 bg-slate-800 px-2 py-1 text-xs font-bold text-slate-200 transition-colors hover:bg-slate-700 cursor-pointer ${className}`}
    >
      {LANGS.map((l) => (
        <option key={l} value={l}>
          {LANG_NAMES[l]}
        </option>
      ))}
    </select>
  );
};