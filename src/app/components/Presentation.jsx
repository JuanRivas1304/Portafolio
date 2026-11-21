"use client";

import { SITE } from "../data/site";
import { useLanguage } from "../i18n/LanguageProvider";
import Reveal from "./Reveal";
import { IconArrow, IconDownload, IconGithub, IconLinkedin } from "./Icons";

export default function Presentation() {
  const { t } = useLanguage();

  return (
    <section id="inicio" className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <Reveal>
            <span className="badge">
              <span className="dot" aria-hidden="true" />
              {t("hero.available")}
            </span>
          </Reveal>

          <Reveal delay={60}>
            <h1 className="hero-name">
              Juan Diego <span className="accent-text">Murillo Rivas</span>
            </h1>
          </Reveal>

          <Reveal delay={120}>
            <p className="hero-role">{t("hero.role")}</p>
            <p className="hero-subtitle">{t("hero.subtitle")}</p>
          </Reveal>

          <Reveal delay={180}>
            <p className="hero-pitch">{t("hero.pitch")}</p>
          </Reveal>

          <Reveal delay={240}>
            <div className="hero-actions">
              <a href="#proyectos" className="btn btn-primary">
                {t("hero.ctaProjects")} <IconArrow />
              </a>
              <a href={SITE.cv} download={SITE.cvFileName} className="btn btn-ghost">
                <IconDownload /> {t("hero.ctaCv")}
              </a>
            </div>
          </Reveal>

          <Reveal delay={300}>
            <div className="social-row">
              <a href={SITE.github} target="_blank" rel="noopener noreferrer" className="social-link">
                <IconGithub /> {t("hero.github")}
              </a>
              <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" className="social-link">
                <IconLinkedin /> {t("hero.linkedin")}
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className="hero-aside">
          <div className="photo-frame">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/profile.jpg" alt={t("hero.photoAlt")} width="800" height="800" />
            <span className="photo-badge">{t("hero.location")}</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
