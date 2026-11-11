<script setup>
import { about } from '../content.js'
</script>

<template>
  <section id="about" class="container section">
    <div class="about">
      <div>
        <p class="eyebrow">About me</p>
        <h2 class="section-title">{{ about.title }}</h2>
      </div>
      <div>
        <p v-for="(para, i) in about.paragraphs" :key="i">{{ para }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.4fr);
  gap: 56px;
}
p { margin: 0 0 18px; font-size: 18px; color: var(--text); }
.eyebrow { margin-bottom: 12px; }

@media (max-width: 860px) {
  .about { grid-template-columns: 1fr; gap: 0; }
}
</style>
