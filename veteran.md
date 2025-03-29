---
layout: single
title: Veteran-Owned
permalink: /veteran/
---

<ul>
  {% for biz in site.vetowned %}
    <li><a href="{{ biz.url | relative_url }}">{{ biz.title }}</a></li>
  {% endfor %}
</ul>
