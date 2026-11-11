<script setup>
import { caseStudies } from '../content.js'
</script>

<template>
  <section id="work" class="container section">
    <p class="eyebrow">Case studies</p>
    <h2 class="section-title">Problems I've solved, and what changed</h2>
    <div class="list">
      <article v-for="study in caseStudies" :key="study.title" class="card study">
        <div class="story">
          <p class="tag">{{ study.tag }}</p>
          <h3>{{ study.title }}</h3>
          <p><strong>Problem:</strong> {{ study.problem }}</p>
          <p><strong>What I did:</strong> {{ study.action }}</p>
          <a :href="study.link" class="more">Read the full story →</a>
        </div>
        <div class="results">
          <div v-for="r in study.results" :key="r.label" class="result">
            <div class="result-value">{{ r.value }}</div>
            <div class="result-label">{{ r.label }}</div>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.list { display: flex; flex-direction: column; gap: 24px; }
.study {
  display: grid;
  grid-template-columns: minmax(0, 1.5fr) minmax(0, 1fr);
  gap: 40px;
  padding: 40px;
}
.story { display: flex; flex-direction: column; gap: 12px; }
.story p { margin: 0; color: var(--text); }
.story strong { color: var(--ink); }
.tag { font-size: 13px; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase; color: var(--muted) !important; }
h3 { font-family: var(--font-display); font-size: 26px; line-height: 1.2; font-weight: 600; }
.more { margin-top: 4px; font-weight: 600; font-size: 15px; }
.results { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 14px; align-content: start; }
.result { background: var(--accent-soft); border-radius: 12px; padding: 20px; }
.result-value { font-family: var(--font-display); font-size: 28px; font-weight: 600; }
.result-label { font-size: 14px; color: var(--text); }

@media (max-width: 860px) {
  .study { grid-template-columns: 1fr; padding: 28px; gap: 24px; }
}
</style>
