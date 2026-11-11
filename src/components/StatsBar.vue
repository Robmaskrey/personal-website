<script setup>
import { stats } from '../content.js'
</script>

<template>
  <section class="stats" aria-label="At a glance">
    <div class="container grid">
      <div v-for="stat in stats" :key="stat.label">
        <div class="value">{{ stat.value }}</div>
        <div class="label">{{ stat.label }}</div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.stats { background: var(--ink); color: #fff; }
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 32px;
  padding-top: 44px;
  padding-bottom: 44px;
}
.value { font-family: var(--font-display); font-size: 40px; font-weight: 600; line-height: 1.1; }
.label { margin-top: 6px; font-size: 15px; color: #d1d5db; }
</style>
