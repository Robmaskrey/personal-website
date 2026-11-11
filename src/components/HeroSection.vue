<script setup>
import { hero, site } from '../content.js'
import DimensionLine from './DimensionLine.vue'
import DrawnFrame from './DrawnFrame.vue'
</script>

<template>
  <section id="top" data-section="hero" class="container hero">
    <p class="drawing-no mono">{{ hero.drawingNo }}</p>
    <h1>
      {{ hero.headlineTop }}<br />
      <span class="accent">{{ hero.headlineAccent }}</span>
    </h1>
    <DimensionLine class="span-line" :label="hero.span" />

    <div class="lower">
      <p class="intro">{{ hero.intro }}</p>
      <DrawnFrame class="title-block mono">
        <dl>
          <div v-for="row in hero.titleBlock" :key="row.label" class="row">
            <dt>{{ row.label }}</dt>
            <dd>{{ row.value }}</dd>
          </div>
          <div class="row">
            <dt>Status</dt>
            <dd class="status">{{ hero.status }}</dd>
          </div>
        </dl>
      </DrawnFrame>
    </div>

    <div class="actions">
      <a href="#plans" class="btn btn-primary" data-track="hero_view_plans">View the plans →</a>
      <a :href="site.resumeUrl" class="btn" data-track="hero_resume">Resume.pdf</a>
    </div>
  </section>
</template>

<style scoped>
.hero { padding-top: 96px; padding-bottom: 88px; }
.drawing-no { margin: 0 0 28px; font-size: 14px; letter-spacing: 0.12em; color: var(--muted); }
h1 {
  max-width: 1080px;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: clamp(52px, 8vw, 104px);
  line-height: 0.95;
  letter-spacing: -0.035em;
}
.accent { color: var(--accent); }
.span-line { max-width: 1080px; margin-top: 40px; }
.lower {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 48px;
  align-items: end;
  margin-top: 48px;
}
.intro { margin: 0; max-width: 560px; font-size: 20px; }
.title-block { background: var(--panel); font-size: 13px; }
dl { margin: 0; }
.row { display: grid; grid-template-columns: 110px minmax(0, 1fr); border-bottom: 1px solid var(--line); }
.row:last-child { border-bottom: 0; }
dt { padding: 10px 14px; color: var(--muted); border-right: 1px solid var(--line); }
dd { margin: 0; padding: 10px 14px; color: var(--ink); }
.status { color: var(--accent); font-weight: 600; }
.actions { display: flex; flex-wrap: wrap; gap: 14px; margin-top: 48px; }

@media (max-width: 640px) {
  .hero { padding-top: 56px; padding-bottom: 64px; }
  .intro { font-size: 18px; }
}
</style>
