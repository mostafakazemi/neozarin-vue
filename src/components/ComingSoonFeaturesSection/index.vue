<template>
  <HomeSectionWrapper>
    <div class="flex flex-col items-center gap-y-5">
      <h2 class="text-center">هر روز بهتر از دیروز</h2>
      <p class="text-center">با امکاناتی که در آینده خواهیم داشت آشنا شوید</p>
      <Accordions class="gap-y-6">
        <AccordionItem>
          <template #header>
            <div class="icon-wrapper">
              <IconCard />
            </div>
            <h3 class="mr-2">دریافت کارت بانکی</h3>
          </template>
          <p>
            صدور زرین‌کارت با تمام ویژگی‌های کارت بانکی که به یک حساب بانکی (زرین‌حساب) متصل است یکی
            دیگر از خدمات نئو زرین خواهد بود.
          </p>
        </AccordionItem>
        <AccordionItem>
          <template #header>
            <div class="icon-wrapper">
              <IconWalletCoins />
            </div>
            <h3 class="mr-2">افتتاح حساب آنلاین</h3>
          </template>
          <p>
            نئوزرین در تلاش است با فراهم کردن امکان افتتاح حساب در بانک های طرف قرارداد خود تجربه ای
            راحت و آسان را برای شما ممکن سازد.
          </p>
        </AccordionItem>
      </Accordions>
    </div>
  </HomeSectionWrapper>
</template>

<script>
import HomeSectionWrapper from '@/components/Home/Section/index.vue'
import Accordions from '@/components/Accordions/index.vue'
import AccordionItem from '@/components/Accordions/Item/index.vue'
import IconCard from '@/components/Icons/Card/index.vue'
import IconChevron from '@/components/Icons/Chevron/index.vue'
import IconWalletCoins from '@/components/Icons/WalletCoins/index.vue'

export default {
  name: 'ComingSoonFeaturesSection',

  components: {
    IconWalletCoins,
    IconChevron,
    HomeSectionWrapper,
    Accordions,
    AccordionItem,
    IconCard
  }
}
</script>

<style scoped>
.icon-wrapper {
  @apply text-2xl bg-cont-dim p-2 rounded-xl;
}
</style>
