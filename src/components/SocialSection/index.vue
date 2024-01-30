<template>
  <section class="flex">
    <div class="flex items-center gap-x-1">
      <IconLogo />
      <span>نئوزرین</span>
    </div>
    <div class="mr-auto flex gap-x-10">
      <IconLinkedin />
      <IconTwitter />
      <IconInstagram />
    </div>
  </section>
</template>

<script>
import IconLogo from '@/components/Icons/Logo/index.vue'
import IconLinkedin from '@/components/Icons/Linkedin/index.vue'
import IconTwitter from '@/components/Icons/Twitter/index.vue'
import IconInstagram from '@/components/Icons/Instagram/index.vue'

export default {
  name: 'SocialSection',
  components: { IconInstagram, IconTwitter, IconLinkedin, IconLogo }
}
</script>
