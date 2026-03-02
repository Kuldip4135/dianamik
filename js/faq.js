document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("faq-container");
  if (!container || typeof faqs === "undefined") return;

  faqs.forEach((faq, index) => {
    const item = document.createElement("div");
    item.className = "faq__item";

    item.innerHTML = `
      <button class="faq__question">
        <span>${faq.question}</span>
        <span class="faq__icon">+</span>
      </button>
      <div class="faq__answer">
        <p>${faq.answer}</p>
      </div>
    `;

    container.appendChild(item);
  });

  // Accordion behavior
  document.querySelectorAll(".faq__question").forEach((btn) => {
    btn.addEventListener("click", () => {
      const item = btn.parentElement;
      const openItem = document.querySelector(".faq__item.active");

      if (openItem && openItem !== item) {
        openItem.classList.remove("active");
      }

      item.classList.toggle("active");
    });
  });
});
