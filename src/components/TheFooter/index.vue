<template>
  <footer class="bg-white py-20 px-6 flex flex-col gap-y-6">
    <SupportSection />
    <CertificateSection class="border-b py-6" />
    <SocialSection />
  </footer>
</template>

<script>
import SupportSection from '@/components/SupportSection/index.vue'
import CertificateSection from '@/components/CertificateSection/index.vue'
import SocialSection from '@/components/SocialSection/index.vue'

export default {
  name: 'TheHeader',
  components: { SocialSection, CertificateSection, SupportSection }
}
</script>
