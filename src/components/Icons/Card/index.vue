<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 40 41"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      id="Path"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M28.3367 30.0667V20.0625C28.337 19.178 27.9857 18.3297 27.3603 17.7042C26.7348 17.0788 25.8865 16.7275 25.002 16.7278H8.32837C7.44388 16.7275 6.59554 17.0788 5.9701 17.7042C5.34467 18.3297 4.99341 19.178 4.99365 20.0625V30.0667C4.99341 30.9512 5.34467 31.7995 5.9701 32.4249C6.59554 33.0504 7.44388 33.4016 8.32837 33.4014H25.002C26.8437 33.4014 28.3367 31.9084 28.3367 30.0667Z"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      id="Path_2"
      d="M4.99365 23.5289H28.3367"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      id="Path_3"
      d="M10.3291 16.7278L12.3466 9.1913C12.5755 8.33717 13.1349 7.60925 13.9013 7.16817C14.6677 6.7271 15.5781 6.60913 16.4316 6.84032L32.5384 11.1588C33.3925 11.3877 34.1204 11.9471 34.5615 12.7135C35.0026 13.4799 35.1205 14.3903 34.8893 15.2438L32.3049 24.8978C31.845 26.6353 30.0866 27.6919 28.3366 27.2822"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
<script>
export default {
  name: 'IconCard',

  props: {
    size: {
      type: [Number, String],
      default: '1em'
    }
  }
}
</script>
