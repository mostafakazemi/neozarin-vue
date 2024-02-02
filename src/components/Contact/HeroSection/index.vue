<template>
  <HomeSectionWrapper class="text-center">
    <div class="flex flex-col items-center gap-y-5">
      <h1>
        راه‌های
        <span class="text-primary">ارتباطی</span>
        با نئوزرین
      </h1>
      <p class="mb-5">
        اگر در بخش‌های مختلف نئوزرین سوالی دارید
        <br />
        لطفا قبل از ارسال پیام یا تماس با پشتیبانی، ابتدا پرسش‌های متداول را بخوانید
      </p>
      <button class="flex items-center gap-x-2 text-primary font-bold">
        مشاهده پرسش های متداول
        <IconArrow size="24" />
      </button>
    </div>
  </HomeSectionWrapper>
</template>

<script>
import HomeSectionWrapper from '@/components/Home/Section/index.vue'
import IconArrow from '@/components/Icons/Arrow/index.vue'

export default {
  name: 'ContactHeroSection',
  components: { IconArrow, HomeSectionWrapper }
}
</script>
