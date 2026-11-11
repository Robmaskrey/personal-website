<script setup>
import { skillGroups } from '../content.js'
</script>

<template>
  <section id="skills" class="container section">
    <p class="eyebrow">Skills</p>
    <h2 class="section-title">Technical depth, customer judgment</h2>
    <div class="grid-auto">
      <div v-for="group in skillGroups" :key="group.title" class="card group">
        <h3>{{ group.title }}</h3>
        <p>{{ group.blurb }}</p>
        <ul>
          <li v-for="item in group.items" :key="item">{{ item }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.group { padding: 32px; }
h3 { font-size: 20px; font-weight: 600; margin-bottom: 8px; }
p { margin: 0 0 20px; font-size: 15px; color: var(--muted); }
ul { display: flex; flex-wrap: wrap; gap: 8px; margin: 0; padding: 0; list-style: none; }
li { padding: 6px 12px; border-radius: 999px; background: #f0f0ec; font-size: 14px; font-weight: 500; }
</style>
