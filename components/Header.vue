<script setup>
import { Bell, MessageSquare, Menu } from "lucide-vue-next";
import avatar from "../assets/avatar.png";
</script>
<template>
  <header class="tw:h-16 tw:bg-white tw:flex tw:justify-between tw:items-center tw:px-6 tw:fixed tw:left-64 tw:right-0 tw:top-0 tw:z-10">
    <Menu />
    <div class="tw:flex tw:items-center tw:gap-4">
      <Bell />
      <MessageSquare />
      <img :src="avatar" alt="" class="tw:rounded-full tw:h-10" />
    </div>
  </header>
</template>
