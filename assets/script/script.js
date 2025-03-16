const contributorsList = document.getElementById("contributors-list");

fetch("https://api.github.com/repos/Loftyvirus/nepalibabu-nepali/contributors")
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

$(document).ready(function () {
  $('[data-fancybox="gallery"]').fancybox({
    // Custom options here
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
});

const animatedPath = document.querySelector("#animated-path");
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
