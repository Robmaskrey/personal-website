<script setup>
import { experience } from '../content.js'
</script>

<template>
  <section id="experience" class="container section">
    <p class="eyebrow">Experience</p>
    <h2 class="section-title">Where I've worked</h2>
    <ul class="timeline">
      <li v-for="job in experience" :key="job.role">
        <div>
          <div class="role">{{ job.role }}</div>
          <div class="detail">{{ job.detail }}</div>
        </div>
        <div class="dates">{{ job.dates }}</div>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.timeline { margin: 0; padding: 0; list-style: none; border-top: 1px solid var(--line); }
li {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 8px 24px;
  padding: 24px 0;
  border-bottom: 1px solid var(--line);
}
.role { font-weight: 600; font-size: 18px; }
.detail, .dates { font-size: 15px; color: var(--muted); }
.dates { white-space: nowrap; }
</style>
