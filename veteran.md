---
layout: default
title: Veteran-Owned
permalink: /veteran/
---

<section>
  <h2>🪖 Veteran-Owned Businesses</h2>
  <p>Support our local heroes by shopping and sharing businesses owned by U.S. veterans across southern New Mexico.</p>

  <div class="card-grid">
    {% for biz in site.vetowned %}
      <div class="card">
        <h3><a href="{{ biz.url | relative_url }}">{{ biz.title }}</a></h3>
        <p><strong>Location:</strong> {{ biz.location }}</p>
        <p><strong>Veteran Status:</strong> {{ biz.veteran }}</p>
      </div>
    {% endfor %}
  </div>
</section>
