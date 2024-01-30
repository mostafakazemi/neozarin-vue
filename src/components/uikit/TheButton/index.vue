<template>
  <button class="flex items-center" :class="[variant]">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'TheButton',

  props: {
    variant: {
      type: String,
      default: 'primary'
    }
  }
}
</script>

<style scoped>
button {
  @apply font-bold py-2 px-4 rounded-full;

  &.primary {
    background-color: var(--color-primary);
    color: var(--vt-c-white);
  }

  &.white {
    background-color: var(--vt-c-white);
  }
}
</style>
