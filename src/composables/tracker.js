// A tiny, local-only event tracker that powers the "Inspect this page" panel.
// It mirrors what a marketing pixel records, but NOTHING is sent anywhere:
// events live in memory in the visitor's own browser and vanish on reload.

import { reactive } from 'vue'

const MAX_EVENTS = 100
const state = reactive({ events: [] })
let nextId = 1
let started = false

function timestamp() {
  return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
}

export function track(event, props = {}) {
  state.events.unshift({ id: nextId++, time: timestamp(), event, props })
  if (state.events.length > MAX_EVENTS) state.events.pop()
}

export function clearEvents() {
  state.events.splice(0)
}

export function useTracker() {
  return { events: state.events, track, clearEvents }
}

function referrerSource() {
  if (!document.referrer) return 'direct'
  try {
    return new URL(document.referrer).hostname
  } catch {
    return 'unknown'
  }
}

// Wire up the automatic events once, after the page has rendered.
export function startTracking() {
  if (started) return () => {}
  started = true

  const width = window.innerWidth
  track('page_view', {
    page: window.location.pathname,
    referrer: referrerSource(),
    viewport: `${width}x${window.innerHeight}`,
    device: width < 760 ? 'mobile' : 'desktop',
  })

  // section_view: fires once per section when half of it is on screen
  const seen = new Set()
  let sectionObserver
  if ('IntersectionObserver' in window) {
    sectionObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const name = entry.target.dataset.section
          if (entry.isIntersecting && !seen.has(name)) {
            seen.add(name)
            track('section_view', { section: name })
          }
        }
      },
      { threshold: 0.35 },
    )
    document.querySelectorAll('[data-section]').forEach((el) => sectionObserver.observe(el))
  }

  // scroll_depth: 25 / 50 / 75 / 100 percent milestones
  const milestones = [25, 50, 75, 100]
  const hit = new Set()
  let ticking = false
  const onScroll = () => {
    if (ticking) return
    ticking = true
    requestAnimationFrame(() => {
      ticking = false
      const max = document.documentElement.scrollHeight - window.innerHeight
      const pct = max > 0 ? Math.round((window.scrollY / max) * 100) : 100
      for (const m of milestones) {
        if (pct >= m && !hit.has(m)) {
          hit.add(m)
          track('scroll_depth', { percent: m })
        }
      }
    })
  }
  window.addEventListener('scroll', onScroll, { passive: true })

  // cta_click: any element with data-track="name"
  const onClick = (e) => {
    const el = e.target.closest('[data-track]')
    if (!el) return
    track('cta_click', { id: el.dataset.track, text: el.textContent.trim().slice(0, 40) })
  }
  document.addEventListener('click', onClick)

  // engaged_time: a heartbeat every 30 seconds while the tab is visible, up to 3 minutes
  let seconds = 0
  const timer = setInterval(() => {
    if (document.visibilityState !== 'visible') return
    seconds += 30
    track('engaged_time', { seconds })
    if (seconds >= 180) clearInterval(timer)
  }, 30000)

  return () => {
    sectionObserver?.disconnect()
    window.removeEventListener('scroll', onScroll)
    document.removeEventListener('click', onClick)
    clearInterval(timer)
    started = false
  }
}
