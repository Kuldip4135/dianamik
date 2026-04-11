document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".reviews__grid");

  if (!container || typeof reviewsData === "undefined") return;

  container.innerHTML = "";

  reviewsData.forEach((review) => {
    const card = document.createElement("div");
    card.className = "review-card";

    let starsHtml = "";
    for (let i = 0; i < review.rating; i++) {
      starsHtml += '<i class="fas fa-star"></i>';
    }

    card.innerHTML = `
      <div class="review-header">
        <div class="review-rating">
          ${starsHtml}
        </div>
      </div>
      <p class="review-text">
        "${review.text}"
      </p>
      <div class="review-author">
        <div class="author-avatar">${review.avatarInitials}</div>
        <div class="author-details">
          <h4>${review.authorName}</h4>
        </div>
      </div>
    `;

    container.appendChild(card);
  });
});
