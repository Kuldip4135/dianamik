document.addEventListener("DOMContentLoaded", () => {
  // 1️⃣ Get ID from URL
  const params = new URLSearchParams(window.location.search);
  const blogId = params.get("id");

  if (!blogId) {
    document.body.innerHTML = "<h2>Invalid blog request.</h2>";
    return;
  }

  // 2️⃣ Find matching blog
  const blog = blogs.find((b) => b.id === blogId);

  console.log("Blog data loaded:", blog.content);

  if (!blog) {
    document.body.innerHTML = "<h2>Blog not found.</h2>";
    return;
  }

  // 3️⃣ Inject Data
  document.getElementById("blog-title").textContent = blog.title;
  // document.getElementById("blog-date").textContent = blog.date;
  // document.getElementById("blog-readtime").textContent = blog.readTime;

  const image = document.getElementById("blog-image");
  image.src = blog.image;
  image.alt = blog.title;

  document.getElementById("blog-content").innerHTML = blog.content;
});
