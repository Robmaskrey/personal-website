<script setup>
import SiteNav from './components/SiteNav.vue'
import HeroSection from './components/HeroSection.vue'
import StatsBar from './components/StatsBar.vue'
import CaseStudies from './components/CaseStudies.vue'
import SkillsSection from './components/SkillsSection.vue'
import PrinciplesSection from './components/PrinciplesSection.vue'
import AboutSection from './components/AboutSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import ContactSection from './components/ContactSection.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>

<template>
  <SiteNav />
  <main>
    <HeroSection />
    <StatsBar />
    <CaseStudies />
    <SkillsSection />
    <PrinciplesSection />
    <AboutSection />
    <ExperienceSection />
    <ContactSection />
  </main>
  <SiteFooter />
</template>
