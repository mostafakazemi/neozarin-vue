<template>
  <HomeSectionWrapper class="text-center">
    <div class="flex flex-col items-center gap-y-5">
      <h2>همکاران ما</h2>
      <p>نگاهی به دستاوردهای نئوزرین در کنار شما</p>
      <ul class="w-full grid grid-cols-2 gap-1 mt-12 lg:grid-cols-4 rounded-xl bg-white">
        <ColleaguesSectionItem
          v-for="colleague in colleagues"
          :title="colleague.title"
          :logo-src="colleague.logoSrc"
        />
      </ul>
    </div>
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
          path: '/images/colleagues/bank-logo-zarinpal.svg'
        },
        {
          title: 'بانک آینده',
          path: '/images/colleagues/bank-logo-ayande.svg'
        },
        {
          title: 'بانک خاورمیانه',
          path: '/images/colleagues/bank-logo-khavarmiane.svg'
        },
        {
          title: 'بانک شهر',
          path: '/images/colleagues/bank-logo-shahr.svg'
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
