<template>
  <button :class="buttonClasses" :disabled="disabled">
    <slot />
  </button>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  variant: {
    type: String,
    default: "default", // options: default, outline, ghost
  },
  size: {
    type: String,
    default: "md", // options: sm, md, lg
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

const buttonClasses = computed(() => {
  const base = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    default: "tw:bg-black tw:text-white tw:hover:bg-gray-900",
    outline: "tw:border-2 tw:border-yellow-300 tw:text-gray-900 tw:hover:bg-gray-100",
    ghost: "tw:text-gray-700 tw:hover:bg-gray-100",
  };

  const sizes = {
    sm: "tw:h-8 tw:px-3 tw:text-sm",
    md: "tw:h-10 tw:px-4 tw:text-sm",
    lg: "tw:h-12 tw:px-6 tw:text-base",
  };

  return `${base} ${variants[props.variant] || variants.default} ${sizes[props.size] || sizes.md}`;
});
</script>
