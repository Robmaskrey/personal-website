<script setup>
import { ref } from 'vue'
import { site } from '../content.js'

const open = ref(false)
</script>

<template>
  <header class="nav-wrap">
    <nav class="container nav mono" aria-label="Main">
      <a href="#top" class="brand">RM / Portfolio <span>· Sheet 01</span></a>
      <button
        class="menu-toggle mono"
        :aria-expanded="open"
        aria-controls="nav-links"
        @click="open = !open"
      >
        Menu
      </button>
      <div id="nav-links" class="links" :class="{ open }">
        <a v-for="item in site.nav" :key="item.href" :href="item.href" @click="open = false">
          {{ item.label }}
        </a>
        <a href="#contact" class="cta" data-track="nav_contact" @click="open = false">Contact →</a>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.nav-wrap {
  position: sticky;
  top: 0;
  z-index: 20;
  background: rgba(10, 37, 64, 0.92);
  backdrop-filter: blur(6px);
  border-bottom: 1px solid var(--line);
}
.nav {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding-top: 14px;
  padding-bottom: 14px;
  font-size: 14px;
}
.brand { color: var(--ink); text-decoration: none; font-weight: 600; }
.brand span { color: var(--muted); font-weight: 400; }
.links { display: flex; flex-wrap: wrap; align-items: center; gap: 24px; }
.links a { color: var(--text); text-decoration: none; padding: 10px 0; }
.links a:hover { color: var(--accent); }
.links .cta { padding: 10px 18px; border: 1px solid var(--accent); color: var(--accent); font-weight: 600; }
.links .cta:hover { background: var(--accent); color: var(--bg); }
.menu-toggle {
  display: none;
  min-height: 44px;
  padding: 0 16px;
  border: 1px solid var(--text);
  background: transparent;
  color: var(--text);
  font-size: 14px;
  cursor: pointer;
}

@media (max-width: 760px) {
  .menu-toggle { display: inline-block; }
  .links { display: none; width: 100%; flex-direction: column; align-items: flex-start; gap: 4px; }
  .links.open { display: flex; }
}
</style>
