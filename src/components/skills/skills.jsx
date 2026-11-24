import React, { useEffect, useRef, useState } from "react";
import { mainSkills } from "./data.skills.js";
import { animate, stagger } from "animejs";

const CATEGORIES = [
  { id: "all",      label: "Todas" },
  { id: "backend",  label: "Backend & APIs",  names: ["TypeScript", "NestJS", "Python", "FastAPI", "Django"] },
  { id: "db",       label: "Bases de Datos",  names: ["SQL Server", "PostgreSQL"] },
  { id: "frontend", label: "Frontend & Mobile", names: ["React", "Next.js", "HTML", "CSS", "Dart", "Flutter"] },
  { id: "tools",    label: "DevOps & Tools",  names: ["Docker", "Linux base Debian", "Git/GitHub", "Postman", "n8n"] },
];

export default function Skills() {
  const sectionRef = useRef(null);
  const animated   = useRef(false);
  const [activeCat, setActiveCat] = useState("all");

  const filteredSkills =
    activeCat === "all"
      ? mainSkills
      : mainSkills.filter((s) =>
          CATEGORIES.find((c) => c.id === activeCat)?.names.includes(s.name)
        );

  useEffect(() => {
    const runAnim = () => {
      if (animated.current) return;
      animated.current = true;

      animate(".skills-heading", {
        translateY: [-24, 0],
        opacity: [0, 1],
        duration: 650,
        easing: "easeOutExpo",
      });

      animate(".skill-card", {
        translateY: [28, 0],
        opacity: [0, 1],
        duration: 550,
        delay: stagger(40),
        easing: "easeOutExpo",
      });
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) runAnim();
      },
      { threshold: 0.08 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!animated.current) return;
    animate(".skill-card", {
      scale: [0.94, 1],
      opacity: [0, 1],
      duration: 380,
      delay: stagger(30),
      easing: "easeOutExpo",
    });
  }, [activeCat]);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: "var(--bg-alt)" }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, var(--accent-line), transparent)" }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, var(--accent-line), transparent)" }}
      />

      <div className="container relative z-10">
        <div className="skills-heading text-center max-w-2xl mx-auto mb-12" style={{ opacity: 0 }}>
          <h2
            className="text-4xl md:text-5xl font-bold mb-5"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
          >
            Habilidades
          </h2>

          <p
            className="text-base md:text-lg leading-relaxed"
            style={{ color: "var(--text-secondary)", fontFamily: "var(--font-body)" }}
          >
            Herramientas y tecnologías con las que diseño y construyo sistemas
            robustos, APIs escalables y aplicaciones móviles.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-2.5 mb-12">
          {CATEGORIES.map((cat) => {
            const isActive = activeCat === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCat(cat.id)}
                className="px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all duration-200 cursor-pointer"
                style={{
                  fontFamily: "var(--font-accent)",
                  background: isActive ? "#f97316" : "var(--bg-card)",
                  color: isActive ? "#ffffff" : "var(--text-secondary)",
                  border: `1px solid ${isActive ? "#f97316" : "var(--border)"}`,
                  boxShadow: isActive ? "var(--shadow-brand)" : "var(--shadow-sm)",
                }}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="skill-card card group flex flex-col items-center justify-center gap-3.5 p-6 text-center cursor-default hover:-translate-y-1.5"
              style={{ opacity: animated.current ? 1 : 0 }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center p-2.5 transition-transform duration-300 group-hover:scale-110"
                style={{
                  background: "var(--bg-card-alt)",
                  border: "1px solid var(--border)",
                }}
              >
                <img
                  src={skill.icon}
                  alt={`Icono de ${skill.name}`}
                  width={36}
                  height={36}
                  className="w-9 h-9 object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <span
                className="text-xs md:text-sm font-semibold leading-snug transition-colors duration-200"
                style={{
                  fontFamily: "var(--font-accent)",
                  color: "var(--text-secondary)",
                }}
              >
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
