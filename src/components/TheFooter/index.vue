<template>
  <footer class="bg-white py-20 flex flex-col gap-y-6">
    <SupportSection />
    <CertificateSection class="border-b py-6" />
    <SocialSection />
    <CopyrightSection />
  </footer>
</template>

<script>
import SupportSection from '@/components/SupportSection/index.vue'
import CertificateSection from '@/components/CertificateSection/index.vue'
import SocialSection from '@/components/SocialSection/index.vue'
import CopyrightSection from '@/components/CopyrightSection/index.vue'
import DownloadSection from '@/components/DownloadSection/index.vue'

export default {
  name: 'TheHeader',
  components: {
    DownloadSection,
    CopyrightSection,
    SocialSection,
    CertificateSection,
    SupportSection
  }
}
</script>
