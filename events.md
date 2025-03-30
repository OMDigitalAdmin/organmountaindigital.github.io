---
layout: default
title: Events
permalink: /events/
---

<section>
  <h2>🗓️ Community Events</h2>
  <p>Find upcoming events happening around Las Cruces. Want to add yours? Reach out via email or our submission form.</p>

  <div class="card-grid">
    {% for event in site.events %}
      <div class="card">
        <h3><a href="{{ event.url | relative_url }}">{{ event.title }}</a></h3>
        <p><strong>Date:</strong> {{ event.date | date: "%B %d, %Y" }}</p>
        <p>{{ event.excerpt | strip_html | truncate: 100 }}</p>
      </div>
    {% endfor %}
  </div>
</section>
