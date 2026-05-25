---
layout: page
permalink: /album/
title: Album
description:
nav: true
nav_order: 5
---

<!-- Inline styles: responsive picture album -->
<style>
  /* Album container */
  .album {
    max-width: 1100px;    /* tweak if you want it wider/narrower */
    margin: 0 auto;
    padding: 0 1rem;
  }

  /* Responsive grid: shows a few images per row depending on viewport */
  .album-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 1rem;
  }

  /* Individual image card */
  .album-card {
    position: relative;
  }

  /* Make included images cover the card neatly */
  .album-card img {
    width: 100%;
    height: 240px;       /* fixed card height for a clean album look */
    object-fit: cover;   /* crops gently to fill without distortion */
    display: block;
    transition: transform .25s ease;
    border-radius: .5rem;     /* matches al-folio rounded vibe */
  }

  /* Hover lift */
  .album-card:hover img {
    transform: scale(1.02);
  }

  /* Caption under each image */
  .album-caption {
    text-align: center;
    font-size: 0.9rem;
    color: var(--bs-secondary-color, #6c757d);
    margin-top: .35rem;
  }

  /* Optional: make some tiles span two columns on wider screens */
  @media (min-width: 992px) {
    .album-card.span-2 {
      grid-column: span 2;
    }
    .album-card.span-2 img {
      height: 360px;
    }
  }
</style>

<div class="album">
  <div class="album-grid">
    <!-- Card  -->
    <div class="album-card">
      {% include figure.liquid loading="eager" path="assets/img/events/dagstuhl2026_evals.jpeg" class="img-fluid rounded z-depth-1" %}
      <div class="album-caption">Organizing AI4SE Evals Dagstuhl 2026</div>
    </div>
    <!-- Card  -->
    <div class="album-card">
      {% include figure.liquid loading="eager" path="assets/img/events/google.jpeg" class="img-fluid rounded z-depth-1" %}
      <div class="album-caption">Joining Google as a Research Scientist</div>
    </div>
    <!-- Card  -->
    <div class="album-card">
      {% include figure.liquid loading="eager" path="assets/img/events/forgeKeynote.jpeg" class="img-fluid rounded z-depth-1" %}
      <div class="album-caption">Keynote at FORGE 2026</div>
    </div>
    <!-- Card  -->
    <div class="album-card">
      {% include figure.liquid loading="eager" path="assets/img/aise/icse2026.jpeg" class="img-fluid rounded z-depth-1" %}
      <div class="album-caption">Attending ICSE 2026</div>
    </div>
    <!-- Card  -->
    <div class="album-card">
      {% include figure.liquid loading="eager" path="assets/img/aise/retreat2026.jpeg" class="img-fluid rounded z-depth-1" %}
      <div class="album-caption">Team Activity (Karting)</div>
    </div>
    <!-- Card  -->
    <div class="album-card">
      {% include figure.liquid loading="eager" path="assets/img/events/visitING2025.jpg" class="img-fluid rounded z-depth-1" %}
      <div class="album-caption">Visiting Amsterdam Office of ING (2025)</div>
    </div>
    <!-- Card  -->
    <div class="album-card">
      {% include figure.liquid loading="eager" path="assets/img/aise/agenticse2025.jpg" class="img-fluid rounded z-depth-1" %}
      <div class="album-caption">Organized AgenticSE'25 (Seoul)</div>
    </div>
    <!-- Card  -->
    <div class="album-card">
      {% include figure.liquid loading="eager" path="assets/img/aise/ase2025.jpg" class="img-fluid rounded z-depth-1" %}
      <div class="album-caption">Attending ASE'25 (Seoul)</div>
    </div>
    <!-- Card  -->
    <div class="album-card">
      {% include figure.liquid loading="eager" path="assets/img/events/dagstuhl2025_creativity.jpg" class="img-fluid rounded z-depth-1" %}
      <div class="album-caption">Dagstuhl on Creativity/GenAI (Germany)</div>
    </div>
    <!-- Card  -->
    <div class="album-card">
      {% include figure.liquid loading="eager" path="assets/img/aise/visitMeta2025.jpg" class="img-fluid rounded z-depth-1" %}
      <div class="album-caption">Visiting Amsterdam Office of Meta (2025)</div>
    </div>
    <!-- Card  -->
    <div class="album-card">
      {% include figure.liquid loading="eager" path="assets/img/aise/fse2025.jpg" class="img-fluid rounded z-depth-1" %}
      <div class="album-caption">Attending FSE'25 (Norway)</div>
    </div>
    <!-- Card  -->
    <div class="album-card">
      {% include figure.liquid loading="eager" path="assets/img/aise/retreat2025.jpg" class="img-fluid rounded z-depth-1" %}
      <div class="album-caption">Team Activity (Padel)</div>
    </div>
    <!-- Card  -->
    <div class="album-card">
      {% include figure.liquid loading="eager" path="assets/img/events/aiwarebootcamp2025.jpg" class="img-fluid rounded z-depth-1" %}
      <div class="album-caption">Organizing AIWare Bootcamp'25 (Europe)</div>
    </div>
    <!-- Card  -->
    <div class="album-card">
      {% include figure.liquid loading="eager" path="assets/img/aise/bouldering2024.jpg" class="img-fluid rounded z-depth-1" %}
      <div class="album-caption">Team Activity (Bouldering)</div>
    </div>
    <!-- Card  -->
    <div class="album-card">
      {% include figure.liquid loading="eager" path="assets/img/aise/msr2025_award.jpg" class="img-fluid rounded z-depth-1" %}
      <div class="album-caption">ACM Distinguished Paper Award (MSR'25)</div>
    </div>    
    <!-- Card  -->
    <div class="album-card">
      {% include figure.liquid loading="eager" path="assets/img/events/sen2025.jpg" class="img-fluid rounded z-depth-1" %}
      <div class="album-caption">Organizing SEN'25 (Netherlands)</div>
    </div> 
    <!-- Card  -->
    <div class="album-card">
      {% include figure.liquid loading="eager" path="assets/img/events/shonan2024_flm.jpg" class="img-fluid rounded z-depth-1" %}
      <div class="album-caption">Shonan on FLMs'23 (Japan)</div>
    </div>
    <!-- Card  -->
    <div class="album-card">
      {% include figure.liquid loading="eager" path="assets/img/aise/retreat2024.jpg" class="img-fluid rounded z-depth-1" %}
      <div class="album-caption">Team Activity (Karting)</div>
    </div>  
    <!-- Card  -->
    <div class="album-card">
      {% include figure.liquid loading="eager" path="assets/img/aise/icse2024.jpg" class="img-fluid rounded z-depth-1" %}
      <div class="album-caption">Attending ICSE'24 (Portugal)</div>
    </div>
     <!-- Card  -->
    <div class="album-card">
      {% include figure.liquid loading="lazy" path="assets/img/aise/aiware2024_award.jpg" class="img-fluid rounded z-depth-1" %}
      <div class="album-caption">ACM Distinguished Paper Award(AIWare'24)</div>
    </div>
    <!-- Card  -->
    <div class="album-card">
      {% include figure.liquid loading="eager" path="assets/img/aise/retreat2023.jpg" class="img-fluid rounded z-depth-1" %}
      <div class="album-caption">Team Activity (Pinball Museum)</div>
    </div>
    <!-- Card  -->
    <div class="album-card">
      {% include figure.liquid loading="eager" path="assets/img/events/dagstuhl2023_plm.jpg" class="img-fluid rounded z-depth-1" %}
      <div class="album-caption">Dagstuhl on PLMs'23 (Germany)</div>
    </div>
    <!-- Card  -->
    <div class="album-card">
      {% include figure.liquid loading="lazy" path="assets/img/aise/nlbse2023_award.jpg" class="img-fluid rounded z-depth-1" %}
      <div class="album-caption">Best Tool Award (NLBSE @ ICSE'23)</div>
    </div>
  </div>
</div>
<br/>
<br/>


