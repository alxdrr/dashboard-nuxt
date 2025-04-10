<template>
  <aside class="tw:w-64 tw:bg-white tw:h-screen tw:fixed tw:flex tw:flex-col tw:gap-6 tw:left-0 tw:top-0 tw:p-6 tw:z-20">
    <div class="tw:flex tw:flex-col tw:justify-center tw:items-center">
      <div class="tw:flex tw:justify-center tw:items-center tw:gap-2">
        <div class="tw:font-light tw:font-montserrat tw:text-5xl">ELEV8</div>
        <img :src="logo" alt="" />
      </div>
      <p class="tw:text-sm tw:m-0">your key to seamless hospitality.</p>
    </div>

    <nav class="tw:space-y-2 tw:text-sm">
      <div class="tw:font-bold tw:text-xl">Main</div>
      <NuxtLink to="/" class="tw:hover:bg-neutral-200 tw:bg-white tw:transition-all tw:duration-200 tw:flex tw:items-center tw:gap-2 tw:px-3 tw:py-2 tw:rounded" :class="{ 'tw:bg-yellow-400 tw:hover:bg-yellow-400': $route.path === '/' }">
        <LayoutGrid />
        <p class="tw:font-semibold tw:m-0">Dashboard</p>
      </NuxtLink>
      <NuxtLink to="/reservations" class="tw:hover:bg-neutral-200 tw:bg-white tw:transition-all tw:duration-200 tw:flex tw:items-center tw:gap-2 tw:px-3 tw:py-2 tw:rounded" :class="{ 'tw:bg-yellow-400 tw:hover:bg-yellow-400': $route.path === '/reservations' }">
        <Calendar />
        <p class="tw:font-semibold tw:m-0">Reservations</p>
      </NuxtLink>
      <NuxtLink to="/listing" class="tw:hover:bg-neutral-200 tw:bg-white tw:transition-all tw:duration-200 tw:flex tw:items-center tw:gap-2 tw:px-3 tw:py-2 tw:rounded" :class="{ 'tw:bg-yellow-400 tw:hover:bg-yellow-400': $route.path === '/listing' }">
        <House />
        <p class="tw:font-semibold tw:m-0">Listings</p>
      </NuxtLink>
      <q-expansion-item header-class="tw:hover:bg-neutral-200 tw:bg-white tw:transition-all tw:duration-200 tw:flex tw:items-center tw:px-3 tw:py-2 tw:rounded tw:min-h-0">
        <!-- Header custom pakai slot -->
        <template #header>
          <div class="tw:flex tw:items-center tw:gap-2 tw:w-full">
            <TableOfContents />
            <p class="tw:font-semibold tw:m-0">Orders</p>
          </div>
        </template>

        <!-- Content -->
        <div class="tw:flex tw:items-center tw:gap-2 tw:px-3 tw:py-2 tw:rounded">
          <p class="tw:font-semibold tw:m-0 tw:ms-4">Ongoing</p>
        </div>
      </q-expansion-item>
      <q-expansion-item header-class="tw:hover:bg-neutral-200 tw:bg-white tw:transition-all tw:duration-200 tw:flex tw:items-center tw:px-3 tw:py-2 tw:rounded tw:min-h-0">
        <!-- Header custom pakai slot -->
        <template #header>
          <div class="tw:flex tw:items-center tw:gap-2 tw:w-full">
            <ShoppingCart />
            <p class="tw:font-semibold tw:m-0">Upsells</p>
          </div>
        </template>

        <!-- Content -->
        <div class="tw:flex tw:items-center tw:gap-2 tw:px-3 tw:py-2 tw:rounded">
          <p class="tw:font-semibold tw:m-0 tw:ms-4">Ongoing</p>
        </div>
      </q-expansion-item>
    </nav>

    <nav class="tw:space-y-2 tw:text-sm">
      <div class="tw:font-bold tw:text-xl">Extras</div>
      <NuxtLink to="/task" class="tw:hover:bg-neutral-200 tw:bg-white tw:transition-all tw:duration-200 tw:flex tw:items-center tw:gap-2 tw:px-3 tw:py-2 tw:rounded" :class="{ 'tw:bg-yellow-400 tw:hover:bg-yellow-400': $route.path === '/task' }">
        <FileCheck2 />
        <p class="tw:font-semibold tw:m-0">Task</p>
      </NuxtLink>
      <NuxtLink to="/order" class="tw:hover:bg-neutral-200 tw:bg-white tw:transition-all tw:duration-200 tw:flex tw:items-center tw:gap-2 tw:px-3 tw:py-2 tw:rounded" :class="{ 'tw:bg-yellow-400 tw:hover:bg-yellow-400': $route.path === '/order' }"">
        <Check />
        <p class="tw:font-semibold tw:m-0">Orders</p>
      </NuxtLink>
      <NuxtLink to="/user" class="tw:hover:bg-neutral-200 tw:bg-white tw:transition-all tw:duration-200 tw:flex tw:items-center tw:gap-2 tw:px-3 tw:py-2 tw:rounded" :class="{ 'tw:bg-yellow-400 tw:hover:bg-yellow-400': $route.path === '/user' }"">
        <UserPlus />
        <p class="tw:font-semibold tw:m-0">Users</p>
      </NuxtLink>
      <q-expansion-item header-class="tw:hover:bg-neutral-200 tw:bg-white tw:transition-all tw:duration-200 tw:flex tw:items-center tw:px-3 tw:py-2 tw:rounded tw:min-h-0">
        <!-- Header custom pakai slot -->
        <template #header>
          <div class="tw:flex tw:items-center tw:gap-2 tw:w-full">
            <Settings />
            <p class="tw:font-semibold tw:m-0">Settings</p>
          </div>
        </template>

        <!-- Content -->
        <div class="tw:flex tw:items-center tw:gap-2 tw:px-3 tw:py-2 tw:rounded">
          <p class="tw:font-semibold tw:m-0 tw:ms-4">Ongoing</p>
        </div>
      </q-expansion-item>
    </nav>
  </aside>
</template>

<script setup>
import logo from "../assets/logo.svg";
import { LayoutGrid, Calendar, House, TableOfContents, ShoppingCart, FileCheck2, Check, UserPlus, Settings } from "lucide-vue-next";
</script>
