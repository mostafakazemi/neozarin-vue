<template>
  <HomeSectionWrapper class="text-center">
    <h1>
      شعبه بانکداری
      <span class="text-primary">مجازی</span>
      زرین‌پال با نئوزرین
    </h1>
    <p class="mt-5 mb-10">
      نئوزرین سرویسی امن برای انجام امور مالی است که به تازگی توسط زرین‌پال، اولین پرداخت‌یاز دارای
      مجوز رسمی از بانک مرکزی، عرضه شده است. با نئو بانک زرین، بانکداری الکترونیک و ارائه خدماتی
      منحصر به فرد برای کاربران زرین‌پال به سادگی فراهم شده است.
    </p>
    <div class="flex justify-center">
      <TheButton class="gap-x-2" size="lg">
        دانلود رایگان
        <IconArrow />
      </TheButton>
    </div>
    <div class="mt-16 flex justify-center">
      <img src="@/assets/images/hero-image.svg" alt="نئوزرین" />
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
