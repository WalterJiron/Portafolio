import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Skills from "./components/skills/skills";
import Project from "./components/projects/project";
import Contact from "./components/contact/contact";
import "./index.css";

const App = () => {
  return (
    <>
      <a href="#main" className="skip-link">
        Saltar al contenido
      </a>

      <Header />

      <main id="main">
        <Hero />
        <Skills />
        <Project />
        <Contact />
      </main>
    </>
  );
};

export default App;
