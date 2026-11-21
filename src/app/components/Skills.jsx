"use client";

import { STACK } from "../data/site";
import { useLanguage } from "../i18n/LanguageProvider";
import Reveal from "./Reveal";

const GROUPS = ["frontend", "backend", "databases", "tools"];

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section id="tecnologias" className="section">
      <div className="container">
        <Reveal>
          <p className="kicker">
            {t("stack.kicker")}
          </p>
          <h2 className="section-title">{t("stack.title")}</h2>
          <p className="section-sub">{t("stack.subtitle")}</p>
        </Reveal>

        <div className="stack-grid">
          {GROUPS.map((group, index) => (
            <Reveal key={group} delay={index * 60}>
              <article className="card stack-card">
                <h3 className="mono-label">{t(`stack.groups.${group}`)}</h3>
                <ul className="chips">
                  {STACK[group].map((item) => (
                    <li key={item} className="chip">
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
