<template>
  <TheHeader />
  <main class="flex-grow flex flex-col items-center pt-32">
    <div class="w-full">
      <router-view></router-view>
    </div>
  </main>
  <TheFooter />
</template>

<script>
import TheHeader from '@/components/TheHeader/index.vue'
import TheFooter from '@/components/TheFooter/index.vue'

export default {
  name: 'DefaultLayout',
  components: { TheFooter, TheHeader }
}
</script>

<style scoped>
main {
  background-color: var(--color-cont-dim);
}
</style>
