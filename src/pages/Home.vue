<template>
  <div class="flex flex-col gap-y-32">
    <HeroSection />
    <FeaturesSection />
    <WhyNeozarinSection />
    <ColleaguesSection />
    <ComingSoonFeaturesSection />
  </div>
</template>

<script>
import HeroSection from '@/components/HeroSectionWrapper/index.vue'
import FeaturesSection from '@/components/FeaturesSection/index.vue'
import WhyNeozarinSection from '@/components/WhyNeozarinSection/index.vue'
import ColleaguesSection from '@/components/ColleaguesSection/index.vue'
import ComingSoonFeaturesSection from '@/components/ComingSoonFeaturesSection/index.vue'

export default {
  name: 'HomePage',
  components: {
    ComingSoonFeaturesSection,
    ColleaguesSection,
    WhyNeozarinSection,
    FeaturesSection,
    HeroSection
  }
}
</script>
