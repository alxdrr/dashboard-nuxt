<template>
  <div class="tw:bg-white tw:relative tw:rounded-xl tw:p-4 tw:md:p-6 tw:border tw:border-gray-100">
    <div v-if="title || icon" class="tw:flex tw:items-center tw:justify-between tw:mb-4">
      <h3 class="tw:text-xl tw:font-semibold tw:text-gray-700">{{ title }}</h3>
      <slot name="icon"> </slot>
    </div>
    <div>
      <slot />
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: "",
  },
});
</script>
