<template>
  <div class="flex flex-col gap-y-32">
    <ContactHeroSection />
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-1">
      <ContactTicketSection class="h-full" />
      <ContactInfoSection class="h-full" />
    </div>
  </div>
</template>

<script>
import ContactHeroSection from '@/components/Contact/HeroSection/index.vue'
import ContactTicketSection from '@/components/Contact/TicketSection/index.vue'
import ContactInfoSection from '@/components/Contact/InfoSection/index.vue'

export default {
  name: 'ContactPage',

  components: { ContactInfoSection, ContactTicketSection, ContactHeroSection }
}
</script>
