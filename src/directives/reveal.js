// v-reveal: adds the class "is-drawn" once an element scrolls into view.
// Components use that class to start their line-drawing transitions.
// With reduced motion (or no IntersectionObserver) everything is drawn immediately.

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

export default {
  mounted(el) {
    if (prefersReducedMotion() || !('IntersectionObserver' in window)) {
      el.classList.add('is-drawn')
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.classList.add('is-drawn')
            observer.disconnect()
          }
        }
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0 },
    )
    observer.observe(el)
    el._revealObserver = observer
  },
  unmounted(el) {
    el._revealObserver?.disconnect()
  },
}
