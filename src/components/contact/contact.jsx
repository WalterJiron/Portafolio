import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";
import { TbFileCv } from "react-icons/tb";
import { HiCheckCircle, HiXCircle } from "react-icons/hi";
import { animate } from "animejs";
import { triggerCVDownload } from "../../utils/downloadCV";

const SOCIAL_LINKS = [
  {
    icon: FaGithub,
    label: "GitHub",
    sub: "@WalterJiron",
    href: "https://github.com/WalterJiron",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    sub: "Walter Alexei Amador Jirón",
    href: "https://www.linkedin.com/in/walter-alexei-amador-jirón-775991364",
  },
  {
    icon: FaEnvelope,
    label: "Correo",
    sub: "walteralexei01@gmail.com",
    href: "mailto:walteralexei01@gmail.com",
  },
  {
    icon: TbFileCv,
    label: "Currículum Vitae",
    sub: "Ver y descargar PDF",
    href: "/Walter_Jiron_CV.pdf",
    extra: {
      target: "_blank",
      rel: "noopener noreferrer",
      onClick: triggerCVDownload,
    },
  },
];

export default function Contact() {
  const form       = useRef();
  const sectionRef = useRef(null);
  const animated   = useRef(false);
  const [status, setStatus] = useState(null);
  const [toast, setToast]   = useState(null);

  const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;
          animate([".contact-info", ".contact-form-wrap"], {
            translateY: [36, 0],
            opacity: [0, 1],
            duration: 650,
            delay: (_, i) => i * 140,
            easing: "easeOutExpo",
          });
        }
      },
      { threshold: 0.08 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const showToast = (type, msg) => {
    setToast({ type, msg });
    setTimeout(() => setToast(null), 4000);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");

    const timeout = setTimeout(() => {
      setStatus("error");
      showToast("error", "Tiempo de espera excedido. Intenta nuevamente.");
    }, 15000);

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(() => {
        clearTimeout(timeout);
        setStatus("ok");
        showToast("ok", "¡Mensaje enviado! Te responderé pronto.");
        form.current.reset();
      })
      .catch(() => {
        clearTimeout(timeout);
        setStatus("error");
        showToast("error", "Ocurrió un error. Intenta de nuevo.");
      });
  };

  const isSending = status === "sending";

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: "var(--bg-alt)" }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, var(--accent-line), transparent)" }}
      />

      <div className="container relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold mb-5"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
          >
            Contacto
          </h2>

          <p
            className="text-base md:text-lg leading-relaxed"
            style={{ color: "var(--text-secondary)", fontFamily: "var(--font-body)" }}
          >
            ¿Tienes un proyecto o una oportunidad laboral? Escríbeme y conversemos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="contact-info lg:col-span-5 flex flex-col gap-6" style={{ opacity: 0 }}>
            <div className="card p-7">
              <h3
                className="text-xl font-bold mb-5"
                style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
              >
                Canales directos
              </h3>
              <ul className="flex flex-col gap-4 list-none">
                {SOCIAL_LINKS.map(({ icon: Icon, label, sub, href, extra = {} }) => (
                  <li key={label}>
                    <a
                      href={href}
                      {...extra}
                      className="flex items-center gap-4 no-underline group p-2.5 -mx-2.5 rounded-xl transition-colors duration-200 hover:bg-orange-500/5"
                    >
                      <span
                        className="flex items-center justify-center w-11 h-11 rounded-xl shrink-0 transition-transform duration-200 group-hover:scale-105"
                        style={{
                          background: "var(--bg-card-alt)",
                          border: "1px solid var(--border)",
                          color: "#f97316",
                        }}
                      >
                        <Icon className="text-lg" />
                      </span>
                      <div className="min-w-0">
                        <div
                          className="text-sm font-semibold"
                          style={{ color: "var(--text-primary)", fontFamily: "var(--font-accent)" }}
                        >
                          {label}
                        </div>
                        <div
                          className="text-xs truncate"
                          style={{ color: "var(--text-muted)", fontFamily: "var(--font-body)" }}
                        >
                          {sub}
                        </div>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="contact-form-wrap lg:col-span-7 card p-7 md:p-8" style={{ opacity: 0 }}>
            <h3
              className="text-xl font-bold mb-6"
              style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
            >
              Envíame un mensaje
            </h3>

            <form ref={form} onSubmit={sendEmail} noValidate className="flex flex-col gap-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <FormField
                  id="name"
                  label="Nombre completo"
                  type="text"
                  placeholder="Tu nombre"
                  disabled={isSending}
                  required
                />
                <FormField
                  id="email"
                  label="Correo electrónico"
                  type="email"
                  placeholder="tu@email.com"
                  disabled={isSending}
                  required
                />
              </div>

              <FormField
                id="message"
                label="Mensaje"
                type="textarea"
                placeholder="Cuéntame sobre tu proyecto o propuesta..."
                disabled={isSending}
                required
                rows={5}
              />

              <button
                type="submit"
                disabled={isSending}
                className="btn-primary w-full py-3.5 mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSending ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                    </svg>
                    Enviando...
                  </span>
                ) : (
                  "Enviar mensaje"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
      {toast && (
        <div
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3.5 rounded-xl shadow-2xl text-sm font-medium text-white"
          style={{
            background: toast.type === "ok" ? "#16a34a" : "#dc2626",
            fontFamily: "var(--font-body)",
          }}
        >
          {toast.type === "ok" ? <HiCheckCircle className="text-lg" /> : <HiXCircle className="text-lg" />}
          {toast.msg}
        </div>
      )}
    </section>
  );
}

function FormField({ id, label, type, placeholder, disabled, required, rows }) {
  const inputStyle = {
    background: "var(--bg-card-alt)",
    border: "1px solid var(--border-alt)",
    color: "var(--text-primary)",
    fontFamily: "var(--font-body)",
  };

  const baseClass =
    "w-full rounded-xl px-4 py-3 text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500/40 disabled:opacity-50";

  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={id}
        className="text-xs font-semibold uppercase tracking-wider"
        style={{ color: "var(--text-muted)", fontFamily: "var(--font-accent)" }}
      >
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          id={id}
          name={id}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          rows={rows}
          style={inputStyle}
          className={`${baseClass} resize-none`}
        />
      ) : (
        <input
          type={type}
          id={id}
          name={id}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          style={inputStyle}
          className={baseClass}
        />
      )}
    </div>
  );
}
