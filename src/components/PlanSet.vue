<script setup>
import { plans } from '../content.js'
import DrawnFrame from './DrawnFrame.vue'
</script>

<template>
  <section id="plans" data-section="plans" class="container section">
    <p class="eyebrow">01 — Plans</p>
    <h2 class="display">Three builds,<br />start to finish.</h2>
    <div class="list">
      <DrawnFrame v-for="plan in plans" :key="plan.id" as="article" class="plan">
        <div class="plan-head mono">
          <span>Plan {{ plan.id }}</span>
          <span>{{ plan.category }}</span>
        </div>
        <div class="plan-body">
          <div class="story">
            <h3>{{ plan.title }}</h3>
            <p><span class="tag mono">Site conditions — </span>{{ plan.conditions }}</p>
            <p><span class="tag mono">The build — </span>{{ plan.build }}</p>
            <a :href="plan.link" class="more mono" :data-track="`plan_${plan.id}`">Read the full plan →</a>
          </div>
          <div class="results">
            <div v-for="r in plan.results" :key="r.label" class="result">
              <div class="result-value">{{ r.value }}</div>
              <div class="result-label mono">{{ r.label }}</div>
            </div>
          </div>
        </div>
      </DrawnFrame>
    </div>
  </section>
</template>

<style scoped>
.list { display: flex; flex-direction: column; gap: 32px; }
.plan { background: var(--panel); }
.plan-head {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 8px 24px;
  padding: 14px 24px;
  border-bottom: 1px solid var(--line);
  font-size: 13px;
  color: var(--muted);
}
.plan-body {
  display: grid;
  grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr);
  gap: 48px;
  padding: 44px 40px;
}
.story { display: flex; flex-direction: column; gap: 16px; }
.story p { margin: 0; }
h3 {
  font-family: var(--font-display);
  font-size: clamp(30px, 3.4vw, 40px);
  line-height: 1.05;
  font-weight: 700;
  letter-spacing: -0.02em;
}
.tag { font-size: 13px; color: var(--accent); }
.more { font-size: 14px; font-weight: 600; text-decoration: none; }
.results {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1px;
  align-self: start;
  background: var(--line);
  border: 1px solid var(--line);
}
.result { background: var(--bg); padding: 24px; }
.result-value { font-family: var(--font-display); font-size: 36px; font-weight: 700; line-height: 1.05; color: var(--ink); }
.result-label { margin-top: 6px; font-size: 12px; color: var(--muted); }

@media (max-width: 860px) {
  .plan-body { grid-template-columns: 1fr; padding: 28px 22px; gap: 28px; }
}
</style>
