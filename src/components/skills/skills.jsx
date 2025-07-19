import React from "react";
import imagenes from "./img/images.js";
import styles from "./skills.module.css";

export default function Skills() {
  const mainSkills = [
    { name: "JavaScript", icon: imagenes.iconoJs },
    { name: "TypeScript", icon: imagenes.iconoTs },
    { name: "NestJS", icon: imagenes.iconoNestJS },
    { name: "Python", icon: imagenes.iconoPy },
    { name: "FastAPI", icon: imagenes.iconoFastapi },
    { name: "HTML", icon: imagenes.iconoHtml },
    { name: "CSS", icon: imagenes.iconoCss },
    { name: "Git/GitHub", icon: imagenes.iconoGit },
    { name: "Linux", icon: imagenes.iconoLinux },
    { name: "SQL Server", icon: imagenes.iconoSqlServer },
    { name: "Thunder Client", icon: imagenes.iconoThunderClient },
    { name: "Microsoft Office", icon: imagenes.iconoMicrosodtOftoffice },
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

        <article>
          <ul className={styles.skillsList}>
            {mainSkills ? (
              mainSkills.map((skill, index) => (
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
              ))
            ) : (
              <p>Habilidades no disponibles</p>
            )}
          </ul>
        </article>
      </div>

      <div>
        <h2>Aprendiendo</h2>
        <article>
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
        </article>
      </div>
    </section>
  );
}
