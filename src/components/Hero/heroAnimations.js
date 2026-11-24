import { animate, createTimeline, stagger } from "animejs";

export function initHeroAnimations() {
  const tl = createTimeline({ ease: "outExpo" });

  tl.add(".hero-name", { translateY: [16, 0], duration: 600 })
    .add(".hero-roles", { translateY: [12, 0], duration: 450 }, "-=400")
    .add(".hero-cta", {
      translateY: [12, 0],
      duration: 400,
      delay: stagger(80),
    }, "-=300");

  animate(".hero-scroll", {
    translateY: [0, -8, 0],
    duration: 2200,
    loop: true,
    ease: "inOutSine",
    delay: 1200,
  });

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  animate(".hero-orb-1", {
    translateX: [0, 45, -25, 0],
    translateY: [0, -35, 25, 0],
    scale: [1, 1.15, 0.95, 1],
    duration: 12000,
    loop: true,
    ease: "inOutSine",
  });

  animate(".hero-orb-2", {
    translateX: [0, -40, 30, 0],
    translateY: [0, 35, -30, 0],
    scale: [1, 0.9, 1.12, 1],
    duration: 14000,
    loop: true,
    ease: "inOutSine",
  });

  animate(".hero-orb-3", {
    translateX: [0, 30, -30, 0],
    translateY: [0, 25, -25, 0],
    scale: [0.95, 1.15, 1, 0.95],
    duration: 10000,
    loop: true,
    ease: "inOutSine",
  });

  animate(".hero-orbit-outer", {
    rotate: [0, 360],
    duration: 28000,
    loop: true,
    ease: "linear",
  });

  animate(".hero-orbit-inner", {
    rotate: [360, 0],
    duration: 18000,
    loop: true,
    ease: "linear",
  });

  animate(".hero-matrix-dot", {
    scale: [0.6, 1.5, 0.6],
    opacity: [0.15, 0.75, 0.15],
    duration: 2600,
    delay: stagger(110, { grid: [7, 5], from: "center" }),
    loop: true,
    ease: "inOutQuad",
  });

  animate(".hero-glyph", {
    translateY: [-10, 10, -10],
    rotate: [-4, 4, -4],
    opacity: [0.22, 0.55, 0.22],
    duration: 5000,
    delay: stagger(350),
    loop: true,
    ease: "inOutSine",
  });
}
