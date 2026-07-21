---
layout: page
title: Gallery
permalink: /gallery/
description: Moments from the Donghyun Lee AI Group — conferences, seminars, awards, and lab life.
nav: true
nav_order: 7
---

<div class="container mt-3">

{% comment %} 1) Standalone photos listed in \_data/gallery.yml (not tied to a news post) {% endcomment %}
{% assign extra_count = 0 %}
{% if site.data.gallery %}
{% assign extra_photos = site.data.gallery | where_exp: "item", "item.image" | sort: "date" | reverse %}
{% assign extra_count = extra_photos | size %}
{% endif %}
{% if extra_count > 0 %}

<div class="row">
{% for item in extra_photos %}
<div class="col-sm-6 col-lg-4 mb-4">
{% if item.url %}<a href="{{ item.url }}" class="text-decoration-none">{% endif %}
<div class="card h-100 z-depth-1 gallery-card">
{% include figure.liquid loading="lazy" path=item.image class="card-img-top gallery-img" %}
{% if item.caption or item.date %}
<div class="card-body p-3">
{% if item.caption %}<h6 class="card-title mb-1">{{ item.caption | emojify }}</h6>{% endif %}
{% if item.date %}<p class="card-text text-muted small mb-0">{{ item.date | date: '%b %d, %Y' }}</p>{% endif %}
</div>
{% endif %}
</div>
{% if item.url %}</a>{% endif %}
</div>
{% endfor %}
</div>
{% endif %}

{% comment %} 2) Photos pulled automatically from news posts that have an `img:` field {% endcomment %}
{% assign news_photos = site.news | where_exp: "item", "item.img" | sort: "date" | reverse %}
{% assign news_count = news_photos | size %}
{% if extra_count > 0 and news_count > 0 %}

<hr class="my-4">
<h5 class="text-muted mb-4">From the News</h5>
{% endif %}

  <div class="row">
    {% for item in news_photos %}
      <div class="col-sm-6 col-lg-4 mb-4">
        <a href="{{ item.url | relative_url }}" class="text-decoration-none">
          <div class="card h-100 z-depth-1 gallery-card">
            {% include figure.liquid loading="lazy" path=item.img class="card-img-top gallery-img" %}
            <div class="card-body p-3">
              <h6 class="card-title mb-1">{{ item.title | emojify }}</h6>
              <p class="card-text text-muted small mb-0">{{ item.date | date: '%b %d, %Y' }}</p>
            </div>
          </div>
        </a>
      </div>
    {% endfor %}
  </div>

</div>

<style>
  .gallery-card {
    overflow: hidden;
    transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  }
  .gallery-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  }
  .gallery-img {
    aspect-ratio: 4 / 3;
    object-fit: cover;
    width: 100%;
  }
  .gallery-card .card-title {
    color: var(--global-text-color);
    font-size: 0.95rem;
    line-height: 1.35;
  }
</style>
