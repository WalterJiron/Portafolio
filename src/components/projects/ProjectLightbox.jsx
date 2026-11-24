import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";

export default function ProjectLightbox({ lightbox, onClose, onChangeIndex }) {
  useEffect(() => {
    if (!lightbox) return;

    const prevBodyOverflow = document.body.style.overflow;
    const prevHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") {
        onChangeIndex((lightbox.index + 1) % lightbox.images.length);
      }
      if (e.key === "ArrowLeft") {
        onChangeIndex((lightbox.index - 1 + lightbox.images.length) % lightbox.images.length);
      }
    };

    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevBodyOverflow;
      document.documentElement.style.overflow = prevHtmlOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [lightbox, onClose, onChangeIndex]);

  if (!lightbox) return null;

  const current = lightbox.images[lightbox.index];
  const hasMultiple = lightbox.images.length > 1;

  return createPortal(
    <div
      className="fixed inset-0 z-9999 flex items-center justify-center p-4 md:p-8"
      style={{ background: "rgba(0, 0, 0, 0.85)", backdropFilter: "blur(8px)" }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Vista ampliada de ${lightbox.title}`}
    >
      <div
        className="relative max-w-5xl w-full rounded-2xl overflow-hidden p-4 md:p-6"
        style={{ background: "var(--bg-card)", border: "1px solid var(--border-alt)" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3
              className="text-lg md:text-xl font-bold"
              style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
            >
              {lightbox.title}
            </h3>
            <p className="text-xs" style={{ color: "var(--text-muted)" }}>
              {current?.label}
            </p>
          </div>
          <button
            onClick={onClose}
            className="theme-toggle"
            aria-label="Cerrar vista ampliada"
          >
            <FaTimes />
          </button>
        </div>

        <div
          className="relative flex items-center justify-center rounded-xl overflow-hidden p-4"
          style={{ background: "var(--bg-stage)", maxHeight: "72vh" }}
        >
          <img
            src={current?.src}
            alt={`${lightbox.title} - ${current?.label}`}
            className="max-h-[65vh] w-auto object-contain rounded-lg"
          />

          {hasMultiple && (
            <>
              <button
                onClick={() =>
                  onChangeIndex((lightbox.index - 1 + lightbox.images.length) % lightbox.images.length)
                }
                className="theme-toggle absolute left-3 top-1/2 -translate-y-1/2"
                aria-label="Imagen anterior"
              >
                <FaChevronLeft />
              </button>
              <button
                onClick={() =>
                  onChangeIndex((lightbox.index + 1) % lightbox.images.length)
                }
                className="theme-toggle absolute right-3 top-1/2 -translate-y-1/2"
                aria-label="Siguiente imagen"
              >
                <FaChevronRight />
              </button>
            </>
          )}
        </div>

        {hasMultiple && (
          <div className="flex justify-center gap-2 mt-4">
            {lightbox.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => onChangeIndex(idx)}
                className="px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer"
                style={{
                  fontFamily: "var(--font-accent)",
                  background: lightbox.index === idx ? "#f97316" : "var(--bg-card-alt)",
                  color: lightbox.index === idx ? "#fff" : "var(--text-secondary)",
                  border: `1px solid ${lightbox.index === idx ? "#f97316" : "var(--border)"}`,
                }}
              >
                {img.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>,
    document.body
  );
}
