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
