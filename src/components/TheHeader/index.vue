<template>
  <header class="flex border-b">
    <div class="mx-auto w-full max-w-screen-2xl py-3 px-4 flex justify-between">
      <div>
        <img src="@/assets/images/neozarin_logo.svg" alt="نئوزرین" />
      </div>
      <div class="flex gap-x-5">
        <button class="font-bold" :class="{ 'hidden lg:block': !isInDownloadPage }">
          راه‌های ارتباطی
        </button>
        <TheButton v-if="!isInDownloadPage">دانلود نئوزرین</TheButton>
      </div>
    </div>
  </header>
</template>

<script>
import TheButton from '@/components/uikit/TheButton/index.vue'

export default {
  name: 'TheFooter',

  components: { TheButton },

  computed: {
    isInDownloadPage() {
      return this.$route.name === 'download'
    }
  }
}
</script>

<style scoped>
header {
}
</style>
