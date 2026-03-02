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
    

        <h3 class="blog-title">${blog.title}</h3>


        <div class="blog-footer">
          <span class="read-more">Read Article →</span>
        </div>
      </div>
    `;

    // Redirect when clicked
    article.addEventListener("click", () => {
      window.location.href = `/blogs/blogDetails.html?id=${blog.id}`;
    });

    container.appendChild(article);
  });
});
