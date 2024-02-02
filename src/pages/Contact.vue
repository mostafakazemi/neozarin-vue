<template>
  <div class="flex flex-col gap-y-32">
    <ContactHeroSection />
    <TicketSection />
  </div>
</template>

<script>
import ContactHeroSection from '@/components/Contact/HeroSection/index.vue'
import TicketSection from '@/components/Contact/TicketSection/index.vue'

export default {
  name: 'ContactPage',

  components: { TicketSection, ContactHeroSection }
}
</script>
