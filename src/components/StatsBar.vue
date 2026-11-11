<script setup>
import { stats } from '../content.js'
import DimensionLine from './DimensionLine.vue'
</script>

<template>
  <section class="stats" data-section="stats" aria-label="Key dimensions">
    <div class="container grid">
      <div v-for="stat in stats" :key="stat.label">
        <DimensionLine color="var(--accent)" />
        <div class="value">{{ stat.value }}</div>
        <div class="label mono">{{ stat.label }}</div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.stats { border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); background: var(--bg-deep); }
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 40px;
  padding-top: 56px;
  padding-bottom: 56px;
}
.value {
  margin-top: 14px;
  font-family: var(--font-display);
  font-size: 64px;
  font-weight: 700;
  line-height: 1;
  color: var(--ink);
}
.label { margin-top: 10px; font-size: 13px; color: var(--muted); }
</style>
