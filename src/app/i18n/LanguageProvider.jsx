'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import es from './translations/es';
import en from './translations/en';

const translations = { es, en };
const LanguageContext = createContext(null);

function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('es');

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem('portfolio-language');
    const initialLanguage = savedLanguage === 'en' || savedLanguage === 'es' ? savedLanguage : 'es';

    setLanguage(initialLanguage);
    document.documentElement.lang = initialLanguage;
  }, []);

  const changeLanguage = (nextLanguage) => {
    if (nextLanguage !== 'es' && nextLanguage !== 'en') return;

    setLanguage(nextLanguage);
    window.localStorage.setItem('portfolio-language', nextLanguage);
    document.documentElement.lang = nextLanguage;
  };

  return (
    <LanguageContext.Provider value={{ language, translations: translations[language], changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }

  return context;
}

export default LanguageProvider;
