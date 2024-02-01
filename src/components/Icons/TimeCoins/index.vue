<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M36.6736 28.3368V23.3347C36.6736 21.952 33.8724 20.8337 30.421 20.8337C26.9696 20.8337 24.1702 21.9538 24.1684 23.3347V33.3389C24.1702 34.7198 26.9678 35.8399 30.421 35.8399C33.8742 35.8399 36.6718 34.7198 36.6736 33.3389V23.3347"
      stroke="currentColor"
      stroke-width="2.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12.7136 23.1113L18.8095 19.3948V11.6399"
      stroke="currentColor"
      stroke-width="2.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M32.9542 14.9979C31.2069 7.34389 23.8538 2.33155 16.0907 3.50263C8.32758 4.67371 2.7803 11.6321 3.36858 19.461C3.95686 27.2898 10.4817 33.3411 18.3326 33.3389"
      stroke="currentColor"
      stroke-width="2.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M24.1702 23.3347C24.1702 24.7156 26.9696 25.8358 30.4228 25.8358C33.876 25.8358 36.6736 24.7156 36.6736 23.3347"
      stroke="currentColor"
      stroke-width="2.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M24.1702 28.3368C24.1702 29.7177 26.9696 30.8378 30.4228 30.8378C33.876 30.8378 36.6754 29.7177 36.6754 28.3368"
      stroke="currentColor"
      stroke-width="2.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
<script>
export default {
  name: 'IconTimeCoins',

  props: {
    size: {
      type: [Number, String],
      default: '1em'
    }
  }
}
</script>
