"use client";

import { useLanguage } from "../i18n/LanguageProvider";
import Reveal from "./Reveal";

export default function Education() {
  const { t } = useLanguage();
  const study = t("education.study");
  const courses = t("education.courses");
  const practiceItems = t("education.practiceItems");

  return (
    <section id="formacion" className="section">
      <div className="container">
        <Reveal>
          <p className="kicker">
            {t("education.kicker")}
          </p>
          <h2 className="section-title">{t("education.title")}</h2>
        </Reveal>

        <div className="edu-grid">
          <Reveal>
            <article className="card">
              <h3 className="mono-label">{t("education.studyTitle")}</h3>
              <ol className="timeline">
                {study.map((entry) => (
                  <li key={entry.title}>
                    <p className="timeline-title">{entry.title}</p>
                    <p className="card-text small">{entry.subtitle}</p>
                    <p className="timeline-period">{entry.period}</p>
                  </li>
                ))}
              </ol>
            </article>
          </Reveal>

          <Reveal delay={70}>
            <article className="card">
              <h3 className="mono-label">{t("education.coursesTitle")}</h3>
              <ul className="plain-list">
                {courses.map((course) => (
                  <li key={course.title}>
                    <p className="timeline-title">{course.title}</p>
                    <p className="card-text small">{course.detail}</p>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>

          <Reveal delay={140}>
            <article className="card">
              <h3 className="mono-label">{t("education.practiceTitle")}</h3>
              <p className="card-text small">{t("education.practiceText")}</p>
              <ul className="chips">
                {practiceItems.map((entry) => (
                  <li key={entry} className="chip">
                    {entry}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
