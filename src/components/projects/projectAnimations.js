import { animate, stagger } from "animejs";

export function initProjectAnimations() {
  animate(".projects-heading", {
    translateY: [-24, 0],
    opacity: [0, 1],
    duration: 650,
    easing: "easeOutExpo",
  });

  animate(".project-card", {
    translateY: [40, 0],
    opacity: [0, 1],
    duration: 650,
    delay: stagger(100),
    easing: "easeOutExpo",
  });
}
