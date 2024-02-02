<template>
  <header class="flex border-b">
    <div class="mx-auto w-full max-w-screen-2xl py-3 px-4 flex justify-between">
      <router-link :to="{ name: 'home' }">
        <img src="@/assets/images/neozarin_logo.svg" alt="نئوزرین" />
      </router-link>
      <div class="flex gap-x-5">
        <button
          v-if="!isInContactPage"
          class="font-bold"
          :class="{ 'hidden lg:block': !isInDownloadPage }"
        >
          <router-link
            :to="{ name: 'contact' }"
            class="font-bold"
            :class="{ 'hidden lg:block': !isInDownloadPage }"
          >
            راه‌های ارتباطی
          </router-link>
        </button>
        <TheButton v-if="!isInDownloadPage">
          <router-link :to="{ name: 'download' }"> دانلود نئوزرین </router-link>
        </TheButton>
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
    },
    isInContactPage() {
      return this.$route.name === 'contact'
    }
  }
}
</script>

<style scoped>
header {
}
</style>
