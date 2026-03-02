window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  if (!preloader) return;

  const minDisplayTime = 200;
  const startTime = performance.now();

  const elapsed = performance.now() - startTime;
  const remaining = Math.max(0, minDisplayTime - elapsed);

  setTimeout(() => {
    preloader.classList.add("hidden");
  }, remaining);
});
