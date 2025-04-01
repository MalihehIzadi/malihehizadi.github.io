<h1>Publications with John Doe</h1>

{% assign coauthor_id = "rkoohestani" %}

<ul>
{% for pub in site.scholar.publications %}
  {% if pub.author contains coauthor_id %}
    <li>{% include scholar/publication.html entry=pub %}</li>
  {% endif %}
{% endfor %}
</ul>

