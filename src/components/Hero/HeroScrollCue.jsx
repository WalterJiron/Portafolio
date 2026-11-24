import React from "react";
import { FaArrowDown } from "react-icons/fa";

export default function HeroScrollCue() {
  const handleScroll = () => {
    document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button
      className="hero-scroll hidden md:flex flex-col items-center gap-1.5 absolute bottom-10 left-1/2 -translate-x-1/2 border-none bg-transparent cursor-pointer"
      onClick={handleScroll}
      aria-label="Ir a habilidades"
      style={{ color: "var(--text-muted)" }}
    >
      <span
        className="text-[10px] tracking-[0.14em] uppercase"
        style={{ fontFamily: "var(--font-body)" }}
      >
        scroll
      </span>
      <FaArrowDown className="text-sm" />
    </button>
  );
}
