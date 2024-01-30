<template>
  <HomeSectionWrapper>
    <h2>همکاران ما</h2>
    <p>نگاهی به دستاوردهای نئوزرین در کنار شما</p>
    <ul class="w-full grid grid-cols-2 gap-1 mt-12 lg:grid-cols-4">
      <ColleaguesSectionItem
        v-for="colleague in colleagues"
        :title="colleague.title"
        :logo-src="colleague.logoSrc"
      />
    </ul>
  </HomeSectionWrapper>
</template>

<script>
import HomeSectionWrapper from '@/components/Home/Section/index.vue'
import ColleaguesSectionItem from '@/components/ColleaguesSection/Item/index.vue'

export default {
  name: 'ColleaguesSection',

  components: { ColleaguesSectionItem, HomeSectionWrapper },

  data: () => ({
    colleagues: [],
    imageSrc: null
  }),

  async mounted() {
    await this.setImages()
  },

  methods: {
    async setImages() {
      const colleagues = [
        {
          title: 'زرین‌پال',
          path: '/images/colleagues/zarinpal.png'
        },
        {
          title: 'بانک آینده',
          path: '/images/colleagues/ayandeh.png'
        },
        {
          title: 'بانک خاورمیانه',
          path: '/images/colleagues/khavarmiyaneh.png'
        },
        {
          title: 'بانک شهر',
          path: '/images/colleagues/shahr.png'
        }
      ]
      this.colleagues = await Promise.all(
        colleagues.map(async (colleague) => {
          const logoSrc = await import(colleague.path)
          return {
            ...colleague,
            logoSrc: logoSrc.default
          }
        })
      )
    }
  }
}
</script>
