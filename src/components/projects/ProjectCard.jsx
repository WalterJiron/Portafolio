import React, { useState } from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaLock,
  FaChevronLeft,
  FaChevronRight,
  FaExpand,
} from "react-icons/fa";

export default function ProjectCard({ project, large, onOpenLightbox }) {
  const [imgIdx, setImgIdx] = useState(0);
  const imgs = project.images || [];
  const currentImg = imgs[imgIdx] || imgs[0];
  const hasMultiple = imgs.length > 1;

  const prevImg = (e) => {
    e.stopPropagation();
    setImgIdx((i) => (i - 1 + imgs.length) % imgs.length);
  };

  const nextImg = (e) => {
    e.stopPropagation();
    setImgIdx((i) => (i + 1) % imgs.length);
  };

  return (
    <article
      className="project-card card group flex flex-col overflow-hidden hover:-translate-y-1.5"
      style={{ opacity: 0 }}
    >
      <div
        className="flex flex-col"
        style={{
          background: "var(--bg-stage)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div className="flex items-center justify-between px-4 pt-3.5 pb-1">
          <div className="flex items-center gap-2">
            {project.featured && (
              <span
                className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold text-white"
                style={{ background: "#f97316", fontFamily: "var(--font-accent)" }}
              >
                Destacado
              </span>
            )}
            {!project.link && !project.webLink && (
              <span
                className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-medium"
                style={{
                  background: "var(--bg-card)",
                  color: "var(--text-secondary)",
                  border: "1px solid var(--border-alt)",
                  fontFamily: "var(--font-accent)",
                }}
              >
                <FaLock className="text-[10px]" /> Privado
              </span>
            )}
          </div>

          <button
            onClick={() => onOpenLightbox(imgIdx)}
            className="theme-toggle w-7 h-7"
            title="Ampliar imagen"
            aria-label="Ampliar imagen"
          >
            <FaExpand className="text-[11px]" />
          </button>
        </div>

        <div
          className={`relative flex items-center justify-center px-5 py-3 cursor-pointer overflow-hidden ${
            large ? "h-56 md:h-64" : "h-44"
          }`}
          onClick={() => onOpenLightbox(imgIdx)}
        >
          {currentImg && (
            <img
              src={currentImg.src}
              alt={`${project.title} - ${currentImg.label}`}
              width={480}
              height={300}
              className="max-h-full max-w-full object-contain rounded-xl shadow-md transition-transform duration-500 group-hover:scale-[1.03]"
              loading="lazy"
              decoding="async"
            />
          )}
        </div>

        {hasMultiple && (
          <div className="flex items-center justify-between gap-3 px-4 pb-3.5 pt-1">
            <button
              onClick={prevImg}
              className="theme-toggle w-8 h-8 shrink-0"
              aria-label="Vista anterior"
            >
              <FaChevronLeft className="text-xs" />
            </button>

            <div
              className="flex items-center gap-1 p-1 rounded-full"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border-alt)",
              }}
            >
              {imgs.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setImgIdx(idx)}
                  className="px-3 py-1 rounded-full text-[11px] font-semibold transition-all cursor-pointer"
                  style={{
                    fontFamily: "var(--font-accent)",
                    background: imgIdx === idx ? "#f97316" : "transparent",
                    color: imgIdx === idx ? "#ffffff" : "var(--text-muted)",
                  }}
                >
                  {img.label}
                </button>
              ))}
            </div>

            <button
              onClick={nextImg}
              className="theme-toggle w-8 h-8 shrink-0"
              aria-label="Siguiente vista"
            >
              <FaChevronRight className="text-xs" />
            </button>
          </div>
        )}
      </div>

      <div className="flex flex-col flex-1 p-6 md:p-7">
        <h3
          className="text-xl md:text-2xl font-bold mb-3 transition-colors duration-200"
          style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
        >
          {project.title}
        </h3>

        <p
          className="text-sm md:text-[15px] leading-relaxed mb-6 flex-1"
          style={{ color: "var(--text-secondary)", fontFamily: "var(--font-body)" }}
        >
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech?.map((t) => (
            <span
              key={t}
              className="px-3 py-1 rounded-lg text-xs font-semibold"
              style={{
                fontFamily: "var(--font-accent)",
                background: "var(--accent-glow)",
                border: "1px solid var(--accent-line)",
                color: "#f97316",
              }}
            >
              {t}
            </span>
          ))}
        </div>

        <div
          className="flex flex-wrap items-center gap-4 pt-4 mt-auto"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold no-underline transition-colors duration-200 hover:text-orange-500"
              style={{ color: "var(--text-primary)", fontFamily: "var(--font-accent)" }}
            >
              <FaGithub className="text-base" />
              <span>Ver Código</span>
            </a>
          )}
          {project.webLink && (
            <a
              href={project.webLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold no-underline transition-colors duration-200"
              style={{ color: "#f97316", fontFamily: "var(--font-accent)" }}
            >
              <FaExternalLinkAlt className="text-xs" />
              <span>Ver Sitio Web</span>
            </a>
          )}
          {!project.link && !project.webLink && (
            <span
              className="inline-flex items-center gap-2 text-xs font-medium italic"
              style={{ color: "var(--text-muted)", fontFamily: "var(--font-body)" }}
            >
              <FaLock className="text-xs" /> Repositorio privado de uso empresarial
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
