import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaGithub } from "react-icons/fa";
import { TbFileCv } from "react-icons/tb";
import { HiSun, HiMoon } from "react-icons/hi";
import { useTheme } from "../../context/ThemeContext";
import { triggerCVDownload } from "../../utils/downloadCV";

const NAV_ITEMS = [
  { id: "hero",    label: "Inicio" },
  { id: "skills",  label: "Habilidades" },
  { id: "project", label: "Proyectos" },
  { id: "contact", label: "Contacto" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active,   setActive]   = useState("hero");
  const { dark, toggle }        = useTheme();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 32);
      const sections = NAV_ITEMS.map((n) => document.getElementById(n.id));
      const idx = sections.reduce((best, el, i) => {
        if (!el) return best;
        return el.getBoundingClientRect().top <= 110 ? i : best;
      }, 0);
      setActive(NAV_ITEMS[idx]?.id ?? "hero");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className="fixed top-0 left-0 w-full z-50"
    >
      <div className="container">
        <div
          className={[
            "mx-auto mt-3 md:mt-4 flex items-center justify-between gap-3 md:gap-6",
            "px-4 md:px-5 py-3 rounded-2xl transition-all duration-300",
            scrolled
              ? "shadow-md"
              : "",
          ].join(" ")}
          style={{
            background: scrolled ? "var(--header-bg)" : "transparent",
            backdropFilter: scrolled ? "blur(20px)" : "none",
            WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
            border: scrolled ? "1px solid var(--border)" : "1px solid transparent",
          }}
        >
          <a
            href="#hero"
            aria-label="Inicio"
            className="flex items-center gap-2.5 no-underline group"
          >
            <span
              className="flex items-center justify-center w-9 h-9 rounded-xl text-white text-sm font-bold"
              style={{
                background: "linear-gradient(135deg, #f97316, #ea650a)",
                fontFamily: "var(--font-display)",
                boxShadow: "0 4px 14px rgba(249,115,22,0.35)",
              }}
            >
              WJ
            </span>
            <span
              className="hidden sm:block text-sm font-semibold transition-colors duration-200"
              style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
            >
              Walter Jirón
            </span>
          </a>
          <nav className="hidden md:flex" aria-label="Navegación principal">
            <ul className="flex gap-1 list-none">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={closeMenu}
                    className="relative block px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 no-underline"
                    style={{
                      color: active === item.id ? "#f97316" : "var(--text-secondary)",
                      background: active === item.id ? "var(--accent-glow)" : "transparent",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center gap-2">
            <button
              onClick={toggle}
              className="theme-toggle"
              aria-label={dark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
            >
              {dark
                ? <HiSun className="text-base" />
                : <HiMoon className="text-base" />}
            </button>

            <a
              href="https://github.com/WalterJiron"
              target="_blank"
              rel="noopener noreferrer"
              className="theme-toggle no-underline"
              aria-label="GitHub"
            >
              <FaGithub className="text-base" />
            </a>

            <a
              href="/Walter_Jiron_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={triggerCVDownload}
              className="flex btn-ghost py-2 px-3.5 text-sm no-underline"
              aria-label="Ver y descargar CV"
            >
              <TbFileCv className="text-base" />
              CV
            </a>
            <button
              className="md:hidden theme-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={menuOpen}
            >
              {menuOpen
                ? <FaTimes className="text-base" />
                : <FaBars className="text-base" />}
            </button>
          </div>
        </div>
      </div>
      {menuOpen && (
        <div
          className="md:hidden mt-2 mx-4 rounded-2xl overflow-hidden border"
          style={{
            background: "var(--mobile-bg)",
            borderColor: "var(--border)",
            backdropFilter: "blur(24px)",
          }}
        >
          <ul className="flex flex-col p-3 list-none gap-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={closeMenu}
                  className="block px-4 py-3 rounded-xl text-sm font-medium no-underline transition-all duration-200"
                  style={{
                    color: active === item.id ? "#f97316" : "var(--text-secondary)",
                    background: active === item.id ? "var(--accent-glow)" : "transparent",
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
