---
layout: page
title: Organ Mountain Digital
subtitle: Community-powered media for Las Cruces
---

<div style="background: #f5f5f5; padding: 3rem 1rem; text-align: center;">
  <h1 style="margin-bottom: 0.5rem;">Welcome to Organ Mountain Digital</h1>
  <p style="font-size: 1.2rem;">Las Cruces events, small business highlights, and community-powered stories — not corporate noise.</p>
</div>

---

## 🎉 Featured Events

<div style="display: flex; overflow-x: auto; gap: 1rem; padding-bottom: 1rem;">

  {% for event in site.events limit:5 %}
  <div style="min-width: 280px; flex: 0 0 auto; border: 1px solid #ccc; border-radius: 8px; padding: 1rem; background: #fff; box-shadow: 0 2px 6px rgba(0,0,0,0.05);">
    <h3><a href="{{ event.url | relative_url }}">{{ event.title }}</a></h3>
    <p style="font-size: 0.9rem;"><strong>Date:</strong> {{ event.date | date: "%B %d, %Y" }}</p>
    <p style="font-size: 0.9rem;">{{ event.excerpt | strip_html | truncate: 100 }}</p>
  </div>
  {% endfor %}

</div>

---

## 🪖 Veteran-Owned Businesses

<div class="grid__wrapper">

  {% for biz in site.vetowned limit:6 %}
  <div class="archive__item">
    <h3 class="archive__item-title"><a href="{{ biz.url | relative_url }}">{{ biz.title }}</a></h3>
    <p class="archive__item-excerpt">{{ biz.location }}</p>
  </div>
  {% endfor %}

</div>

---

## 📣 Get Involved

> Want to submit an event, list your business, or sponsor a post?  
> [📬 Email us here](mailto:contact@organmountaindigital.com)
{: .notice--primary }

<div style="text-align: center; margin: 3rem 0;">
  <a href="mailto:contact@organmountaindigital.com?subject=Submit%20a%20Post" class="donation-button">
    📬 Submit an Event or Business
  </a>
  <p style="font-size: 0.9rem; margin-top: 0.5rem;">Until our form is ready, just email us your info!</p>
</div>
