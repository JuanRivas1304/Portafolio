"use client";

import { useEffect, useRef, useState } from "react";
import { PROJECTS } from "../data/site";
import { useLanguage } from "../i18n/LanguageProvider";
import Reveal from "./Reveal";
import { IconClose, IconCode, IconExternal } from "./Icons";

function ProjectImage({ src, alt, title }) {
  const imgRef = useRef(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const el = imgRef.current;
    if (el && el.complete && el.naturalWidth === 0) setFailed(true);
  }, []);

  if (failed) {
    return (
      <div className="shot shot-fallback" role="img" aria-label={alt}>
        <span>{title}</span>
      </div>
    );
  }

  return (
    <div className="shot">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img ref={imgRef} src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} />
    </div>
  );
}

function ProjectModal({ project, item, labels, onClose }) {
  const closeRef = useRef(null);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    if (closeRef.current) closeRef.current.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby={`modal-title-${project.id}`}
        onClick={(event) => event.stopPropagation()}
      >
        <button ref={closeRef} type="button" className="modal-close" onClick={onClose} aria-label={labels.close}>
          <IconClose />
        </button>

        <ProjectImage src={project.image} alt={`${labels.screenshotOf} ${item.title}`} title={item.title} />

        <div className="modal-body">
          <span className="tag">{item.tag}</span>
          <h3 id={`modal-title-${project.id}`} className="modal-title">
            {item.title}
          </h3>
          <p className="card-text">{item.summary}</p>

          <h4 className="mono-label">{labels.problem}</h4>
          <p className="card-text">{item.problem}</p>

          <h4 className="mono-label">{labels.role}</h4>
          <p className="card-text">{item.role}</p>

          <h4 className="mono-label">{labels.features}</h4>
          <ul className="feature-list">
            {item.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>

          <h4 className="mono-label">{labels.stack}</h4>
          <ul className="chips">
            {project.stack.map((tech) => (
              <li key={tech} className="chip">
                {tech}
              </li>
            ))}
          </ul>

          <div className="card-actions">
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
                {labels.demo} <IconExternal />
              </a>
            )}
            <a href={project.repo} target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-sm">
              <IconCode /> {labels.code}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const { t } = useLanguage();
  const [selectedId, setSelectedId] = useState(null);
  const triggerRef = useRef(null);
  const labels = t("projects.labels");
  const items = t("projects.items");
  const selected = PROJECTS.find((project) => project.id === selectedId);

  const openDetails = (id, event) => {
    triggerRef.current = event.currentTarget;
    setSelectedId(id);
  };

  const closeDetails = () => {
    setSelectedId(null);
    if (triggerRef.current) triggerRef.current.focus();
  };

  return (
    <section id="proyectos" className="section">
      <div className="container">
        <Reveal>
          <p className="kicker">
            {t("projects.kicker")}
          </p>
          <h2 className="section-title">{t("projects.title")}</h2>
          <p className="section-sub">{t("projects.subtitle")}</p>
        </Reveal>

        <div className="projects-grid">
          {PROJECTS.map((project, index) => {
            const item = items[project.id];
            return (
              <Reveal key={project.id} delay={index * 70}>
                <article className="card project-card">
                  <ProjectImage
                    src={project.image}
                    alt={`${labels.screenshotOf} ${item.title}`}
                    title={item.title}
                  />

                  <div className="project-body">
                    <span className="tag">{item.tag}</span>
                    <h3 className="project-title">{item.title}</h3>
                    <p className="card-text">{item.summary}</p>

                    <h4 className="mono-label">{labels.problem}</h4>
                    <p className="card-text small">{item.problem}</p>

                    <h4 className="mono-label">{labels.features}</h4>
                    <ul className="feature-list">
                      {item.features.slice(0, 4).map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>

                    <h4 className="mono-label">{labels.stack}</h4>
                    <ul className="chips">
                      {project.stack.map((tech) => (
                        <li key={tech} className="chip">
                          {tech}
                        </li>
                      ))}
                    </ul>

                    <div className="card-actions">
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-primary btn-sm"
                        >
                          {labels.demo} <IconExternal />
                        </a>
                      )}
                      <a href={project.repo} target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-sm">
                        <IconCode /> {labels.code}
                      </a>
                      <button
                        type="button"
                        className="btn btn-link btn-sm"
                        onClick={(event) => openDetails(project.id, event)}
                      >
                        {labels.details}
                      </button>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>

      {selected && (
        <ProjectModal project={selected} item={items[selected.id]} labels={labels} onClose={closeDetails} />
      )}
    </section>
  );
}
