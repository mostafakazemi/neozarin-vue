<template>
  <div
    class="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-10 p-10 items-center bg-white rounded-xl"
  >
    <div class="col-span-1 md:col-span-2 lg:col-span-1">
      <slot name="image" />
    </div>
    <div
      class="col-span-1 md:col-span-3 lg:col-span-2 lg:col-span-2 flex flex-col gap-10 text-center md:text-right"
    >
      <h3><slot name="title" /></h3>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'WhyNeozarinSectionItem'
}
</script>
