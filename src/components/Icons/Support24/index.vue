<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.7217 17.8767C12.7217 16.52 13.8217 15.42 15.1783 15.42C16.535 15.42 17.635 16.52 17.635 17.8767C17.635 20.9467 12.7217 20.9467 12.7217 24.5833H17.635"
      stroke="currentColor"
      stroke-width="2.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M25.8867 24.5833C25.8867 24.5833 25.8867 23.1267 25.8867 22.4917H27.2783H25.8867H21.9467C21.24 22.4917 20.795 21.7317 21.15 21.12C22.135 19.425 23.275 17.5067 24.32 15.8167C24.7683 15.09 25.8867 15.4167 25.8867 16.27V22.4917"
      stroke="currentColor"
      stroke-width="2.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M34.04 8.005V12.8267H29.2183H34.04"
      stroke="currentColor"
      stroke-width="2.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M33.175 12.8267C30.6317 8.165 25.6867 5 20 5C11.715 5 5 11.7167 5 20C5 28.2833 11.715 35 20 35C28.285 35 35 28.2833 35 20"
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
