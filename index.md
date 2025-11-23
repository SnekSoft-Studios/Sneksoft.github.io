---
layout: default
title: "Home"
---

<section class="app-shell">

  <div class="shell-tabs">
    <span class="tab-pill tab-pill--active">VR Dashboards</span>
    <span class="tab-pill">FiveM Systems</span>
    <span class="tab-pill">Web Tools</span>
    <span class="tab-pill">Meta Quest</span>
    <span class="tab-pill">Tools in R&D</span>
  </div>

  <div class="shell-filter-row">
    <div class="filter-left">
      <label>Display projects</label>
      <div class="filter-toggle">
        <span>Shipped</span>
        <span>•</span>
        <span>In development</span>
      </div>
    </div>

    <button class="filter-button">Filters</button>
  </div>

  <div class="shell-grid">
    <!-- LEFT COLUMN: “cards” -->
    <div class="list-column">

      <article class="project-card">
        <div class="project-thumb project-thumb--vr"></div>
        <div class="project-body">
          <h3>Sneksoft VR Framework</h3>
          <p>Unity XR foundations for hand tracking, gesture UX and multiplayer-ready VR scenes.</p>
          <div class="project-meta">
            <div class="meta-tags">
              <span class="meta-tag">Unity 6</span>
              <span class="meta-tag">Meta XR</span>
              <span class="meta-tag">OpenXR</span>
            </div>
            <span>Core library</span>
          </div>
        </div>
      </article>

      <article class="project-card">
        <div class="project-thumb project-thumb--fivem"></div>
        <div class="project-body">
          <h3>Luna RP Systems</h3>
          <p>FiveM stack with gang hub, HUD v6, radio UI and upcoming VR client support.</p>
          <div class="project-meta">
            <div class="meta-tags">
              <span class="meta-tag">QBCore</span>
              <span class="meta-tag">VR mode</span>
              <span class="meta-tag">Discord linking</span>
            </div>
            <span>Live server</span>
          </div>
        </div>
      </article>

      <article class="project-card">
        <div class="project-thumb project-thumb--web"></div>
        <div class="project-body">
          <h3>RosterFlow</h3>
          <p>Firebase + Next.js platform for labels and teams with AI-assisted opportunity suggestions.</p>
          <div class="project-meta">
            <div class="meta-tags">
              <span class="meta-tag">Next.js</span>
              <span class="meta-tag">Firebase</span>
              <span class="meta-tag">Firestore</span>
            </div>
            <span>Preview build</span>
          </div>
        </div>
      </article>

    </div>

    <!-- RIGHT COLUMN: “map-style” overview -->
    <aside class="map-column">
      <div class="map-header">
        <span class="map-title">Sneksoft project universe</span>
        <span class="map-chip">Live · In dev · R&D</span>
      </div>

      <div class="map-grid">
        <span class="map-pin">VR Core</span>
        <span class="map-pin">FiveM Stack</span>
        <span class="map-pin">Web Tools</span>
        <span class="map-pin">Experimental</span>
      </div>
    </aside>

  </div>


</section>
