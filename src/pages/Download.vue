<template>
  <div class="flex flex-col gap-y-32">
    <DownloadHeroSection />
    <AppsSection />
  </div>
</template>

<script>
import DownloadHeroSection from '@/components/Download/HeroSection/index.vue'
import AppsSection from '@/components/Download/AppsSection/index.vue'

export default {
  name: 'DownloadPage',
  components: { AppsSection, DownloadHeroSection }
}
</script>
