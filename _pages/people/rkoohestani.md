<h2>Roham Koohestani</h2>
Scientific Developer and Research Assistant

<!--
{% assign coauthor_id = "rkoohestani" %}
{% assign selected_pubs = site.bibliography | where_exp: "pub", "pub.author_id contains coauthor_id" %}
<div class="publications">
  {% for pub in selected_pubs %}
    {% include bib.html entry=pub %}
  {% endfor %}
</div>
<div class="publications">
  {% bibliography --group_by none --query @*[author_id=rkoohestani]* %}
</div>
<div class="publications">
  {% bibliography --group_by none --query @*[author_id contains rkoohestani]* %}
</div>
% bibliography --group_by none --query @*[keywords~=rkoohestani]* %}-->

{% bibliography --template bib_custom_entry_people.html --group_by none --query @*[keywords~=rkoohestani]* %}
