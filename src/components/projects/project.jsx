import React from "react";
import projects from "./data.projects.js";
import styles from "./project.module.css";

export default function Project() {
  return (
    <section id="project" className={styles.projectsSection}>
      <h2>Proyectos</h2>
      <article>
        <ul className={styles.projectsList}>
          {/* render all projects */}

          {projects ? (
            projects.map((project, key) => (
              <li key={key} className={styles.projectItem}>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.image && (
                    <img
                      src={project.image}
                      alt={`Imagen de ${project.title}`}
                      className={styles.projectIcon}
                    />
                  )}
                  <h3>Proyecto: {project.title}</h3>
                  <p>{project.description}</p>
                </a>
              </li>
            ))
          ) : (
            <p>Proyectos no disponibles.</p>
          )}
        </ul>
      </article>
    </section>
  );
}
