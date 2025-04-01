<h2>Roham Koohestani</h2>
Scientific Developer and Research Assistant

{% assign coauthor_id = "rkoohestani" %}

<ul>
{% for pub in site.scholar.publications %}
  {% if pub.author_id contains coauthor_id %}
    <li>{% include scholar/publication.html entry=pub %}</li>
  {% endif %}
{% endfor %}
</ul>

