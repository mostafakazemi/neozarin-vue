<template>
  <li class="flex flex-col items-center gap-y-5 text-center p-10">
    <img v-if="logoSrc" :src="logoSrc" :alt="title" />
    <h3>{{ title }}</h3>
  </li>
</template>

<script>
export default {
  name: 'ColleaguesSectionItem',

  props: {
    title: {
      type: String,
      default: ''
    },
    logoSrc: {
      type: String,
      default: null
    }
  }
}
</script>
