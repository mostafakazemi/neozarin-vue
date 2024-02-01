<template>
  <HomeSectionWrapper>
    <div class="flex flex-col items-center gap-y-5">
      <h2 class="text-center">سوالات متداول</h2>
      <p class="text-center">پرتکرارترین سوالاتی که از ما پرسیده می‌شود</p>
      <Accordions class="gap-y-2">
        <AccordionItem>
          <template #header>
            <h3>در چه بانکهایی میشه حساب باز کرد؟</h3>
          </template>
          <p>
            در حال حاضر فقط بانک اینده .ولی به زودی امکان افتتاح حساب بانک ایران زمین و چند بانک
            دیگه هم فراهم خواهد شد.
          </p>
        </AccordionItem>
        <AccordionItem>
          <template #header>
            <h3>برای افتتاح حساب چه مدارکی لازم است؟</h3>
          </template>
          <p>
            در حال حاضر فقط بانک اینده .ولی به زودی امکان افتتاح حساب بانک ایران زمین و چند بانک
            دیگه هم فراهم خواهد شد.
          </p>
        </AccordionItem>
        <AccordionItem>
          <template #header>
            <h3>دریافت کارت بانکی به چه شکل هست؟</h3>
          </template>
          <p>
            در حال حاضر فقط بانک اینده .ولی به زودی امکان افتتاح حساب بانک ایران زمین و چند بانک
            دیگه هم فراهم خواهد شد.
          </p>
        </AccordionItem>
        <AccordionItem>
          <template #header>
            <h3>چگونه با پشتیبانی زرین‌پال تماس بگیرم؟</h3>
          </template>
          <p>
            در حال حاضر فقط بانک اینده .ولی به زودی امکان افتتاح حساب بانک ایران زمین و چند بانک
            دیگه هم فراهم خواهد شد.
          </p>
        </AccordionItem>
        <AccordionItem>
          <template #header>
            <h3>ایا امکان استفاده به صورت وب سرویس هم هست؟</h3>
          </template>
          <p>
            در حال حاضر فقط بانک اینده .ولی به زودی امکان افتتاح حساب بانک ایران زمین و چند بانک
            دیگه هم فراهم خواهد شد.
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

export default {
  name: 'FaqSection',

  components: {
    HomeSectionWrapper,
    Accordions,
    AccordionItem
  }
}
</script>
