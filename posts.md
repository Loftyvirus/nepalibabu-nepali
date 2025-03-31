---
layout: default
title: Posts
permalink: /posts/
---

<header class="page-header">
  <h1 class="page-title">{{ page.title }}</h1>
  <!-- <p class="page-description">Latest articles and insights from our blog</p> -->
</header>

<div class="posts-list">
  {% for post in site.posts %}
    <article class="post">
      <i class="ph ph-dots-six-vertical post-menu" aria-hidden="true"></i>
      <a href="{{ post.url | relative_url }}" class="post-link" aria-label="Read more about {{ post.title }}"></a>
      
      <h3 class="post-title">{{ post.title }}</h3>
      <footer class="post-footer">
        <div class="meta-bottom">
          <span class="post-date">{{ post.date | date: "%b %-d, %Y" }}</span>
          {% if post.author %}
          <span class="post-author">{{ post.author }}</span>
          {% endif %}
          {% if post.categories.size > 0 %}
          <span class="post-categories">
            {% for category in post.categories %}
            <span>{{ category }}</span>{% unless forloop.last %}, {% endunless %}
            {% endfor %}
          </span>
          {% endif %}
        </div>
      </footer>
    </article>
  {% endfor %}
</div>

{% if site.posts.size > 10 %}

<div class="pagination">
  {% if paginator.previous_page %}
    <a href="{{ paginator.previous_page_path | relative_url }}" class="pagination-prev">&larr; Newer Posts</a>
  {% endif %}
  
  {% if paginator.next_page %}
    <a href="{{ paginator.next_page_path | relative_url }}" class="pagination-next">Older Posts &rarr;</a>
  {% endif %}
</div>
{% endif %}
