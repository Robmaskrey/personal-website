<script setup>
import { contact, site } from '../content.js'
</script>

<template>
  <section id="contact" data-section="contact" class="container section contact">
    <p class="eyebrow">{{ contact.eyebrow }}</p>
    <h2>{{ contact.titleTop }}<br />{{ contact.titleBottom }}</h2>
    <p class="text">{{ contact.text }}</p>
    <div class="actions">
      <a :href="site.email" class="btn btn-primary" data-track="contact_email">Email me →</a>
      <a :href="site.linkedin" class="btn" target="_blank" rel="noopener" data-track="contact_linkedin">LinkedIn</a>
      <a :href="site.resumeUrl" class="btn" data-track="contact_resume">Resume.pdf</a>
    </div>
  </section>
</template>

<style scoped>
.contact { padding-bottom: 140px; }
h2 {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: clamp(52px, 8vw, 104px);
  line-height: 0.95;
  letter-spacing: -0.035em;
}
.text { margin: 32px 0 0; max-width: 560px; font-size: 19px; }
.actions { display: flex; flex-wrap: wrap; gap: 14px; margin-top: 40px; }
</style>
