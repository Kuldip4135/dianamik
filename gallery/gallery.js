document.addEventListener("DOMContentLoaded", () => {
  const galleryGrid = document.getElementById("gallery-grid");
  const certificatesGrid = document.getElementById("certificates-grid");

  const prefix = "/gallery/images/";

  // Generate Certificates
  const certificateCount = 3;
  for (let i = 1; i <= certificateCount; i++) {
    const item = document.createElement("div");
    item.classList.add("certificate-card");
    item.innerHTML = `
      <img src="${prefix}certificate${i}.jpg" alt="Certificate ${i}" loading="lazy">
    `;
    if (certificatesGrid) certificatesGrid.appendChild(item);
  }

  // Generate Gallery Images using a loop
  for (let i = 1; i <= 44; i++) {
    let ext = ".jpg";
    const src = prefix + "image" + i + ext;
    const item = document.createElement("div");
    item.classList.add("masonry-item");
    item.innerHTML = `
      <img src="${src}" alt="Gallery Image ${i}" loading="lazy">
    `;
    if (galleryGrid) galleryGrid.appendChild(item);
  }

  // Lightbox
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.querySelector(".close");

  const openLightbox = (e) => {
    if (e.target.tagName === "IMG") {
      lightbox.style.display = "flex";
      lightboxImg.src = e.target.src;
    }
  };

  if (galleryGrid) galleryGrid.addEventListener("click", openLightbox);
  if (certificatesGrid)
    certificatesGrid.addEventListener("click", openLightbox);

  closeBtn.addEventListener("click", () => (lightbox.style.display = "none"));
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) lightbox.style.display = "none";
  });
});
