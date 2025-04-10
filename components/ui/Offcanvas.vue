<template>
  <Transition name="slide">
    <div v-if="show" class="tw:fixed tw:w-screen tw:inset-0 tw:z-40 tw:flex tw:justify-end tw:right-0">
      <div class="tw:absolute tw:inset-0" @click="$emit('close')"></div>
      <div class="tw:relative tw:w-full tw:sm:w-[tw:480px] tw:max-w-full tw:bg-white tw:shadow-xl tw:h-full tw:overflow-y-auto tw:p-6">
        <slot />
      </div>
    </div>
  </Transition>
</template>

<script setup>
defineProps({
  show: Boolean,
});
defineEmits(["close"]);
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}
</style>
