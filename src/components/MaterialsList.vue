<script setup>
import { materials } from '../content.js'
import DrawnFrame from './DrawnFrame.vue'
</script>

<template>
  <section id="materials" data-section="materials" class="container section">
    <p class="eyebrow">02 — Materials list</p>
    <h2 class="display">What I build with.</h2>
    <DrawnFrame>
      <table>
        <thead class="mono">
          <tr>
            <th scope="col">Item</th>
            <th scope="col">Category</th>
            <th scope="col">Spec</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="m in materials" :key="m.id">
            <td class="id mono">{{ m.id }}</td>
            <th scope="row">{{ m.category }}</th>
            <td>{{ m.spec }}</td>
          </tr>
        </tbody>
      </table>
    </DrawnFrame>
  </section>
</template>

<style scoped>
table { width: 100%; border-collapse: collapse; font-size: 16px; }
thead { background: rgba(173, 216, 255, 0.1); font-size: 12px; color: var(--muted); }
thead th { padding: 12px 16px; text-align: left; font-weight: 500; border-bottom: 1px solid var(--line-strong); }
tbody tr + tr td, tbody tr + tr th { border-top: 1px solid var(--line); }
tbody th { padding: 18px 16px; text-align: left; color: var(--ink); font-weight: 600; white-space: nowrap; }
td { padding: 18px 16px; vertical-align: top; }
tbody th { vertical-align: top; }
.id { color: var(--accent); width: 80px; }

@media (max-width: 640px) {
  thead { display: none; }
  tbody tr { display: grid; grid-template-columns: auto 1fr; padding: 14px 0; }
  tbody tr + tr { border-top: 1px solid var(--line); }
  tbody tr + tr td, tbody tr + tr th { border-top: 0; }
  td, tbody th { padding: 4px 16px; }
  td:last-child { grid-column: 1 / -1; }
  .id { width: auto; }
}
</style>
