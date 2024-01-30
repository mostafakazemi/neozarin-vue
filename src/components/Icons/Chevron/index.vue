<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      id="Vector"
      d="M18 9.0625L12 15.0625L6 9.0625"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
<script>
export default {
  name: 'IconChevron',

  props: {
    size: {
      type: [Number, String],
      default: '1em'
    }
  }
}
</script>
