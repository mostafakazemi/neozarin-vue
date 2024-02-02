<template>
  <div class="flex flex-col gap-y-32">
    <ContactHeroSection />
  </div>
</template>

<script>
import ContactHeroSection from '@/components/Contact/HeroSection/index.vue'

export default {
  name: 'ContactPage',

  components: { ContactHeroSection }
}
</script>
