<script setup>
import { computed, nextTick, ref } from 'vue'
import { useTracker } from '../composables/tracker.js'

const { events, track, clearEvents } = useTracker()
const open = ref(false)
const closeButton = ref(null)
const toggleButton = ref(null)

const count = computed(() => events.length)

async function toggle() {
  open.value = !open.value
  if (open.value) {
    track('inspector_open', { events_so_far: events.length })
    await nextTick()
    closeButton.value?.focus()
  }
}

function close() {
  open.value = false
  toggleButton.value?.focus()
}

function payload(e) {
  return JSON.stringify({ event: e.event, ...e.props, time: e.time }, null, 2)
}
</script>

<template>
  <div class="inspector">
    <aside
      v-if="open"
      id="tracking-inspector"
      class="panel"
      aria-label="Tracking inspector"
      @keydown.esc="close"
    >
      <div class="head mono">
        <span><span class="live" aria-hidden="true"></span>Tracking inspector</span>
        <button ref="closeButton" class="icon-btn" aria-label="Close inspector" @click="close">
          <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
        </button>
      </div>
      <p class="explain">
        These are the events your visit is generating right now, the way I'd debug a client's
        pixel. Nothing leaves your browser.
      </p>
      <ol class="events">
        <TransitionGroup name="evt">
          <li v-for="e in events" :key="e.id">
            <div class="evt-name mono">{{ e.event }}</div>
            <pre>{{ payload(e) }}</pre>
          </li>
        </TransitionGroup>
      </ol>
      <p v-if="!events.length" class="empty mono">No events yet. Scroll or click something.</p>
      <div class="foot mono">
        <span>{{ count }} event{{ count === 1 ? '' : 's' }}</span>
        <button class="text-btn mono" @click="clearEvents">Clear</button>
      </div>
    </aside>

    <button
      ref="toggleButton"
      class="toggle mono"
      :aria-expanded="open"
      aria-controls="tracking-inspector"
      @click="toggle"
    >
      <span class="live" aria-hidden="true"></span>
      {{ open ? 'Hide inspector' : 'Inspect this page' }}
      <span class="badge" aria-label="events recorded">{{ count }}</span>
    </button>
  </div>
</template>

<style scoped>
.inspector {
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 30;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 12px;
}
.toggle {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  min-height: 48px;
  padding: 0 16px;
  border: 1px solid var(--accent);
  background: var(--bg);
  color: var(--ink);
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  cursor: pointer;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
}
.toggle:hover { background: #0e3157; }
.badge {
  min-width: 26px;
  padding: 2px 7px;
  background: var(--accent);
  color: var(--bg);
  font-weight: 700;
  text-align: center;
}
.live {
  display: inline-block;
  width: 8px;
  height: 8px;
  margin-right: 8px;
  border-radius: 50%;
  background: #4ade80;
  animation: pulse 2s ease-in-out infinite;
  vertical-align: middle;
}
.toggle .live { margin-right: 0; }
@keyframes pulse { 50% { opacity: 0.35; } }

.panel {
  width: 380px;
  max-width: calc(100vw - 40px);
  max-height: min(560px, 70vh);
  display: flex;
  flex-direction: column;
  border: 1px solid var(--line-strong);
  background: #071c33;
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.45);
}
.head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 6px 6px 16px;
  border-bottom: 1px solid var(--line);
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--ink);
}
.icon-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border: 0;
  background: transparent;
  color: var(--text);
  cursor: pointer;
}
.icon-btn:hover { color: var(--accent); }
.explain { margin: 0; padding: 12px 16px; font-size: 14px; line-height: 1.5; border-bottom: 1px solid var(--line); }
.events { flex: 1; margin: 0; padding: 0; list-style: none; overflow-y: auto; }
.events li { padding: 12px 16px; border-bottom: 1px solid rgba(173, 216, 255, 0.15); }
.evt-name { font-size: 13px; font-weight: 600; color: var(--accent); }
pre {
  margin: 6px 0 0;
  font-family: var(--font-mono);
  font-size: 12px;
  line-height: 1.5;
  color: var(--text);
  white-space: pre-wrap;
  word-break: break-word;
}
.empty { margin: 0; padding: 16px; font-size: 13px; color: var(--muted); }
.foot {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px 6px 4px 16px;
  border-top: 1px solid var(--line);
  font-size: 12px;
  color: var(--muted);
  text-transform: uppercase;
}
.text-btn {
  min-height: 40px;
  padding: 0 12px;
  border: 0;
  background: transparent;
  color: var(--accent);
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  cursor: pointer;
}

/* New events flash in at the top */
.evt-enter-active { transition: background 1.2s ease, transform 0.3s ease; }
.evt-enter-from { background: rgba(255, 159, 67, 0.22); transform: translateY(-6px); }

@media (max-width: 640px) {
  .inspector { right: 12px; left: 12px; bottom: 12px; }
  .panel { width: 100%; max-width: none; max-height: 60vh; }
}
</style>
