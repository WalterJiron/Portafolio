import { useState } from "react";
import styles from "./Header.module.css";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const closeMenu = () => {
    setMenuActive(false);
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
      </nav>
      <div className={styles.hamburger} onClick={toggleMenu}>
        {menuActive ? <FaTimes /> : <FaBars />}
      </div>
    </header>
  );
}
