<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 15L6 17V14H5C3.895 14 3 13.105 3 12V6C3 4.895 3.895 4 5 4H14C15.105 4 16 4.895 16 6V8"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12.4304 12.9646C12.4499 12.9842 12.4499 13.0158 12.4304 13.0354C12.4108 13.0549 12.3792 13.0549 12.3597 13.0354C12.3401 13.0158 12.3401 12.9842 12.3597 12.9646C12.3792 12.9451 12.4108 12.9451 12.4304 12.9646"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M15.0354 12.9646C15.0549 12.9842 15.0549 13.0158 15.0354 13.0354C15.0158 13.0549 14.9842 13.0549 14.9646 13.0354C14.9451 13.0158 14.9451 12.9842 14.9646 12.9646C14.9842 12.9451 15.0158 12.9451 15.0354 12.9646"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M17.6403 12.9646C17.6599 12.9842 17.6599 13.0158 17.6403 13.0354C17.6208 13.0549 17.5892 13.0549 17.5696 13.0354C17.5501 13.0158 17.5501 12.9842 17.5696 12.9646C17.5892 12.9451 17.6208 12.9451 17.6403 12.9646"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
<script>
export default {
  name: 'IconTicket',

  props: {
    size: {
      type: [Number, String],
      default: '1em'
    }
  }
}
</script>
