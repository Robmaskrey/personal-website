<script setup>
// A drafting dimension line: |<—— label ——>|. Draws outward from the middle when it scrolls into view.
defineProps({
  label: { type: String, default: '' },
  color: { type: String, default: 'var(--muted)' },
})
</script>

<template>
  <div v-reveal class="dim" :style="{ '--dim-color': color }">
    <span class="tick" aria-hidden="true"></span>
    <span class="bar to-left" aria-hidden="true"></span>
    <span v-if="label" class="label mono">{{ label }}</span>
    <span class="bar to-right" aria-hidden="true"></span>
    <span class="tick" aria-hidden="true"></span>
  </div>
</template>

<style scoped>
.dim { display: flex; align-items: center; color: var(--dim-color); }
.bar {
  flex: 1;
  height: 1px;
  background: var(--dim-color);
  transform: scaleX(0);
  transition: transform calc(var(--draw-speed) * 1.6) var(--draw-ease);
}
.bar.to-left { transform-origin: right; }
.bar.to-right { transform-origin: left; }
.tick {
  width: 1px;
  height: 14px;
  background: var(--dim-color);
  transform: scaleY(0);
  transition: transform var(--draw-speed) var(--draw-ease) calc(var(--draw-speed) * 1.5);
}
.label { margin: 0 12px; font-size: 13px; white-space: nowrap; }
.dim.is-drawn .bar,
.dim.is-drawn .tick { transform: none; }

@media (max-width: 640px) {
  .label { white-space: normal; text-align: center; font-size: 12px; }
}
</style>
