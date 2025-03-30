---
layout: default
title: Organ Mountain Digital
permalink: /
---

<section>
  <h1>Welcome to Organ Mountain Digital</h1>
  <p style="font-size: 1.2rem;">Las Cruces events, small business highlights, and community-powered stories — not corporate noise.</p>
</section>

<section>
  <h2>🎉 Featured Events</h2>
  <div class="card-grid">
    {% for event in site.events limit:5 %}
    <div class="card">
      <h3><a href="{{ event.url | relative_url }}">{{ event.title }}</a></h3>
      <p><strong>Date:</strong> {{ event.date | date: "%B %d, %Y" }}</p>
      <p>{{ event.excerpt | strip_html | truncate: 100 }}</p>
    </div>
    {% endfor %}
  </div>
</section>

<section>
  <h2>🪖 Veteran-Owned Businesses</h2>
  <div class="card-grid">
    {% for biz in site.vetowned limit:6 %}
    <div class="card">
      <h3><a href="{{ biz.url | relative_url }}">{{ biz.title }}</a></h3>
      <p>{{ biz.location }}</p>
    </div>
    {% endfor %}
  </div>
</section>

<section>
  <h2>📣 Get Involved</h2>
  <div class="notice--primary">
    <p><strong>Want to submit an event, list your business, or sponsor a post?</strong><br>
    📬 <a href="mailto:contact@organmountaindigital.com">Email us here</a></p>
  </div>

  <div style="text-align: center; margin: 2rem 0;">
    <a href="mailto:contact@organmountaindigital.com?subject=Submit%20a%20Post" class="donation-button">
      📬 Submit an Event or Business
    </a>
    <p style="font-size: 0.9rem; margin-top: 0.5rem;">Until our form is ready, just email us your info!</p>
  </div>
</section>
