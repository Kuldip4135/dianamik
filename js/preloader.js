// ======== Preloader with 3-Second Delay ========
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");

  setTimeout(() => {
    preloader.classList.add("hidden");
  }, 100);
});
