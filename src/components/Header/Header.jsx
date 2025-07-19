import { useState } from "react";
import styles from "./Header.module.css";
import { FaBars, FaTimes, FaGithub } from "react-icons/fa";
import { TbFileCv } from "react-icons/tb";

export default function Header() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const closeMenu = () => {
    setMenuActive(false);
  };

  const downloadPdf = (e) => {
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
    <header
      className={`${styles.header} ${menuActive ? styles["menu-open"] : ""}`}
    >
      <nav className={styles.nav}>
        <ul className={`${styles.menu} ${menuActive ? styles.active : ""}`}>
          <li>
            <a href="#intro" onClick={closeMenu}>
              Inicio
            </a>
          </li>
          <li>
            <a href="#skills" onClick={closeMenu}>
              Habilidades
            </a>
          </li>
          <li>
            <a href="#project" onClick={closeMenu}>
              Proyectos
            </a>
          </li>
          <li>
            <a href="#contact" onClick={closeMenu}>
              Contacto
            </a>
          </li>
        </ul>
        <ul className={styles.socialLinks}>
          <li>
            <a href="https://github.com/WalterJiron" target="_blank">
              <FaGithub />
              <span>GitHub</span>
            </a>
          </li>
          <li>
            <a
              href="/Walter_Jiron_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={downloadPdf}
            >
              <TbFileCv style={{ color: "green" }} />
              <span>CV</span>
            </a>
          </li>
        </ul>
      </nav>
      <div className={styles.hamburger} onClick={toggleMenu}>
        {menuActive ? <FaTimes /> : <FaBars />}
      </div>
    </header>
  );
}
