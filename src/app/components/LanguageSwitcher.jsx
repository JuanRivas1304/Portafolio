'use client';

import { useLanguage } from '../i18n/LanguageProvider';

function LanguageSwitcher() {
  const { language, translations, changeLanguage } = useLanguage();

  return (
    <div
      className="absolute top-6 right-6 md:right-10 z-10 flex items-center gap-2 text-sm text-gray-600"
      aria-label={translations.language.selectorLabel}
    >
      <button
        type="button"
        aria-label={translations.language.spanish}
        aria-pressed={language === 'es'}
        onClick={() => changeLanguage('es')}
        className={`transition duration-[250ms] hover:text-[#f73d11] ${language === 'es' ? 'font-semibold text-[#f73d11]' : ''}`}
      >
        🇪🇸 ES
      </button>
      <span aria-hidden="true">|</span>
      <button
        type="button"
        aria-label={translations.language.english}
        aria-pressed={language === 'en'}
        onClick={() => changeLanguage('en')}
        className={`transition duration-[250ms] hover:text-[#f73d11] ${language === 'en' ? 'font-semibold text-[#f73d11]' : ''}`}
      >
        🇺🇸 EN
      </button>
    </div>
  );
}

export default LanguageSwitcher;
