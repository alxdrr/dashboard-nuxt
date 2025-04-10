<template>
  <q-layout view="lHh Lpr lFf">
    <!-- Sidebar (Tetap Full Height) -->
    <q-drawer v-model="drawerOpen" show-if-above side="left" bordered class="bg-white">
      <Sidebar />
    </q-drawer>

    <!-- Main Content -->
    <q-page-container>
      <q-page class="p-4 bg-gray-100 min-h-screen">
        <!-- Header hanya di konten -->
        <Header />

        <!-- Halaman dinamis -->
        <NuxtPage />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import Sidebar from "@/components/Sidebar.vue";
import Header from "@/components/Header.vue";

const drawerOpen = ref(true);
</script>
