<template>
  <section class="text-center flex flex-col gap-y-5">
    <h2 class="font-black text-2xl">چرا نئوزرین؟</h2>
    <h3>هر آنچه شما لازم دارید در نئوزرین گرد هم آورده‌ایم</h3>
    <div class="py-10">
      <swiper
        dir="rtl"
        :slides-per-view="2.2"
        :space-between="25"
        pagination
        :modules="modules"
        loop
        :autoplay="{
          delay: 2500
        }"
        centered-slides
      >
        <swiper-slide>
          <WhyNeozarinSectionItem />
        </swiper-slide>
        <swiper-slide>
          <WhyNeozarinSectionItem />
        </swiper-slide>
        <swiper-slide>
          <WhyNeozarinSectionItem />
        </swiper-slide>
        <swiper-slide>
          <WhyNeozarinSectionItem />
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'
import WhyNeozarinSectionItem from '@/components/WhyNeozarinSection/Item/index.vue'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { Pagination, Autoplay } from 'swiper/modules'

export default {
  name: 'WhyNeozarinSection',

  components: {
    WhyNeozarinSectionItem,
    Swiper,
    SwiperSlide
  },

  setup() {
    return {
      modules: [Pagination, Autoplay]
    }
  }
}
</script>
