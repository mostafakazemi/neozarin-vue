<template>
  <header class="flex border-b">
    <div class="mx-auto w-full max-w-screen-xl py-3 px-4 flex justify-between">
      <div class="flex gap-x-2">
        <span>logo</span>
        <span class="font-black text-lg">نئوزرین</span>
      </div>
      <div class="flex gap-x-2">
        <button class="font-bold">راه‌های ارتباطی</button>
        <TheButton>دانلود نئوزرین</TheButton>
      </div>
    </div>
  </header>
</template>

<script>
import TheButton from '@/components/uikit/TheButton/index.vue'

export default {
  name: 'TheFooter',
  components: { TheButton }
}
</script>

<style scoped>
header {
}
</style>
