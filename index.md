---
layout: default
title: Home
---

<div class="posts">
  <h1 class="posts-heading">All Posts</h1>
  <ul class="post-list">
    {% for post in site.posts %}
    <li class="post-item">
      <a href="{{ site.baseurl }}{{ post.url }}" class="post-link">
        <div class="post-content">
          <h2 class="post-title">{{ post.title }}</h2>
          <span class="post-date">{{ post.date | date: "%B %-d, %Y" }}</span>
          <p class="post-excerpt">{{ post.excerpt | strip_html }}</p>
        </div>
        {% if post.image %}
        <div class="post-image-container">
          <img src="{{ site.baseurl }}{{ post.image }}" alt="{{ post.title }}" class="post-image" />
        </div>
        {% endif %}
      </a>
    </li>
    {% endfor %}
  </ul>
</div>
