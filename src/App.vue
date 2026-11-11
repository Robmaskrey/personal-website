<script setup>
import { onMounted, onBeforeUnmount } from 'vue'
import SiteNav from './components/SiteNav.vue'
import HeroSection from './components/HeroSection.vue'
import StatsBar from './components/StatsBar.vue'
import PlanSet from './components/PlanSet.vue'
import MaterialsList from './components/MaterialsList.vue'
import ConstructionSequence from './components/ConstructionSequence.vue'
import ContactSection from './components/ContactSection.vue'
import SiteFooter from './components/SiteFooter.vue'
import TrackingInspector from './components/TrackingInspector.vue'
import { startTracking } from './composables/tracker.js'

let stopTracking = () => {}
onMounted(() => {
  stopTracking = startTracking()
})
onBeforeUnmount(() => stopTracking())
</script>

<template>
  <SiteNav />
  <main>
    <HeroSection />
    <StatsBar />
    <PlanSet />
    <MaterialsList />
    <ConstructionSequence />
    <ContactSection />
  </main>
  <SiteFooter />
  <TrackingInspector />
</template>
