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

  const AlertCV = () => {
    globalThis.Swal.fire({
      icon: "error",
      title: "En construccion",
      text: "El C.V pronto estara disponible.!",
    });
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
            </a>
          </li>
          <li>
            <div /*href="#" target="_blank" */ onClick={AlertCV}>
              <TbFileCv style={{ color: "green" }} />
            </div>
          </li>
        </ul>
      </nav>
      <div className={styles.hamburger} onClick={toggleMenu}>
        {menuActive ? <FaTimes /> : <FaBars />}
      </div>
    </header>
  );
}
