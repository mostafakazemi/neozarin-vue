<template>
  <div class="flex flex-col gap-y-32">
    <ContactHeroSection />
    <ContactTicketSection />
  </div>
</template>

<script>
import ContactHeroSection from '@/components/Contact/HeroSection/index.vue'
import ContactTicketSection from '@/components/Contact/TicketSection/index.vue'

export default {
  name: 'ContactPage',

  components: { ContactTicketSection, ContactHeroSection }
}
</script>
