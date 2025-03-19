// Function to fetch and display contributors
function fetchContributors() {
  const contributorsList = document.getElementById("contributors-list");

  if (!contributorsList) return; // Exit if the contributors list element doesn't exist

  fetch(
    "https://api.github.com/repos/Loftyvirus/nepalibabu-nepali/contributors"
  )
    .then((response) => response.json())
    .then((data) => {
      if (data.length > 0) {
        let contributorsHTML = '<div class="contributors-grid">';
        data.forEach((contributor) => {
          contributorsHTML += `
            <div class="contributor">
              <a href="${contributor.html_url}" target="_blank" rel="noopener noreferrer">
                <img src="${contributor.avatar_url}" alt="${contributor.login}" class="contributor-avatar" />
                <p class="contributor-username">${contributor.login}</p>
              </a>
            </div>
          `;
        });
        contributorsHTML += "</div>";
        contributorsList.innerHTML = `<h2>Our Awesome Contributors</h2>${contributorsHTML}`;
      } else {
        contributorsList.innerHTML = "<p>No contributors found.</p>";
      }
    })
    .catch((error) => {
      contributorsList.innerHTML =
        "<p>Failed to load contributors. Please try again later.</p>";
      console.error("Error fetching contributors:", error);
    });
}

// Function to initialize Fancybox
function initializeFancybox() {
  $('[data-fancybox="gallery"]').fancybox({
    loop: true,
    buttons: [
      "zoom",
      "share",
      "slideShow",
      "fullScreen",
      "download",
      "thumbs",
      "close",
    ],
  });
}

// Function to initialize scroll animation
function initializeScrollAnimation() {
  const animatedPath = document.querySelector("#animated-path");
  if (!animatedPath) return; // Exit if the animated path element doesn't exist

  const updateAnimation = () => {
    const scrollableHeight = document.body.scrollHeight - window.innerHeight;
    const scrollProgress = window.scrollY / scrollableHeight;
    const pathLength = 2027;
    const newOffset = pathLength - scrollProgress * pathLength;
    animatedPath.style.strokeDashoffset = Math.max(newOffset, 0);
  };

  window.addEventListener("scroll", updateAnimation);
  window.addEventListener("resize", updateAnimation);
  updateAnimation();
}

// Initial setup
document.addEventListener("DOMContentLoaded", function () {
  fetchContributors();
  initializeFancybox();
  initializeScrollAnimation();
});

// Reinitialize scripts after dynamic content load
window.initializeScripts = function () {
  fetchContributors();
  initializeFancybox();
  initializeScrollAnimation();
};
