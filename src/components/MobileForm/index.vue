<template>
  <form @submit.prevent>
    <div class="relative bg-white border rounded-full flex">
      <input
        type="tel"
        dir="rtl"
        name="mobile"
        placeholder="شماره همراه"
        class="flex-grow rounded-r-full pr-4"
      />
      <TheButton class="m-1" type="submit">دریافت لینک</TheButton>
    </div>
  </form>
</template>

<script>
import TheButton from '@/components/uikit/TheButton/index.vue'

export default {
  name: 'MobileForm',

  components: { TheButton }
}
</script>
