import React from "react";
import imagenes from "./img/images.js";
import styles from "./skills.module.css";

export default function Skills() {
  const mainSkills = [
    { name: "TypeScript", icon: imagenes.iconoTs },
    { name: "NestJS", icon: imagenes.iconoNestJS },
    { name: "Python", icon: imagenes.iconoPy },
    { name: "HTML", icon: imagenes.iconoHtml },
    { name: "CSS", icon: imagenes.iconoCss },
    { name: "Git/GitHub", icon: imagenes.iconoGit },
    { name: "Linux", icon: imagenes.iconoLinux },
    { name: "SQL Server", icon: imagenes.iconoSqlServer },
    { name: "Thunder Client", icon: imagenes.iconoThunderClient },
    { name: "React", icon: imagenes.iconoReact },
    { name: "Java", icon: imagenes.iconoJava },
  ];

  const learningSkills = [
    { name: "Docker", icon: imagenes.iconoDocker },
    { name: "PostgreSQL", icon: imagenes.iconPostgreSQL },
  ];

  return (
    <section id="skills" className={styles.skillsSection}>
      <h2>Habilidades Técnicas</h2>

      <div className={styles.skillsContainer}>
        <div className={styles.skillsGrid}>
          {mainSkills.map((skill, index) => (
            <div key={index} className={styles.skillCard}>
              <div className={styles.skillIconWrapper}>
                <img
                  src={skill.icon}
                  alt={`Icono de ${skill.name}`}
                  className={styles.skillIcon}
                />
              </div>
              <h3 className={styles.skillName}>{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.learningSection}>
        <h3>En Aprendizaje</h3>
        <div className={styles.learningContainer}>
          {learningSkills.map((skill, index) => (
            <div key={index} className={styles.learningItem}>
              <img
                src={skill.icon}
                alt={`Icono de ${skill.name}`}
                className={styles.learningIcon}
              />
              <span>{skill.name}</span>
              <div className={styles.learningProgress}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
