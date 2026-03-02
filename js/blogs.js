document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("blog-grid");

  if (!container || typeof blogs === "undefined") return;

  blogs.forEach((blog) => {
    const article = document.createElement("article");
    article.className = "blog-card";

    article.innerHTML = `
      <div class="blog-image-wrapper">
        <img src="${blog.image}" alt="${blog.title}" loading="lazy" />
      </div>

      <div class="blog-content">
        <div class="blog-meta">
          <span class="blog-date">${blog.date}</span>
          <span class="blog-read-time">${blog.readTime}</span>
        </div>

        <h3 class="blog-title">${blog.title}</h3>

        <p class="blog-excerpt">${blog.excerpt}</p>

        <div class="blog-footer">
          <span class="read-more">Read Article →</span>
        </div>
      </div>
    `;

    // Redirect when clicked
    article.addEventListener("click", () => {
      window.location.href = `/blog-details.html?id=${blog.id}`;
    });

    container.appendChild(article);
  });
});
