import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaGithub } from "react-icons/fa";
import { TbFileCv } from "react-icons/tb";
import styles from "./Header.module.css";

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { id: "hero", label: "Inicio" },
    { id: "skills", label: "Habilidades" },
    { id: "project", label: "Proyectos" },
    { id: "contact", label: "Contacto" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuActive(!menuActive);
  const closeMenu = () => setMenuActive(false);

  const downloadCV = (e) => {
    setTimeout(() => {
      const link = document.createElement("a");
      link.href = "/Walter_Jiron_CV.pdf";
      link.download = "Walter_Jiron_CV.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 1000);
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <a href="#hero" className={styles.logo}>
          <span>WJ</span>
        </a>

        <nav className={styles.nav}>
          <ul className={styles.navList}>
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={styles.navLink}
                  onClick={closeMenu}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          <a
            href="https://github.com/WalterJiron"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.githubLink}
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="/Walter_Jiron_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={downloadCV}
            className={styles.cvButton}
            aria-label="Descargar CV"
          >
            <TbFileCv />
            <span>CV</span>
          </a>
          <button
            className={styles.menuButton}
            onClick={toggleMenu}
            aria-label={menuActive ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuActive}
          >
            {menuActive ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      {menuActive && (
        <div className={styles.mobileMenu}>
          <ul className={styles.mobileNavList}>
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={styles.mobileNavLink}
                  onClick={closeMenu}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className={styles.mobileSocial}>
              <a
                href="https://github.com/WalterJiron"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub /> GitHub
              </a>
              <a
                href="/Walter_Jiron_CV.pdf"
                target="_bank"
                onClick={downloadCV}
              >
                <TbFileCv /> Ver Currículum
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
