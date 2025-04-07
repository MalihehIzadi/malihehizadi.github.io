---
layout: profiles
permalink: /people/
title: AISE Team
description: Current list of our members at AISE (Sorted based on role and in reverse chronological order)
nav: true
nav_order: 4

profiles:
  # if you want to include more than one profile, just replicate the following block
  # and create one content file for each profile inside _pages/
  - align: right
    image: prof_pic.jpg
    content: people/mizadi.md
    image_circular: false # crops the image to make it circular
    more_info: >
      <p>Dr. Maliheh Izadi</p>
      <p>Lab director</p>
  - align: right
    image: profile_male.jpg
    content: {% bibliography --group_by none --query @*[keywords~=aalkaswan]* --template author_publication %}
    image_circular: false # crops the image to make it circular
    more_info: >
      <p>Ali Al-kaswan</p>
      <p>PhD candidate (2022)</p>
      <p>Privacy/Security in LLMs</p>
  - align: right
    image: profile_male.jpg
    content: people/jkatzy.md
    image_circular: false # crops the image to make it circular
    more_info: >
      <p>Jonathan Katzy</p>
      <p>PhD candidate (2023)</p>
      <p>Multilinguality in LLMs</p>
  - align: right
    image: profile_male.jpg
    content: people/ebogomolov.md
    image_circular: false # crops the image to make it circular
    more_info: >
      <p>Egor Bogomolov</p>
      <p>PhD candidate</p>
      <p>Evaluation in LLMs</p>
  - align: right
    image: profile_female.jpg
    content: people/asergeyuk.md
    image_circular: false # crops the image to make it circular
    more_info: >
      <p>Egor Bogomolov</p>
      <p>PhD candidate (2024)</p>
      <p>Human/AI in IDE</p>
  - align: right
    image: profile_female.jpg
    content: people/dcipollone.md
    image_circular: false # crops the image to make it circular
    more_info: >
      <p>Daniele Cipollone</p>
      <p>PhD candidate (2024)</p>
      <p>LLM Integration in IDE</p>
  - align: right
    image: profile_male.jpg
    content: people/zli.md
    image_circular: false # crops the image to make it circular
    more_info: >
      <p>Ziyou Li</p>
      <p>PhD candidate (2024)</p>
      <p>AI/AI Interaction in IDE</p>
  - align: right
    image: profile_male.jpg
    content: people/rpopescu.md
    image_circular: false # crops the image to make it circular
    more_info: >
      <p>Razvan Popescu</p>
      <p>PhD candidate (2025)</p>
      <p>Robust Datasets for LLM4Code</p>
  - align: right
    image: rkoohestani.jpeg
    content: people/rkoohestani.md
    image_circular: false # crops the image to make it circular
    more_info: >
      <p>Roham Koohestani (2024)</p>
      <p>Scientific Developer and RA</p>
      <p>Guaranties in GenAI</p>
---
