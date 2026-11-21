"use client";

import { SITE } from "../data/site";
import { useLanguage } from "../i18n/LanguageProvider";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>
          © {new Date().getFullYear()} {SITE.name}. {t("footer.rights")}.
        </p>
        <p className="footer-built">{t("footer.built")}</p>
      </div>
    </footer>
  );
}
