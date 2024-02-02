<template>
  <HomeSectionWrapper>
    <div class="flex flex-col md:flex-row md:justify-between bg-white rounded-xl">
      <div class="flex flex-col items-center gap-y-6 p-10 md:items-start">
        <h2>به خانواده‌ی نئو زرین بپیوندید</h2>
        <p>با دانلود اپلیکیشن نئوزرین از خدمات متنوع ما بهره‌مند شوید</p>
        <TheButton size="lg" class="mt-4">
          <router-link :to="{ name: 'download' }"> دانلود اپلیکیشن </router-link>
        </TheButton>
      </div>
      <div class="flex justify-center">
        <img src="@/assets/images/phone-in-hand.png" alt="دانلود اپلیکیشن" />
      </div>
    </div>
  </HomeSectionWrapper>
</template>

<script>
import HomeSectionWrapper from '@/components/Home/Section/index.vue'
import TheButton from '@/components/uikit/TheButton/index.vue'

export default {
  name: 'DownloadSection',

  components: { TheButton, HomeSectionWrapper }
}
</script>
