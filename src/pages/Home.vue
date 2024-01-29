<template>
  <div class="flex flex-col gap-y-32">
    <HeroSection />
    <FeaturesSection />
    <WhyNeozarinSection />
  </div>
</template>

<script>
import HeroSection from '@/components/HeroSectionWrapper/index.vue'
import FeaturesSection from '@/components/FeaturesSection/index.vue'
import WhyNeozarinSection from '@/components/WhyNeozarinSection/index.vue'

export default {
  name: 'HomePage',
  components: { WhyNeozarinSection, FeaturesSection, HeroSection }
}
</script>
