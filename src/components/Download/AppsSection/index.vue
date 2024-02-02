<template>
  <HomeSectionWrapper>
    <div
      class="flex gap-10 bg-white rounded-xl p-10 flex-col items-center md:flex-row md:justify-between"
    >
      <div class="text-center md:text-right flex flex-col gap-y-5">
        <span>دانلود از طریق</span>
        <div class="flex flex-wrap gap-2">
          <button>
            <img src="@/assets/images/myket.svg" alt="مایکت" />
          </button>
          <button>
            <img src="@/assets/images/google-play.svg" alt="گوگل پلی" />
          </button>
          <button>
            <img src="@/assets/images/app-store.svg" alt="اپ استور" />
          </button>
        </div>
        <p>یا از طریق شماره همراه خود لینک دانلود مستقیم را دریافت کنید</p>
      </div>
      <div>
        <img src="@/assets/images/phones-group.svg" alt="دانلود اپلیکیشن" />
      </div>
    </div>
  </HomeSectionWrapper>
</template>

<script>
import HomeSectionWrapper from '@/components/Home/Section/index.vue'

export default {
  name: 'AppsSection',

  components: {
    HomeSectionWrapper
  }
}
</script>
