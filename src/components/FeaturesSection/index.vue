<template>
  <HomeSectionWrapper>
    <h2>ویژگی‌های نئوزرین</h2>
    <div class="flex flex-col items-center gap-y-5">
      <p>
        با ویژگی‌ها و مزیت‌هایی کم‌نظیر نئوزرین، تجربه متفاوت از بانکداری الکترونیک خلق کرده‌ایم
      </p>
      <ul class="grid grid-cols-2 gap-10 mt-10">
        <li>
          <div class="flex gap-x-2 items-center">
            <IconArrowRight />
            <h3>امنیت پرداخت</h3>
          </div>
        </li>
        <li>
          <div class="flex gap-x-2 items-center">
            <IconArrowRight />
            <h3>استفاده آسان</h3>
          </div>
        </li>
        <li>
          <div class="flex gap-x-2 items-center">
            <IconArrowRight />
            <h3>پشتیبانی ۲۴ ساعته</h3>
          </div>
        </li>
        <li>
          <div class="flex gap-x-2 items-center">
            <IconArrowRight />
            <h3>کاهش هزینه‌های مدیریت</h3>
          </div>
        </li>
      </ul>
    </div>
  </HomeSectionWrapper>
</template>

<script>
import IconArrowRight from '@/components/Icons/ArrowRight/index.vue'
import HomeSectionWrapper from '@/components/Home/Section/index.vue'

export default {
  name: 'FeaturesSection',

  components: {
    HomeSectionWrapper,
    IconArrowRight
  }
}
</script>
