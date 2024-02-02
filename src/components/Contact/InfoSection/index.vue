<template>
  <div>
    <div class="bg-white rounded-xl p-10 flex flex-col gap-y-10 h-full">
      <InfoSectionItem>
        <template #icon><IconEmail /></template>
        <template #title>ایمیل</template>
        neozarin.support@gmail.com
      </InfoSectionItem>
      <InfoSectionItem>
        <template #icon><IconCall /></template>
        <template #title>تلفن</template>
        ۰۲۱-۴۵۶۲۸۴۵۰
      </InfoSectionItem>
      <InfoSectionItem>
        <template #icon><IconTimeProfile /></template>
        <template #title>ساعات کاری</template>
        شنبه تا چهارشنبه از ساعت ۹ صبح الی ۵ بعد از ظهر
      </InfoSectionItem>
      <InfoSectionItem>
        <template #icon><IconMarker /></template>
        <template #title>نشانی</template>
        تهران، یوسف آباد، خیابان بیستم، پلاک 61، طبقه همکف
        <br />
        کد پستی: ۱۴۳۱۹۶۵۳۷۱
      </InfoSectionItem>

      <div class="flex justify-end">
        <button class="text-primary flex items-center gap-2">
          مشاهده روی نقشه
          <IconArrowFilled size="24" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import HomeSectionWrapper from '@/components/Home/Section/index.vue'
import IconCall from '@/components/Icons/Call/index.vue'
import IconEmail from '@/components/Icons/Email/index.vue'
import InfoSectionItem from '@/components/Contact/InfoSection/Item/index.vue'
import IconTimeProfile from '@/components/Icons/TimeProfile/index.vue'
import IconMarker from '@/components/Icons/Marker/index.vue'
import IconArrowFilled from '@/components/Icons/ArrowFilled/index.vue'

export default {
  name: 'ContactInfoSection',
  components: {
    IconArrowFilled,
    IconMarker,
    IconTimeProfile,
    InfoSectionItem,
    IconEmail,
    IconCall,
    HomeSectionWrapper
  }
}
</script>
