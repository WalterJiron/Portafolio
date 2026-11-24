import React, { useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import HeroBackground from "./HeroBackground";
import HeroScrollCue from "./HeroScrollCue";
import { initHeroAnimations } from "./heroAnimations";

const ROLES = ["Backend Developer", "Ingeniero en Sistemas"];

export default function Hero() {
  useEffect(() => {
    initHeroAnimations();
  }, []);

  return (
    <section
      id="hero"
      className="section noise dot-grid relative overflow-hidden flex items-center min-h-svh pt-28 pb-16 md:pb-24"
      style={{ background: "var(--bg)" }}
    >
      <HeroBackground />

      <div className="container relative" style={{ zIndex: 1 }}>
        <div className="max-w-190">
          <h1
            className="hero-name mb-5 font-bold leading-[1.08] tracking-[-0.02em]"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
              color: "var(--text-primary)",
            }}
          >
            Walter Alexei
            <br />
            <span className="text-gradient">Amador Jirón</span>
          </h1>

          <div className="hero-roles flex flex-wrap gap-2.5 mb-8">
            {ROLES.map((role) => (
              <span
                key={role}
                className="inline-block px-3.5 py-1.5 rounded-lg text-sm font-medium"
                style={{
                  fontFamily: "var(--font-body)",
                  color: "var(--text-secondary)",
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-alt)",
                }}
              >
                {role}
              </span>
            ))}
          </div>

          <p
            className="hero-desc max-w-145 text-[1.05rem] leading-[1.75] mb-10"
            style={{
              color: "var(--text-secondary)",
              fontFamily: "var(--font-body)",
            }}
          >
            Me especializo en desarrollo backend construyendo soluciones escalables
            con código limpio y buenas prácticas. Apasionado por arquitecturas robustas
            con <strong style={{ color: "var(--brand-text)", fontWeight: 600 }}>NestJS, FastAPI</strong> y
            desarrollo móvil con <strong style={{ color: "var(--brand-text)", fontWeight: 600 }}>Flutter</strong>.
          </p>

          <div className="flex flex-wrap gap-3">
            <a href="#contact" className="btn-primary hero-cta">
              Contáctame
            </a>
            <a
              href="https://github.com/WalterJiron"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost hero-cta"
            >
              <FaGithub /> GitHub
            </a>
            <a
              href="/Walter_Jiron_CV.pdf"
              download="Walter_Jiron_CV.pdf"
              className="btn-ghost hero-cta"
            >
              <HiDownload /> Descargar CV
            </a>
          </div>
        </div>
      </div>

      <HeroScrollCue />
    </section>
  );
}
