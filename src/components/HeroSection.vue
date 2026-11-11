<script setup>
import { hero, site } from '../content.js'
</script>

<template>
  <section id="top" class="container hero">
    <div>
      <p class="badge"><span class="dot" aria-hidden="true"></span>{{ hero.availability }}</p>
      <p class="eyebrow">{{ hero.eyebrow }}</p>
      <h1>{{ hero.headline }}</h1>
      <p class="intro">{{ hero.intro }}</p>
      <div class="actions">
        <a href="#work" class="btn btn-primary">See my case studies</a>
        <a :href="site.resumeUrl" class="btn">Download resume (PDF)</a>
      </div>
    </div>
    <div class="photo-card card">
      <img v-if="hero.photo" :src="hero.photo" :alt="`Photo of ${site.name}`" />
      <div v-else class="photo-placeholder" role="img" aria-label="Headshot placeholder">
        Add your headshot to /public and set <code>hero.photo</code>
      </div>
      <div class="caption">
        <strong>{{ site.name }}</strong>
        <span>Technical Account Manager · New York</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  display: grid;
  grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr);
  gap: 56px;
  align-items: center;
  padding-top: 88px;
  padding-bottom: 72px;
}
.badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin: 0 0 20px;
  padding: 6px 14px;
  border-radius: 999px;
  background: #ecfdf5;
  color: #065f46;
  font-size: 14px;
  font-weight: 600;
}
.dot { width: 8px; height: 8px; border-radius: 50%; background: #059669; }
h1 {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 52px;
  line-height: 1.08;
  letter-spacing: -0.02em;
}
.intro { margin: 24px 0 0; max-width: 600px; font-size: 19px; color: var(--text); }
.actions { display: flex; flex-wrap: wrap; gap: 14px; margin-top: 36px; }
.photo-card { padding: 18px; box-shadow: 0 12px 32px rgba(20, 33, 61, 0.08); }
.photo-card img,
.photo-placeholder {
  display: block;
  width: 100%;
  aspect-ratio: 4 / 5;
  border-radius: 10px;
  object-fit: cover;
}
.photo-placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  text-align: center;
  background: var(--accent-soft);
  color: var(--muted);
  font-size: 15px;
}
.caption { display: flex; flex-direction: column; padding: 16px 4px 2px; }
.caption span { font-size: 15px; color: var(--muted); }

@media (max-width: 860px) {
  .hero { grid-template-columns: 1fr; padding-top: 56px; }
  h1 { font-size: 36px; }
  .photo-card { max-width: 360px; }
}
</style>
