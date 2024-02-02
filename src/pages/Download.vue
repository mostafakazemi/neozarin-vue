<template>
  <div class="flex flex-col gap-y-32">
    <DownloadHeroSection />
    <AppsSection />
    <FeaturesSection />
  </div>
</template>

<script>
import DownloadHeroSection from '@/components/Download/HeroSection/index.vue'
import AppsSection from '@/components/Download/AppsSection/index.vue'
import FeaturesSection from '@/components/FeaturesSection/index.vue'

export default {
  name: 'DownloadPage',
  components: { FeaturesSection, AppsSection, DownloadHeroSection }
}
</script>
