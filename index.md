---
layout: default
title: Home
---

<div class="posts">
  <h1>All Posts</h1>
  <ul>
    {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
      <span class="post-date">{{ post.date | date: "%B %-d, %Y" }}</span>
      {% if post.image %}
      <img src="{{ post.image }}" alt="{{ post.title }}" class="post-image" />
      {% endif %}
      <p class="post-excerpt">{{ post.excerpt | strip_html }}</p>
    </li>
    {% endfor %}
  </ul>
</div>
