"use strict";

document.documentElement.classList.add("js");

document.addEventListener("DOMContentLoaded", () => {
  const year = document.querySelector("[data-year]");

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  const links = document.querySelectorAll('.nav-link[href^="#"]');

  links.forEach((link) => {
    link.addEventListener("click", () => {
      links.forEach((item) => item.removeAttribute("aria-current"));
      link.setAttribute("aria-current", "page");
    });
  });

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!reducedMotion) {
    const items = document.querySelectorAll(".reveal");
    const root = document.documentElement;

    const updateParallax = () => {
      const scrollY = Math.min(window.scrollY, 240);
      root.style.setProperty("--parallax-shift", `${scrollY * 0.08}px`);
    };

    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("is-visible");
          currentObserver.unobserve(entry.target);
        });
      },
      {
        threshold: 0.14,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    items.forEach((item) => observer.observe(item));
    updateParallax();
    window.addEventListener("scroll", updateParallax, { passive: true });
  } else {
    document
      .querySelectorAll(".reveal")
      .forEach((item) => item.classList.add("is-visible"));
  }
});
