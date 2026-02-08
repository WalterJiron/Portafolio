import React from "react";
import { FaArrowDown } from "react-icons/fa";
import styles from "./Hero.module.css";

const Hero = () => {
  const handleScrollToSkills = () => {
    const skillsSection = document.getElementById("skills");
    if (skillsSection) {
      skillsSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.badge}>
            <span>👋 ¡Hola! Soy</span>
          </div>

          <h1 className={styles.title}>
            Walter Alexei
            <span className={styles.highlight}> Amador Jirón</span>
          </h1>

          <h2 className={styles.subtitle}>
            <span className={styles.role}>Backend Developer</span>
            <span className={styles.separator}> • </span>
            <span className={styles.role}>Ingeniero en Sistemas</span>
          </h2>

          <p className={styles.description}>
            Me especializo en desarrollo backend, creando soluciones escalables
            y eficientes con código limpio y buenas prácticas. Me apasiona
            resolver problemas complejos y construir arquitecturas robustas.
          </p>

          <div className={styles.actions}>
            <a href="#contact" className={styles.primaryBtn}>
              Contactar
            </a>
            <a
              href="/Walter_Jiron_CV.pdf"
              download="Walter_Jiron_CV.pdf"
              className={styles.secondaryBtn}
            >
              Descargar CV
            </a>
          </div>
        </div>

        <div className={styles.arrowContainer}>
          <button
            className={styles.arrowButton}
            onClick={handleScrollToSkills}
            aria-label="Desplazarse a habilidades"
          >
            <FaArrowDown className={styles.arrowIcon} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
