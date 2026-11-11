<script setup>
import { contact, site } from '../content.js'
</script>

<template>
  <section id="contact" class="container section contact-wrap">
    <div class="contact">
      <div class="text">
        <h2>{{ contact.title }}</h2>
        <p>{{ contact.text }}</p>
      </div>
      <div class="actions">
        <a :href="site.email" class="btn btn-light">Email me</a>
        <a :href="site.linkedin" class="btn btn-outline" target="_blank" rel="noopener">LinkedIn</a>
        <a :href="site.resumeUrl" class="btn btn-outline">Resume (PDF)</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-wrap { padding-bottom: 112px; }
.contact {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  padding: 56px 48px;
  border-radius: 20px;
  background: var(--ink);
  color: #fff;
}
.text { max-width: 560px; }
h2 { font-family: var(--font-display); font-weight: 600; font-size: 34px; line-height: 1.15; margin-bottom: 12px; }
p { margin: 0; font-size: 17px; color: #d1d5db; }
.actions { display: flex; flex-wrap: wrap; gap: 12px; }
.btn-light { background: #fff; border-color: #fff; color: var(--ink); }
.btn-light:hover { background: var(--accent-soft); color: var(--ink); }
.btn-outline { border-color: #fff; color: #fff; }
.btn-outline:hover { background: #fff; color: var(--ink); }

@media (max-width: 640px) {
  .contact { padding: 36px 24px; }
  h2 { font-size: 28px; }
}
</style>
