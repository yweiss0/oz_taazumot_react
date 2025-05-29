import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
  direction: 'ltr' | 'rtl';
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const { i18n } = useTranslation();
  const [language, setLanguageState] = useState(i18n.language);
  const [direction, setDirection] = useState<'ltr' | 'rtl'>(i18n.language === 'he' ? 'rtl' : 'ltr');
  const [isRTL, setIsRTL] = useState(i18n.language === 'he');

  const setLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setLanguageState(lang);
  };

  // Initialize HTML attributes on mount
  useEffect(() => {
    const initialDirection = i18n.language === 'he' ? 'rtl' : 'ltr';
    document.documentElement.dir = initialDirection;
    document.documentElement.lang = i18n.language;
    document.documentElement.className = initialDirection;
  }, []);

  useEffect(() => {
    const newDirection = language === 'he' ? 'rtl' : 'ltr';
    const newIsRTL = language === 'he';
    setDirection(newDirection);
    setIsRTL(newIsRTL);
    
    // Update HTML element attributes
    document.documentElement.dir = newDirection;
    document.documentElement.lang = language;
    document.documentElement.className = newDirection;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, direction, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
}; 