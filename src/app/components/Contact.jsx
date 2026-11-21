"use client";

import { useEffect, useRef, useState } from "react";
import { SITE } from "../data/site";
import { useLanguage } from "../i18n/LanguageProvider";
import Reveal from "./Reveal";
import { IconCheck, IconCopy, IconDownload, IconGithub, IconLinkedin, IconMail } from "./Icons";

export default function Contact() {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);
  const timer = useRef(null);

  useEffect(() => () => clearTimeout(timer.current), []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(SITE.email);
      setCopied(true);
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${SITE.email}`;
    }
  };

  return (
    <section id="contacto" className="section">
      <div className="container">
        <Reveal>
          <div className="contact-card">
            <p className="kicker center">
              {t("contact.kicker")}
            </p>
            <h2 className="section-title center">{t("contact.title")}</h2>
            <p className="contact-text">{t("contact.text")}</p>

            <p className="contact-email">{SITE.email}</p>

            <div className="hero-actions center">
              <a href={`mailto:${SITE.email}`} className="btn btn-primary">
                <IconMail /> {t("contact.email")}
              </a>
              <button type="button" className="btn btn-ghost" onClick={copyEmail}>
                {copied ? <IconCheck /> : <IconCopy />} {copied ? t("contact.copied") : t("contact.copy")}
              </button>
            </div>

            <div className="social-row center">
              <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" className="social-link">
                <IconLinkedin /> {t("contact.linkedin")}
              </a>
              <a href={SITE.github} target="_blank" rel="noopener noreferrer" className="social-link">
                <IconGithub /> {t("contact.github")}
              </a>
              <a href={SITE.cv} download={SITE.cvFileName} className="social-link">
                <IconDownload /> {t("contact.cv")}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
