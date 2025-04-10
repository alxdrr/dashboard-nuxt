<template>
  <div class="tw:flex tw:h-screen">
    <!-- Sidebar (fixed width) -->
    <Sidebar />

    <!-- Main Content -->
    <div class="tw:flex-1 tw:ml-64 tw:flex tw:flex-col">
      <!-- Header (fixed) -->
      <Header />

      <!-- Dynamic Page Content -->
      <main class="tw:flex-1 tw:overflow-auto tw:p-6 tw:bg-gray-100 tw:mt-16">
        <NuxtPage />
      </main>
    </div>
  </div>
</template>

<script setup>
import Sidebar from "@/components/Sidebar.vue";
import Header from "@/components/Header.vue";
</script>
