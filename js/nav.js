document.addEventListener("DOMContentLoaded", () => {
  const mobileBreakpoint = 1100;

  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");
  const dropdowns = document.querySelectorAll(".dropdown > a");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show-menu");
    menuToggle.classList.toggle("active");
  });

  dropdowns.forEach((drop) => {
    drop.addEventListener("click", (e) => {
      if (window.innerWidth <= mobileBreakpoint) {
        e.preventDefault();
        drop.parentElement.classList.toggle("active");
      }
    });
  });
});
