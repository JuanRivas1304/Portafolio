"use client";

import { useLanguage } from "../i18n/LanguageProvider";
import Reveal from "./Reveal";

export default function About() {
  const { t } = useLanguage();
  const paragraphs = t("about.paragraphs");
  const cards = t("about.cards");

  return (
    <section id="sobre-mi" className="section">
      <div className="container">
        <Reveal>
          <p className="kicker">
            {t("about.kicker")}
          </p>
          <h2 className="section-title">{t("about.title")}</h2>
        </Reveal>

        <div className="about-grid">
          <Reveal className="about-text">
            {paragraphs.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </Reveal>

          <div className="about-cards">
            {cards.map((card, index) => (
              <Reveal key={card.title} delay={index * 70}>
                <article className="card">
                  <h3 className="card-title">{card.title}</h3>
                  <p className="card-text">{card.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
