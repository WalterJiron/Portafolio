import React from "react";

const MATRIX_DOTS = Array.from({ length: 35 }, (_, i) => i);

const FLOATING_GLYPHS = [
  { text: "{ }", top: "18%", right: "14%" },
  { text: "</>", top: "34%", right: "28%" },
  { text: "API", top: "62%", right: "18%" },
  { text: "01",  top: "74%", right: "32%" },
  { text: "DB",  top: "24%", right: "40%" },
];

export default function HeroBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
      style={{ zIndex: 0 }}
    >
      <div
        className="hero-orb-1"
        style={{
          position: "absolute",
          top: "-6%",
          right: "-4%",
          width: "520px",
          height: "520px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(249,115,22,0.22) 0%, rgba(251,146,60,0.06) 45%, transparent 72%)",
          filter: "blur(45px)",
        }}
      />
      <div
        className="hero-orb-2"
        style={{
          position: "absolute",
          bottom: "8%",
          left: "-10%",
          width: "420px",
          height: "420px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(20,184,166,0.16) 0%, transparent 70%)",
          filter: "blur(55px)",
        }}
      />
      <div
        className="hero-orb-3"
        style={{
          position: "absolute",
          top: "38%",
          right: "22%",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(245,158,11,0.14) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />

      <div
        className="hidden lg:flex items-center justify-center absolute right-[6%] top-1/2 -translate-y-1/2 w-[420px] h-[420px]"
        style={{ opacity: 0.75 }}
      >
        <div
          className="hero-orbit-outer absolute inset-0 rounded-full"
          style={{ border: "1px dashed var(--accent-line)" }}
        >
          <span
            className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full"
            style={{
              background: "#f97316",
              boxShadow: "0 0 18px rgba(249,115,22,0.7)",
            }}
          />
          <span
            className="absolute bottom-6 left-10 w-2.5 h-2.5 rounded-full"
            style={{
              background: "#14b8a6",
              boxShadow: "0 0 14px rgba(20,184,166,0.65)",
            }}
          />
        </div>

        <div
          className="hero-orbit-inner absolute inset-14 rounded-full"
          style={{ border: "1px solid var(--border-alt)" }}
        >
          <span
            className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-3 h-3 rounded-full"
            style={{
              background: "#fb923c",
              boxShadow: "0 0 14px rgba(251,146,60,0.65)",
            }}
          />
        </div>

        <div className="grid grid-cols-7 gap-4 p-6">
          {MATRIX_DOTS.map((dot) => (
            <span
              key={dot}
              className="hero-matrix-dot w-2 h-2 rounded-full"
              style={{
                background: dot % 3 === 0 ? "#f97316" : dot % 2 === 0 ? "#14b8a6" : "var(--text-muted)",
                opacity: 0.2,
              }}
            />
          ))}
        </div>
      </div>

      <div className="hidden md:block">
        {FLOATING_GLYPHS.map((g) => (
          <span
            key={g.text}
            className="hero-glyph absolute text-xs font-bold select-none px-2.5 py-1 rounded-lg"
            style={{
              top: g.top,
              right: g.right,
              fontFamily: "var(--font-accent)",
              color: "var(--brand-text)",
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              boxShadow: "var(--shadow-sm)",
              opacity: 0.35,
            }}
          >
            {g.text}
          </span>
        ))}
      </div>
    </div>
  );
}
