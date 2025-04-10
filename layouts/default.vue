<template>
  <q-layout view="hHh lpR fFf">
    <!-- Header -->
    <q-header elevated class="bg-white text-black">
      <Header />
    </q-header>

    <!-- Sidebar -->
    <q-drawer v-model="drawerOpen" show-if-above side="left" bordered class="bg-white">
      <Sidebar />
    </q-drawer>

    <!-- Main Content -->
    <q-page-container>
      <q-page class="p-4 bg-gray-100 min-h-screen">
        <NuxtPage />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
import Header from "@/components/Header.vue";
import Sidebar from "@/components/Sidebar.vue";

const drawerOpen = ref(true);
</script>
