<template>
  <div>
    <HomeSectionWrapper class="text-center">
      <div class="flex flex-col items-center gap-y-5">
        <h2>چرا نئوزرین؟</h2>
        <p>هر آنچه شما لازم دارید در نئوزرین گرد هم آورده‌ایم</p>
      </div>
    </HomeSectionWrapper>
    <div class="pt-12 w-full">
      <swiper
        dir="rtl"
        :slides-per-view="2.000001"
        :space-between="24"
        pagination
        :modules="modules"
        loop
        :autoplay="{
          delay: 2500
        }"
        centered-slides
      >
        <swiper-slide>
          <WhyNeozarinSectionItem title="واریز وجه با شناسه پرداخت">
            <template #image>
              <img
                src="@/assets/images/carousel/carousel-image-1.svg"
                alt="واریز وجه با شناسه پرداخت"
              />
            </template>
            <template #title>واریز وجه با شناسه پرداخت</template>
            <p>
              شناسه پرداخت کدی منحصر به فرد است که امکان دسته‌بندی، رهگیری و مدیریت آسان انتقالات را
              برای شما فراهم میسازد. پس از انجام هر تراکنش با شناسه پرداخت، مبلغ واریزی در عرض یک
              دقیق با حساب متصل شده‌ی شما تسویه خواهد شد.
            </p>
          </WhyNeozarinSectionItem>
        </swiper-slide>
        <swiper-slide>
          <WhyNeozarinSectionItem title="واریز وجه با شناسه پرداخت">
            <template #image>
              <img
                src="@/assets/images/carousel/carousel-image-2.svg"
                alt="واریز وجه با شناسه پرداخت"
              />
            </template>
            <template #title>واریز وجه با شناسه پرداخت</template>
            <p>
              شناسه پرداخت کدی منحصر به فرد است که امکان دسته‌بندی، رهگیری و مدیریت آسان انتقالات را
              برای شما فراهم میسازد. پس از انجام هر تراکنش با شناسه پرداخت، مبلغ واریزی در عرض یک
              دقیق با حساب متصل شده‌ی شما تسویه خواهد شد.
            </p>
          </WhyNeozarinSectionItem>
        </swiper-slide>
        <swiper-slide>
          <WhyNeozarinSectionItem title="واریز وجه با شناسه پرداخت">
            <template #image>
              <img
                src="@/assets/images/carousel/carousel-image-3.svg"
                alt="واریز وجه با شناسه پرداخت"
              />
            </template>
            <template #title>واریز وجه با شناسه پرداخت</template>
            <p>
              شناسه پرداخت کدی منحصر به فرد است که امکان دسته‌بندی، رهگیری و مدیریت آسان انتقالات را
              برای شما فراهم میسازد. پس از انجام هر تراکنش با شناسه پرداخت، مبلغ واریزی در عرض یک
              دقیق با حساب متصل شده‌ی شما تسویه خواهد شد.
            </p>
          </WhyNeozarinSectionItem>
        </swiper-slide>
        <swiper-slide>
          <WhyNeozarinSectionItem title="واریز وجه با شناسه پرداخت">
            <template #image>
              <img
                src="@/assets/images/carousel/carousel-image-2.svg"
                alt="واریز وجه با شناسه پرداخت"
              />
            </template>
            <template #title>واریز وجه با شناسه پرداخت</template>
            <p>
              شناسه پرداخت کدی منحصر به فرد است که امکان دسته‌بندی، رهگیری و مدیریت آسان انتقالات را
              برای شما فراهم میسازد. پس از انجام هر تراکنش با شناسه پرداخت، مبلغ واریزی در عرض یک
              دقیق با حساب متصل شده‌ی شما تسویه خواهد شد.
            </p>
          </WhyNeozarinSectionItem>
        </swiper-slide>
      </swiper>
    </div>
  </div>
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
import HomeSectionWrapper from '@/components/Home/Section/index.vue'

export default {
  name: 'WhyNeozarinSection',

  components: {
    HomeSectionWrapper,
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
