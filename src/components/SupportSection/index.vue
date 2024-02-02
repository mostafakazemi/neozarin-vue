<template>
  <HomeSectionWrapper>
    <div class="text-center md:text-right">
      <div
        class="flex flex-col w-full items-center md:flex-row md:justify-between gap-y-6 bg-cont-dim rounded-xl p-8"
      >
        <div class="flex flex-col gap-y-6 md:items-start">
          <h2>پشتیبانی ۲۴ ساعته، ۷ روز هفته</h2>
          <p>
            <span>شماره تماس:</span>
            <span class="mr-2">
              <span>۴۱۲۳۹</span>
              <span>-</span>
              <span>۰۲۱</span>
            </span>
          </p>
        </div>
        <div>
          <TheButton size="lg" variant="white" class="gap-x-2">
            درخواست پشتیبانی
            <IconArrow />
          </TheButton>
        </div>
      </div>
    </div>
  </HomeSectionWrapper>
</template>

<script>
import HomeSectionWrapper from '@/components/Home/Section/index.vue'
import TheButton from '@/components/uikit/TheButton/index.vue'
import IconArrow from '@/components/Icons/Arrow/index.vue'

export default {
  name: 'SupportSection',

  components: { IconArrow, TheButton, HomeSectionWrapper }
}
</script>
