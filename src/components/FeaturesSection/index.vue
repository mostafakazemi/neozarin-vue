<template>
  <section class="text-center flex-col items-center">
    <div>ویژگی‌های نئوزرین</div>
    <div class="flex flex-col items-center">
      <p>
        با ویژگی‌ها و مزیت‌هایی کم‌نظیر نئوزرین، تجربه متفاوت از بانکداری الکترونیک خلق کرده‌ایم
      </p>
      <ul class="grid grid-cols-2">
        <li>
          <div class="flex gap-x-2 items-center">
            <IconArrowRight />
            <span>امنیت پرداخت</span>
          </div>
        </li>
        <li>
          <div class="flex gap-x-2 items-center">
            <IconArrowRight />
            <span>استفاده آسان</span>
          </div>
        </li>
        <li>
          <div class="flex gap-x-2 items-center">
            <IconArrowRight />
            <span>پشتیبانی ۲۴ ساعته</span>
          </div>
        </li>
        <li>
          <div class="flex gap-x-2 items-center">
            <IconArrowRight />
            <span>کاهش هزینه‌های مدیریت</span>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import IconArrowRight from '@/components/Icons/ArrowRight/index.vue'

export default {
  name: 'FeaturesSection',

  components: {
    IconArrowRight
  }
}
</script>
