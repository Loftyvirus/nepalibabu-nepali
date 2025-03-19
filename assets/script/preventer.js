document.addEventListener("DOMContentLoaded", function () {
  // Intercept all link clicks
  document.body.addEventListener("click", function (e) {
    const link = e.target.closest("a");
    if (
      link &&
      link.href &&
      !link.target &&
      link.href.startsWith(window.location.origin)
    ) {
      e.preventDefault();
      loadPage(link.href);
      history.pushState(null, null, link.href);
    }
  });

  window.addEventListener("popstate", function () {
    loadPage(window.location.href);
  });

  // Function to load the page content
  async function loadPage(url) {
    try {
      const response = await fetch(url);
      const text = await response.text();
      const parser = new DOMParser();
      const doc = parser.parseFromString(text, "text/html");

      document.querySelector(".main-content").innerHTML =
        doc.querySelector(".main-content").innerHTML;

      document.title = doc.title;

      if (window.initializeScripts) {
        window.initializeScripts();
      }

      updateActiveLink(url);
    } catch (error) {
      console.error("Failed to load page:", error);
    }
  }

  // Function to update the active state of the navigation links
  function updateActiveLink(url) {
    const navLinks = document.querySelectorAll(".nav-links a");
    navLinks.forEach((link) => {
      const linkUrl = new URL(link.href).pathname;
      const currentUrl = new URL(url).pathname;

      if (linkUrl === currentUrl) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }
});
