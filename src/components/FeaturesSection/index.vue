<template>
  <HomeSectionWrapper class="text-center">
    <div class="flex flex-col items-center gap-y-5">
      <h2>ویژگی‌های نئوزرین</h2>
      <div class="flex flex-col items-center gap-y-5">
        <p>
          با ویژگی‌ها و مزیت‌هایی کم‌نظیر نئوزرین، تجربه متفاوت از بانکداری الکترونیک خلق کرده‌ایم
        </p>
        <ul class="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10 w-full">
          <li class="bg-white">
            <div class="flex gap-x-2 items-center">
              <div class="icon-wrapper">
                <IconShieldCheckmark />
              </div>
              <h3>امنیت پرداخت</h3>
            </div>
          </li>
          <li class="bg-white">
            <div class="flex gap-x-2 items-center">
              <div class="icon-wrapper">
                <IconHandCard />
              </div>
              <h3>استفاده آسان</h3>
            </div>
          </li>
          <li class="bg-white">
            <div class="flex gap-x-2 items-center">
              <div class="icon-wrapper">
                <IconSupport24 />
              </div>
              <h3>پشتیبانی ۲۴ ساعته</h3>
            </div>
          </li>
          <li class="bg-white">
            <div class="flex gap-x-2 items-center">
              <div class="icon-wrapper">
                <IconTimeCoins />
              </div>
              <h3>کاهش هزینه‌های مدیریت</h3>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </HomeSectionWrapper>
</template>

<script>
import IconArrow from '@/components/Icons/Arrow/index.vue'
import HomeSectionWrapper from '@/components/Home/Section/index.vue'
import IconShieldCheckmark from '@/components/Icons/ShieldCheckmark/index.vue'
import IconHandCard from '@/components/Icons/HandCard/index.vue'
import IconSupport24 from '@/components/Icons/Support24/index.vue'
import IconTimeCoins from '@/components/Icons/TimeCoins/index.vue'

export default {
  name: 'FeaturesSection',

  components: {
    IconTimeCoins,
    IconSupport24,
    IconHandCard,
    IconShieldCheckmark,
    HomeSectionWrapper,
    IconArrow
  }
}
</script>

<style scoped>
li {
  @apply rounded-xl p-8;

  .icon-wrapper {
    @apply text-2xl bg-cont-dim p-2 rounded-xl;
  }
}
</style>
