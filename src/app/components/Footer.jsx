// Quinta sección - Footer
'use client';
import React from 'react';
import { useLanguage } from '../i18n/LanguageProvider';

function Footer() {
  const { translations: t } = useLanguage();

  return (
    <footer className='text-gray-700 text-center py-6 text-sm md:text-base'>
      {t.footer.copyright}
    </footer>
  );
}

export default Footer;