---
layout: default
title: "Our Team"
permalink: /team/
---

<section class="team-hero">
  <h1>Meet the Sneksoft Team</h1>
  <p>
    We’re a small studio powered by passion, caffeine, VR mishaps, and the occasional
    3AM breakthrough. Here’s who brings the chaos — and the magic — to Sneksoft.
  </p>
</section>

<!-- STAFF GRID -->
<section class="team-grid">

  <!-- STAFF MEMBER 1 -->
 <div class="team-card">
  <div class="team-photo">
    <img src="/assets/img/staff/dm.png" alt="Dan">
  </div>

  <div class="team-info">
    <h2>Dan</h2>
    <p class="team-role">Lead Developer • Founder</p>
    <p class="team-desc">
      Builder of systems, breaker of builds. Handles VR, FiveM, backend tools and
      everything chaotic in-between.
    </p>
  </div>
</div>


  <!-- ADD MORE MANUALLY AS NEEDED -->
</section>


<!-- BEHIND THE SCENES — AUTO ROTATING WHEEL -->
<section class="photo-wheel-section glass-block">
  <h2>Behind the Scenes</h2>
  <p class="photo-wheel-subtitle">
    A look at the chaos, fun, testing, broken builds, and “this might actually work”
    moments behind Sneksoft.
  </p>

  <div class="photo-wheel auto-rotate" id="btsWheel">
    {% for file in site.static_files %}
      {% if file.path contains '/assets/img/bts/' %}
        <div class="wheel-item">
          <img src="{{ file.path | relative_url }}" alt="Behind the scenes">
        </div>
      {% endif %}
    {% endfor %}
  </div>
</section>


<script>
/* AUTO ROTATION LOGIC */
(function() {
  const wheel = document.getElementById('btsWheel');
  if (!wheel) return;

  let scrollSpeed = 0.7; // px per frame
  function autoScroll() {
    wheel.scrollLeft += scrollSpeed;

    // Loop when reaching the end
    if (wheel.scrollLeft + wheel.clientWidth >= wheel.scrollWidth - 1) {
      wheel.scrollLeft = 0;
    }
    requestAnimationFrame(autoScroll);
  }

  // Start auto-rotation
  requestAnimationFrame(autoScroll);
})();
</script>
