<script setup>
import { ref } from 'vue'
import { site } from '../content.js'

const open = ref(false)
</script>

<template>
  <header class="nav-wrap">
    <nav class="container nav" aria-label="Main">
      <a href="#top" class="brand">{{ site.name }}</a>
      <button
        class="menu-toggle"
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
        <a href="#contact" class="cta" @click="open = false">Get in touch</a>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.nav-wrap {
  position: sticky;
  top: 0;
  z-index: 10;
  background: rgba(247, 247, 244, 0.95);
  backdrop-filter: blur(6px);
  border-bottom: 1px solid var(--line);
}
.nav {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding-top: 16px;
  padding-bottom: 16px;
}
.brand {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 20px;
  color: var(--ink);
  text-decoration: none;
}
.links { display: flex; flex-wrap: wrap; align-items: center; gap: 26px; font-size: 15px; font-weight: 500; }
.links a { color: var(--ink); text-decoration: none; padding: 10px 0; }
.links a:hover { color: var(--accent); }
.links .cta { padding: 10px 18px; border-radius: 8px; background: var(--ink); color: #fff; }
.links .cta:hover { background: var(--accent); color: #fff; }
.menu-toggle {
  display: none;
  min-height: 44px;
  padding: 0 16px;
  border: 1px solid var(--ink);
  border-radius: 8px;
  background: transparent;
  color: var(--ink);
  font: inherit;
  font-weight: 600;
  cursor: pointer;
}

@media (max-width: 760px) {
  .menu-toggle { display: inline-block; }
  .links { display: none; width: 100%; flex-direction: column; align-items: flex-start; gap: 4px; }
  .links.open { display: flex; }
}
</style>
