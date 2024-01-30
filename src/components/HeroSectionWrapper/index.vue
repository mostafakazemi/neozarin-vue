<template>
  <HomeSectionWrapper>
    <h1>
      شعبه بانکداری
      <span class="text-primary">مجازی</span>
      زرین‌پال با نئوزرین
    </h1>
    <p>
      نئوزرین سرویسی امن برای انجام امور مالی است که به تازگی توسط زرین‌پال، اولین پرداخت‌یاز دارای
      مجوز رسمی از بانک مرکزی، عرضه شده است. با نئو بانک زرین، بانکداری الکترونیک و ارائه خدماتی
      منحصر به فرد برای کاربران زرین‌پال به سادگی فراهم شده است.
    </p>
    <TheButton class="gap-x-2">
      دانلود رایگان
      <IconArrowRight class="rotate-180" />
    </TheButton>
    <img src="@/assets/images/1.png" alt="نئوزرین" />
  </HomeSectionWrapper>
</template>

<script>
import TheButton from '@/components/uikit/TheButton/index.vue'
import IconArrowRight from '@/components/Icons/ArrowRight/index.vue'
import HomeSectionWrapper from '@/components/Home/Section/index.vue'

export default {
  name: 'HeroSection',
  components: { HomeSectionWrapper, IconArrowRight, TheButton }
}
</script>
