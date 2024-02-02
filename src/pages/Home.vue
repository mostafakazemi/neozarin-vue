<template>
  <div class="flex flex-col gap-y-32">
    <HeroSection />
    <FeaturesSection />
    <WhyNeozarinSection />
    <ColleaguesSection />
    <ComingSoonFeaturesSection />
    <FaqSection />
    <DownloadSection />
  </div>
</template>

<script>
import HeroSection from '@/components/HeroSection/index.vue'
import FeaturesSection from '@/components/FeaturesSection/index.vue'
import WhyNeozarinSection from '@/components/WhyNeozarinSection/index.vue'
import ColleaguesSection from '@/components/ColleaguesSection/index.vue'
import ComingSoonFeaturesSection from '@/components/ComingSoonFeaturesSection/index.vue'
import FaqSection from '@/components/FaqSection/index.vue'
import DownloadSection from '@/components/DownloadSection/index.vue'
import SupportSection from '@/components/SupportSection/index.vue'

export default {
  name: 'HomePage',
  components: {
    SupportSection,
    DownloadSection,
    FaqSection,
    ComingSoonFeaturesSection,
    ColleaguesSection,
    WhyNeozarinSection,
    FeaturesSection,
    HeroSection
  }
}
</script>
