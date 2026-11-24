import React, { Suspense, lazy } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import "./index.css";

const Skills  = lazy(() => import("./components/skills/Skills"));
const Project = lazy(() => import("./components/projects/Project"));
const Contact = lazy(() => import("./components/contact/Contact"));

const App = () => {
  return (
    <>
      <a href="#main" className="skip-link">
        Saltar al contenido
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Suspense fallback={null}>
          <Skills />
          <Project />
          <Contact />
        </Suspense>
      </main>
    </>
  );
};

export default App;
