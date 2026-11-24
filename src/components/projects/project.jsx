import React, { useEffect, useRef, useState } from "react";
import projects from "./data.projects.js";
import ProjectCard from "./ProjectCard";
import ProjectLightbox from "./ProjectLightbox";
import { initProjectAnimations } from "./projectAnimations";

export default function Project() {
  const sectionRef = useRef(null);
  const animated = useRef(false);
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;
          initProjectAnimations();
        }
      },
      { threshold: 0.08 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section
      ref={sectionRef}
      id="project"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: "var(--bg)" }}
    >
      <div className="container relative z-10">
        <div className="projects-heading text-center max-w-2xl mx-auto mb-16" style={{ opacity: 0 }}>
          <h2
            className="text-4xl md:text-5xl font-bold mb-5"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
          >
            Proyectos
          </h2>

          <p
            className="text-base md:text-lg leading-relaxed"
            style={{ color: "var(--text-secondary)", fontFamily: "var(--font-body)" }}
          >
            Selección de proyectos que reflejan mi experiencia en arquitectura backend,
            bases de datos y desarrollo móvil.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          {featured.map((project, i) => (
            <ProjectCard
              key={i}
              project={project}
              large
              onOpenLightbox={(idx) =>
                setLightbox({ images: project.images, index: idx, title: project.title })
              }
            />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {others.map((project, i) => (
            <ProjectCard
              key={i}
              project={project}
              onOpenLightbox={(idx) =>
                setLightbox({ images: project.images, index: idx, title: project.title })
              }
            />
          ))}
        </div>
      </div>

      <ProjectLightbox
        lightbox={lightbox}
        onClose={() => setLightbox(null)}
        onChangeIndex={(index) => setLightbox((lb) => (lb ? { ...lb, index } : null))}
      />
    </section>
  );
}
