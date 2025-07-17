import style from "./App.module.css";
import Contact from "./components/contact/contact";
import Header from "./components/Header/Header";
import Project from "./components/project/project";
import Skills from "./components/skills/skills";

export default function App() {
  const styleContainer = {
    scrollMarginTop: "4rem",
    margin: "4rem 0",
  };
  const combinedStyleContainer = {
    ...styleContainer,
    height: "100vh",
  };

  return (
    <>
      <Header />

      <main id="main">
        <section id="intro" className={style.intro} style={styleContainer}>
          <h1>
            Walter Alexei <br /> Developer junior
          </h1>
          <h2>
            Soy Ingeniero en Sistemas de Información, con una profunda pasión
            por la programación, el desarrollo de software, codigo limpio,
            buenas practicas y la resolución de problemas tecnológicos.
          </h2>
          <p>
            Me enfoco en construir soluciones prácticas, eficientes y
            escalables. Constantemente estoy aprendiendo nuevas tecnologías y
            perfeccionando mis habilidades para crecer como profesional en el
            mundo del desarrollo, enfocado en desarrollo backend.
          </p>
        </section>

        <Skills />
      </main>
      <section id="project" style={combinedStyleContainer}>
        <Project />
      </section>

      <section id="contact" style={styleContainer}>
        <Contact />
      </section>
    </>
  );
}
