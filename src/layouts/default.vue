<template>
  <div>
    <TheHeader />
    <main>
      <router-view></router-view>
    </main>
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader/index.vue'
import TheFooter from '@/components/TheHeader/index.vue'

export default {
  name: 'DefaultLayout',
  components: { TheFooter, TheHeader }
}
</script>
