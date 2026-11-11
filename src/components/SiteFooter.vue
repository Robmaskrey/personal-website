<script setup>
import { site } from '../content.js'

const year = new Date().getFullYear()
</script>

<template>
  <footer>
    <div class="container inner mono">
      <span>© {{ year }} {{ site.name }}</span>
      <span>Drawn by hand · Built with Vue</span>
    </div>
  </footer>
</template>

<style scoped>
footer { border-top: 1px solid var(--line); }
.inner {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 12px;
  padding-top: 24px;
  padding-bottom: 88px; /* room for the inspector button */
  font-size: 13px;
  color: var(--muted);
}
</style>
