import React, { createContext, useContext, useEffect, useState, useMemo } from 'react';
import { Language, Translations, translations } from '../i18n/translations';

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextProps>({
  language: 'en',
  setLanguage: () => {},
  t: translations.en,
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    try {
      const saved = localStorage.getItem('rogue_language') as Language;
      if (saved && (saved === 'en' || saved === 'es')) {
        setLanguageState(saved);
      } else {
        const browserLang = navigator.language?.toLowerCase() || '';
        if (browserLang.startsWith('es')) {
          setLanguageState('es');
        }
      }
    } catch {
      // Ignore localStorage errors during SSR or sandbox
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('rogue_language', lang);
    } catch {
      // Ignore
    }
  };

  const t = useMemo(() => translations[language], [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);

