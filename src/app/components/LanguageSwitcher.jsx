"use client";

import { useLanguage } from "../i18n/LanguageProvider";

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="lang-switch" role="group" aria-label="Language / Idioma">
      {["es", "en"].map((code) => (
        <button
          key={code}
          type="button"
          className={`lang-btn${lang === code ? " active" : ""}`}
          aria-pressed={lang === code}
          onClick={() => setLang(code)}
        >
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
