"use strict";

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
});
