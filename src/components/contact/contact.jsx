import styles from "./contact.module.css";
import { TbFileCv } from "react-icons/tb";

export default function Contact() {
  return (
    <section id="contact" className={styles.contactSection}>
      <h2>Contacto</h2>
      <div>
        <ul className={styles.contactsList}>
          <li className={styles.contactItem}>
            <a href="https://github.com/WalterJiron">GitHub</a>
          </li>
          <li className={styles.contactItem}>
            <a href="#contact">LinkedIn</a>
          </li>
          <li className={styles.contactItem}>
            <a href="#contact">walteralexeisamadrojiron@gmail.com</a>
          </li>
          <li className={styles.contactItem}>
            <a href="#contact">
              <TbFileCv style={{ color: "green" }} />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
