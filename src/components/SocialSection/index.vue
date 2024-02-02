<template>
  <HomeSectionWrapper>
    <div class="flex">
      <div class="flex items-center gap-x-1">
        <img src="@/assets/images/neozarin_logo.svg" alt="نئوزرین" width="100" height="22" />
      </div>
      <div class="mr-auto flex gap-x-5 text-xl">
        <IconLinkedin />
        <IconTwitter />
        <IconInstagram />
      </div>
    </div>
  </HomeSectionWrapper>
</template>

<script>
import IconLogo from '@/components/Icons/Logo/index.vue'
import IconLinkedin from '@/components/Icons/Linkedin/index.vue'
import IconTwitter from '@/components/Icons/Twitter/index.vue'
import IconInstagram from '@/components/Icons/Instagram/index.vue'
import HomeSectionWrapper from '@/components/Home/Section/index.vue'

export default {
  name: 'SocialSection',
  components: { HomeSectionWrapper, IconInstagram, IconTwitter, IconLinkedin, IconLogo }
}
</script>
