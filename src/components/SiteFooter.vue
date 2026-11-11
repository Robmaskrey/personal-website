<script setup>
import { site } from '../content.js'

const year = new Date().getFullYear()
</script>

<template>
  <footer>
    <div class="container inner">
      <span>© {{ year }} {{ site.name }}</span>
      <span>{{ site.domain }}</span>
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
  padding-top: 28px;
  padding-bottom: 28px;
  font-size: 14px;
  color: var(--muted);
}
</style>
