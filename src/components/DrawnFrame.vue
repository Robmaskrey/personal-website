<script setup>
// A box whose four edges draw themselves in, clockwise, when it scrolls into view.
// The content inside is always visible; only the linework animates.
defineProps({
  as: { type: String, default: 'div' },
})
</script>

<template>
  <component :is="as" v-reveal class="frame">
    <span class="edge top" aria-hidden="true"></span>
    <span class="edge right" aria-hidden="true"></span>
    <span class="edge bottom" aria-hidden="true"></span>
    <span class="edge left" aria-hidden="true"></span>
    <slot />
  </component>
</template>

<style scoped>
.frame { position: relative; }
.edge {
  position: absolute;
  background: var(--line-strong);
  pointer-events: none;
  transition: transform var(--draw-speed) var(--draw-ease);
}
.top { top: 0; left: 0; right: 0; height: 1px; transform: scaleX(0); transform-origin: left; }
.right { top: 0; right: 0; bottom: 0; width: 1px; transform: scaleY(0); transform-origin: top; transition-delay: calc(var(--draw-speed) * 0.9); }
.bottom { bottom: 0; left: 0; right: 0; height: 1px; transform: scaleX(0); transform-origin: right; transition-delay: calc(var(--draw-speed) * 1.8); }
.left { top: 0; left: 0; bottom: 0; width: 1px; transform: scaleY(0); transform-origin: bottom; transition-delay: calc(var(--draw-speed) * 2.7); }
.frame.is-drawn .edge { transform: none; }
</style>
