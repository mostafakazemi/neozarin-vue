<template>
  <HomeSectionWrapper class="text-center">
    <div class="flex flex-col items-center gap-y-5">
      <h1>
        شعبه بانکداری
        <span class="text-primary">مجازی</span>
        زرین‌پال با نئوزرین
      </h1>
      <p class="mb-5">
        نئوزرین سرویسی امن برای انجام امور مالی است که به تازگی توسط زرین‌پال، اولین پرداخت‌یاز
        دارای مجوز رسمی از بانک مرکزی، عرضه شده است. با نئو بانک زرین، بانکداری الکترونیک و ارائه
        خدماتی منحصر به فرد برای کاربران زرین‌پال به سادگی فراهم شده است.
      </p>
      <div class="flex justify-center">
        <TheButton class="gap-x-2" size="lg">
          <router-link :to="{ name: 'download' }"> دانلود رایگان </router-link>
          <IconArrow size="24" />
        </TheButton>
      </div>
      <div class="mt-16 flex justify-center">
        <img src="@/assets/images/hero-image.svg" alt="نئوزرین" />
      </div>
    </div>
  </HomeSectionWrapper>
</template>

<script>
import TheButton from '@/components/uikit/TheButton/index.vue'
import IconArrow from '@/components/Icons/Arrow/index.vue'
import HomeSectionWrapper from '@/components/Home/Section/index.vue'

export default {
  name: 'HeroSection',
  components: { HomeSectionWrapper, IconArrow, TheButton }
}
</script>
