<template>
  <HomeSectionWrapper>
    <div class="bg-white rounded-xl p-10 flex flex-col gap-y-10">
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
    </div>
  </HomeSectionWrapper>
</template>

<script>
import HomeSectionWrapper from '@/components/Home/Section/index.vue'
import IconCall from '@/components/Icons/Call/index.vue'
import IconEmail from '@/components/Icons/Email/index.vue'
import InfoSectionItem from '@/components/Contact/InfoSection/Item/index.vue'
import IconTimeProfile from '@/components/Icons/TimeProfile/index.vue'
import IconMarker from '@/components/Icons/Marker/index.vue'

export default {
  name: 'ContactInfoSection',
  components: {
    IconMarker,
    IconTimeProfile,
    InfoSectionItem,
    IconEmail,
    IconCall,
    HomeSectionWrapper
  }
}
</script>
