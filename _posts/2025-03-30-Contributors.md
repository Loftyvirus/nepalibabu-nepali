---
layout: post
title: "Our Amazing Contributors"
date: 2025-01-14 16:45:00 +0530
author: "Safal Lama"
categories: contributors
---

## Current Contributors

<div id="contributors-list">

  <p>Loading contributors...</p>
</div>

<script>
// JavaScript to fetch contributors from GitHub API
fetch('https://api.github.com/repos/Loftyvirus/nepalibabu-nepali/contributors')
  .then(response => response.json())
  .then(data => {
    const contributorsDiv = document.getElementById('contributors-list');
    let html = '<div class="contributors-grid">';
    
    data.forEach(contributor => {
      html += `
        <div class="contributor-card">
          <img src="${contributor.avatar_url}" alt="${contributor.login}" width="80">
          <h3><a href="${contributor.html_url}" target="_blank">${contributor.login}</a></h3>
          <p>Contributions: ${contributor.contributions}</p>
        </div>
      `;
    });
    
    html += '</div>';
    contributorsDiv.innerHTML = html;
  })
  .catch(error => {
    console.error('Error fetching contributors:', error);
    document.getElementById('contributors-list').innerHTML = 
      '<p>Could not load contributors at this time. Please visit our <a href="https://github.com/Loftyvirus/nepalibabu-nepali/graphs/contributors" target="_blank">GitHub page</a> to see all contributors.</p>';
  });
</script>

<style>
.contributors-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.contributor-card {
  text-align: center;
  padding: 15px;
  border-radius: 8px;
  background: #f5f5f5;
  transition: transform 0.3s;
}

.contributor-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.contributor-card img {
  border-radius: 50%;
  margin-bottom: 10px;
}
</style>
