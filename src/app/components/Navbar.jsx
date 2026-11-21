"use client";

import { useEffect, useState } from "react";
import { NAV, SITE } from "../data/site";
import { useLanguage } from "../i18n/LanguageProvider";
import LanguageSwitcher from "./LanguageSwitcher";
import { IconClose, IconMenu } from "./Icons";

export default function Navbar() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("inicio");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV.map((item) => document.getElementById(item.id)).filter(Boolean);
    if (typeof IntersectionObserver === "undefined" || sections.length === 0) return undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={`navbar${scrolled || open ? " scrolled" : ""}`}>
      <div className="container nav-inner">
        <a href="#inicio" className="brand" onClick={() => setOpen(false)} aria-label={SITE.name}>
          <span className="brand-mark">{SITE.initials}</span>
          <span className="brand-name">{SITE.shortName}</span>
        </a>

        <nav className="nav-links" aria-label={t("nav.main")}>
          {NAV.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`nav-link${active === item.id ? " active" : ""}`}
              aria-current={active === item.id ? "true" : undefined}
            >
              {t(`nav.${item.key}`)}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <LanguageSwitcher />
          <button
            type="button"
            className="menu-btn"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t("nav.closeMenu") : t("nav.openMenu")}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <IconClose /> : <IconMenu />}
          </button>
        </div>
      </div>

      <div id="mobile-menu" className={`mobile-menu${open ? " open" : ""}`}>
        <nav className="container mobile-menu-inner" aria-label={t("nav.main")}>
          {NAV.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`mobile-link${active === item.id ? " active" : ""}`}
              onClick={() => setOpen(false)}
              tabIndex={open ? 0 : -1}
            >
              {t(`nav.${item.key}`)}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
