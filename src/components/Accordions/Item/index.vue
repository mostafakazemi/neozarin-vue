<template>
  <li class="border w-full bg-white">
    <div @click="toggleExpanded()" class="p-4 w-full flex cursor-pointer items-center">
      <slot name="header" />
      <div class="mr-auto">
        <div :class="{ 'rotate-180': isExpanded }">
          <slot name="handler">
            <IconChevron />
          </slot>
        </div>
      </div>
    </div>
    <div v-if="isExpanded" class="p-4">
      <slot />
    </div>
  </li>
</template>

<script>
import IconChevron from '@/components/Icons/Chevron/index.vue'

export default {
  name: 'AccordionItem',
  components: { IconChevron },

  data: () => ({
    isExpanded: false
  }),

  methods: {
    toggleExpanded(isExpanded = !this.isExpanded) {
      this.isExpanded = isExpanded
    }
  }
}
</script>
