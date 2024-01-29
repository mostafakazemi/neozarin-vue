<template>
  <HeroSection />
  <FeaturesSection />
</template>

<script>
import HeroSection from '@/components/HeroSection/index.vue'
import FeaturesSection from '@/components/FeaturesSection/index.vue'

export default {
  name: 'HomePage',
  components: { FeaturesSection, HeroSection }
}
</script>
