"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import es from "./translations/es";
import en from "./translations/en";

const DICTIONARIES = { es, en };
const STORAGE_KEY = "portfolio-lang";
const LanguageContext = createContext(null);

function resolve(dictionary, key) {
  return key.split(".").reduce((acc, part) => (acc == null ? acc : acc[part]), dictionary);
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState("es");

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved === "es" || saved === "en") setLangState(saved);
    } catch {
      /* localStorage no disponible */
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((next) => {
    if (next !== "es" && next !== "en") return;
    setLangState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* localStorage no disponible */
    }
  }, []);

  const t = useCallback(
    (key) => {
      const value = resolve(DICTIONARIES[lang], key);
      if (value !== undefined) return value;
      const fallback = resolve(DICTIONARIES.es, key);
      return fallback !== undefined ? fallback : key;
    },
    [lang]
  );

  const value = useMemo(() => ({ lang, setLang, t }), [lang, setLang, t]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage debe usarse dentro de LanguageProvider");
  return context;
}
