<template>
  <div class="q-pa-lg">
    <div class="q-gutter-md">
      <q-pagination v-model="current" max="10" :max-pages="6" direction-links color="black" active-design="tw:red-500" active-color="orange" active-text-color="black" />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      current: ref(3),
    };
  },
};
</script>
