<template>
  <div class="flex gap-5">
    <div>
      <div class="text-2xl bg-cont-dim p-2 rounded-xl">
        <slot name="icon" />
      </div>
    </div>
    <div>
      <h2>
        <slot name="title" />
      </h2>
      <p class="mt-5">
        <slot />
      </p>
    </div>
  </div>
</template>

<script>
import IconEmail from '@/components/Icons/Email/index.vue'

export default {
  name: 'InfoSectionItem'
}
</script>
