// include.js — handles dynamic header/footer import + navbar initialization

document.addEventListener("DOMContentLoaded", () => {
  // ===== Load HEADER =====
  const header = document.getElementById("header");
  if (header) {
    fetch("/header.html")
      .then((res) => res.text())
      .then((data) => {
        header.innerHTML = data;
        initNavbar(); // ✅ Initialize navbar after header is added
      })
      .catch((err) => console.error("Error loading header:", err));
  }

  // ===== Load FOOTER =====
  const footer = document.getElementById("footer");
  if (footer) {
    fetch("/footer.html")
      .then((res) => res.text())
      .then((data) => {
        footer.innerHTML = data;
      })
      .catch((err) => console.error("Error loading footer:", err));
  }

  const track = document.getElementById("track");

  track.innerHTML += track.innerHTML;

  let position = 0;
  let speed = 1;

  function animate() {
    position -= speed;

    if (position <= -track.scrollWidth / 2) {
      position = 0;
    }

    track.style.transform = `translateX(${position}px)`;
    requestAnimationFrame(animate);
  }

  animate();
});

// ===== Initialize Navbar Logic =====
function initNavbar() {
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
}
