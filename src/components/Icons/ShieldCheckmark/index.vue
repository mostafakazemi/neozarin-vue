<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.6667 20L19.1667 22.5L24.1667 17.5"
      stroke="currentColor"
      stroke-width="2.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M5.83333 17.945C5.83334 25.3209 10.412 31.9219 17.3205 34.5059L17.3706 34.5247C19.0664 35.159 20.9345 35.1584 22.63 34.523L22.6706 34.5078C29.5853 31.9164 34.1667 25.307 34.1667 17.9227V11.7171C34.1667 10.2589 33.2189 8.97003 31.8271 8.5353L20.9938 5.15159C20.3467 4.94947 19.6533 4.94947 19.0062 5.15159L8.1729 8.5352C6.78107 8.96992 5.83333 10.2588 5.83333 11.717V17.945Z"
      stroke="currentColor"
      stroke-width="2.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
<script>
export default {
  name: 'IconSupport24',

  props: {
    size: {
      type: [Number, String],
      default: '1em'
    }
  }
}
</script>
