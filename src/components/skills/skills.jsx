import React from "react";
import imagenes from "./img/images.js";
import styles from "./skills.module.css"; // Importa el CSS como módulo

export default function Skills() {
  const mainSkills = [
    { name: "JavaScript", icon: imagenes.iconoJs },
    { name: "TypeScript", icon: imagenes.iconoTs },
    { name: "Python", icon: imagenes.iconoPy },
    { name: "HTML", icon: imagenes.iconoHtml },
    { name: "Git", icon: imagenes.iconoGit },
    { name: "Linux", icon: imagenes.iconoLinux },
    { name: "NestJS", icon: imagenes.iconoNestJS },
    { name: "SQL Server", icon: imagenes.iconoSqlServer },
  ];

  const learningSkills = [
    { name: "Docker", icon: imagenes.iconoDocker },
    { name: "React", icon: imagenes.iconoReact },
    { name: "Java", icon: imagenes.iconoJava },
  ];

  return (
    <section id="skills" className={styles.skillsSection}>
      <div>
        <h2>Habilidades</h2>
        <ul className={styles.skillsList}>
          {mainSkills.map((skill, index) => (
            <li key={index} className={styles.skillItem}>
              {skill.icon && (
                <img
                  src={skill.icon}
                  alt={`Icono de ${skill.name}`}
                  className={styles.skillIcon}
                />
              )}
              <h3>{skill.name}</h3>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2>Aprendiendo</h2>
        <ul className={styles.skillsList}>
          {learningSkills.map((skill, index) => (
            <li key={index} className={styles.skillItem}>
              {skill.icon && (
                <img
                  src={skill.icon}
                  alt={`Icono de ${skill.name}`}
                  className={styles.skillIcon}
                />
              )}
              <h3>{skill.name}</h3>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
