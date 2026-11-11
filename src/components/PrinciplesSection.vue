<script setup>
import { principles } from '../content.js'
</script>

<template>
  <section class="band" aria-labelledby="how-i-work">
    <div class="container grid">
      <h2 id="how-i-work">How I work</h2>
      <div v-for="p in principles" :key="p.title">
        <h3>{{ p.title }}</h3>
        <p>{{ p.text }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.band { background: var(--accent-soft); margin-top: 56px; }
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 40px;
  padding-top: 72px;
  padding-bottom: 72px;
}
h2 { font-family: var(--font-display); font-weight: 600; font-size: 34px; line-height: 1.15; }
h3 { font-size: 19px; font-weight: 600; margin-bottom: 8px; }
p { margin: 0; font-size: 16px; color: var(--text); }
</style>
