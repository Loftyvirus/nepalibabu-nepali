document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".category-toggle").forEach((button) => {
    button.addEventListener("click", () => {
      const posts = button.nextElementSibling;
      const icon = button.querySelector(".toggle-icon");

      posts.style.display = posts.style.display === "none" ? "block" : "none";
      icon.textContent = posts.style.display === "none" ? "+" : "-";
    });
  });
});
