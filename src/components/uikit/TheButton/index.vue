<template>
  <button :type="type" class="flex items-center" :class="[variant, size]">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'TheButton',

  props: {
    type: {
      type: String,
      default: 'button',
      validator(value) {
        return ['button', 'submit', 'reset'].includes(value)
      }
    },
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
    @apply bg-primary text-white;
  }

  &.white {
    @apply bg-white;
  }
}
</style>
