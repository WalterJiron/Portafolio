import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "./contact.module.css";
import { TbFileCv } from "react-icons/tb";
import { SiLinkedin } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    let timedOut = false;

    globalThis.Swal.fire({
      title: "Enviando mensaje...",
      allowOutsideClick: false,
      didOpen: () => {
        globalThis.Swal.showLoading();
      },
    });

    // Por si tarda mas de 15 segundos
    const timeoutId = setTimeout(() => {
      timedOut = true;
      setIsSending(false);
      globalThis.Swal.fire({
        icon: "error",
        title: "Error al enviar",
        text: "Tiempo de espera excedido (15 segundos). Intenta nuevamente.",
        confirmButtonColor: "#714b2f",
        timer: 8000,
        timerProgressBar: true,
      });
    }, 15000);

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(() => {
        if (timedOut) return; // Si ya se ejecuto el timeout, no hacemos nada

        clearTimeout(timeoutId);
        setIsSending(false);

        globalThis.Swal.fire({
          icon: "success",
          title: "Mensaje enviado",
          text: "Gracias por contactarme, te responderé pronto.",
          confirmButtonColor: "#714b2f",
          timer: 3000,
          timerProgressBar: true,
        });

        form.current.reset();
      })
      .catch(() => {
        if (timedOut) return;

        clearTimeout(timeoutId);
        setIsSending(false);

        globalThis.Swal.fire({
          icon: "error",
          title: "Error al enviar",
          text: "Ocurrió un problema. Intenta nuevamente.",
          confirmButtonColor: "#714b2f",
          timer: 3000,
          timerProgressBar: true,
        });
      });
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
    <section id="contact" className={styles.contactSection}>
      <h2>Contacto</h2>

      <footer className={styles.contactContainer}>
        {/* Formulario */}
        <div className={styles.formContainer}>
          <form ref={form} onSubmit={sendEmail} className={styles.contactForm}>
            <label>Nombre</label>
            <input type="text" name="name" required />

            <label>Correo Electrónico</label>
            <input type="email" name="email" required />

            <label>Mensaje</label>
            <textarea name="message" rows="5" required />

            <button type="submit" disabled={isSending}>
              {isSending ? "Enviando..." : "Enviar Mensaje"}
            </button>
          </form>
        </div>

        {/* Contactos */}
        <div className={styles.linksContainer}>
          <h3 className={styles.linksTitle}>Puedes encuéntrame:</h3>
          <ul className={styles.contactsList}>
            <li className={styles.contactItem}>
              <a href="https://github.com/WalterJiron" target="_blank">
                <FaGithub />
                <span>GitHub</span>
              </a>
            </li>
            <li className={styles.contactItem}>
              <a
                href="https://www.linkedin.com/in/walter-alexei-amador-jirón-775991364"
                target="_blank"
              >
                <SiLinkedin />
                <span>LinkedIn</span>
              </a>
            </li>
            <li className={styles.contactItem}>
              <a href="mailto:walteralexei01@gmail.com">
                <MdEmail />
                <span>Email</span>
              </a>
            </li>
            <li className={styles.contactItem}>
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
          <div className={styles.footerNote}>
            <p style={{ color: "#000" }}>
              {new Date().getFullYear()} Walter Jirón. Todos los derechos
              reservados.
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
}
