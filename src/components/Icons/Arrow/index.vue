<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      id="Path"
      d="M4.00977 11.98H18.9998"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      id="Path_2"
      d="M10.013 5.98804L4.00195 12L10.013 18.012"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
<script>
export default {
  name: 'IconArrow',

  props: {
    size: {
      type: [Number, String],
      default: '1em'
    }
  }
}
</script>
