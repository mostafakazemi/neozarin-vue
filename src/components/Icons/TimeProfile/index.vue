<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.053 7.77124V12.2271L15.5555 14.362"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M4.20676 8.74364C5.58383 4.85004 9.53017 2.4813 13.6139 3.09711C17.6977 3.71291 20.7701 7.14002 20.9378 11.2666C21.1055 15.3931 18.3213 19.0582 14.301 20.0033"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M9.99916 21.0037H3.49645C3.2202 21.0037 2.99625 20.7798 2.99625 20.5035V20.0974C2.99954 18.9418 3.93552 18.0058 5.09112 18.0025H8.4045C9.5601 18.0058 10.4961 18.9418 10.4994 20.0974V20.5035C10.4994 20.7798 10.2754 21.0037 9.99916 21.0037Z"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M6.7478 15.5015C5.64381 15.5015 4.74845 14.6073 4.74698 13.5033C4.74552 12.3993 5.6385 11.5027 6.74248 11.4998C7.84647 11.4969 8.74422 12.3886 8.74865 13.4926C8.75076 14.0247 8.5409 14.5356 8.16544 14.9126C7.78998 15.2896 7.27984 15.5015 6.7478 15.5015Z"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
<script>
export default {
  name: 'IconTimeProfile',

  props: {
    size: {
      type: [Number, String],
      default: '1em'
    }
  }
}
</script>
