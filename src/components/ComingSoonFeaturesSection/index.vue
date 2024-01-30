<template>
  <HomeSectionWrapper>
    <h2>هر روز بهتر از دیروز</h2>
    <p>با امکاناتی که در آینده خواهیم داشت آشنا شوید</p>
    <Accordions class="w-full gap-y-6">
      <AccordionItem class="bg-white">
        <template #header>
          <IconCard />
          <h3 class="mr-2">دریافت کارت بانکی</h3>
        </template>
        <p>
          صدور زرین‌کارت با تمام ویژگی‌های کارت بانکی که به یک حساب بانکی (زرین‌حساب) متصل است یکی
          دیگر از خدمات نئو زرین خواهد بود.
        </p>
      </AccordionItem>
      <AccordionItem class="bg-white">
        <template #header>
          <IconWalletCoins />
          <h3 class="mr-2">دریافت کارت بانکی</h3>
        </template>
        <p>
          صدور زرین‌کارت با تمام ویژگی‌های کارت بانکی که به یک حساب بانکی (زرین‌حساب) متصل است یکی
          دیگر از خدمات نئو زرین خواهد بود.
        </p>
      </AccordionItem>
    </Accordions>
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
