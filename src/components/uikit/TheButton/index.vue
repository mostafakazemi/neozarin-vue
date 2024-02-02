<template>
  <button class="flex items-center" :class="[variant, size]">
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
    },
    size: {
      type: String,
      default: 'md',
      validator(value) {
        return ['lg', 'md', 'sm'].includes(value)
      }
    }
  }
}
</script>

<style scoped>
button {
  @apply rounded-full;

  &.lg {
    @apply h-16 px-10;
  }

  &.md {
    @apply py-2 px-4;
  }

  &.primary {
    background-color: var(--color-primary);
    color: var(--vt-c-white);
  }

  &.white {
    background-color: var(--vt-c-white);
  }
}
</style>
