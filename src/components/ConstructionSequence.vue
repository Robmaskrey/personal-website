<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'
import { sequence, notes } from '../content.js'

// The orange line fills as the visitor scrolls through this section,
// and each phase "lights up" once the line reaches it.
const track = ref(null)
const progress = ref(0)
let frame = 0

function measure() {
  frame = 0
  const el = track.value
  if (!el) return
  const rect = el.getBoundingClientRect()
  const vh = window.innerHeight
  const start = vh * 0.85 // start filling when the timeline enters the lower part of the screen
  const distance = rect.height + vh * 0.35
  progress.value = Math.min(1, Math.max(0, (start - rect.top) / distance))
}

function onScroll() {
  if (!frame) frame = requestAnimationFrame(measure)
}

onMounted(() => {
  measure()
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', onScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', onScroll)
  if (frame) cancelAnimationFrame(frame)
})

const reached = (i) => progress.value >= i / sequence.length + 0.02
</script>

<template>
  <section id="sequence" data-section="sequence" class="container section">
    <p class="eyebrow">03 — Construction sequence</p>
    <h2 class="display">How this was built.</h2>

    <ol ref="track" class="timeline" :style="{ '--progress': progress }">
      <li v-for="(step, i) in sequence" :key="step.title" :class="{ reached: reached(i) }">
        <span class="node" aria-hidden="true"></span>
        <div class="dates mono">{{ step.dates }}</div>
        <h3>{{ step.title }}</h3>
        <p>{{ step.text }}</p>
      </li>
    </ol>

    <div class="notes">
      <div v-for="(note, i) in notes" :key="note.title">
        <div class="note-no mono">Note {{ i + 1 }}</div>
        <h3>{{ note.title }}</h3>
        <p>{{ note.text }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.timeline {
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  margin: 0;
  padding: 0;
  list-style: none;
}
/* The rail and its fill */
.timeline::before,
.timeline::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
}
.timeline::before { background: var(--line); }
.timeline::after {
  background: var(--accent);
  transform: scaleX(var(--progress));
  transform-origin: left;
}
li { position: relative; padding: 28px 24px 8px 0; }
.node {
  position: absolute;
  top: -6px;
  left: 0;
  width: 14px;
  height: 14px;
  border: 2px solid var(--line-strong);
  background: var(--bg);
  transition: background 0.3s, border-color 0.3s;
}
li.reached .node { background: var(--accent); border-color: var(--accent); }
.dates { font-size: 13px; color: var(--muted); transition: color 0.3s; }
li.reached .dates { color: var(--accent); }
h3 { margin-top: 8px; font-size: 18px; font-weight: 600; }
p { margin: 6px 0 0; font-size: 15px; }

.notes {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 32px;
  margin-top: 64px;
  padding: 40px;
  border: 1px dashed var(--line-strong);
}
.note-no { font-size: 13px; color: var(--accent); }

/* On narrow screens the timeline runs down the left edge instead */
@media (max-width: 760px) {
  .timeline { grid-template-columns: 1fr; }
  .timeline::before,
  .timeline::after { top: 0; bottom: 0; left: 6px; right: auto; width: 2px; height: auto; }
  .timeline::after { transform: scaleY(var(--progress)); transform-origin: top; }
  li { padding: 0 0 32px 40px; }
  .node { top: 4px; left: 0; }
  .notes { padding: 28px 22px; }
}
</style>
