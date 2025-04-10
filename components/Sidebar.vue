<template>
  <q-drawer show-if-above side="left" bordered class="bg-white text-dark">
    <!-- Logo -->
    <div class="q-pa-xs">
      <!-- Logo dan teks ELEV8 -->
      <div class="row items-center no-wrap q-gutter-x-sm justify-center">
        <div class="text-h3 text-weight-thin">ELEV8</div>
        <q-img :src="logo" style="width: 24px" contain />
      </div>
      <!-- Subtitle -->
      <div class="text-center text-caption">your key to seamless hospitality.</div>
    </div>

    <!-- Menu Section -->
    <q-list class="q-ml-lg">
      <!-- MAIN Section -->
      <q-item-label header class="text-weight-bold text-dark bg-green">Main</q-item-label>

      <q-item clickable to="/" class="q-py-xs" active-class="bg-yellow rounded">
        <q-item-section avatar>
          <q-icon name="dashboard" />
        </q-item-section>
        <q-item-section>Dashboard</q-item-section>
        <q-item-section side>
          <q-badge color="yellow-8" text-color="black" rounded>5</q-badge>
        </q-item-section>
      </q-item>

      <q-item clickable to="/reservations" class="q-py-xs">
        <q-item-section avatar>
          <q-icon name="event" />
        </q-item-section>
        <q-item-section>Reservations</q-item-section>
      </q-item>

      <q-item clickable class="q-py-xs">
        <q-item-section avatar>
          <q-icon name="home" />
        </q-item-section>
        <q-item-section>Listings</q-item-section>
      </q-item>

      <!-- Dropdown menu (Orders) -->
      <q-expansion-item icon="list" label="Orders" dense expand-separator header-class="q-py-md">
        <q-item clickable v-close-popup>
          <q-item-section class="q-pl-md">Ongoing</q-item-section>
        </q-item>
      </q-expansion-item>

      <q-expansion-item icon="shopping_cart" label="Upsells" dense expand-separator header-class="q-py-md">
        <q-item clickable v-close-popup>
          <q-item-section class="q-pl-md">Ongoing</q-item-section>
        </q-item>
      </q-expansion-item>

      <!-- EXTRAS Section -->
      <q-item-label header class="text-weight-bold text-dark bg-green">Extras</q-item-label>

      <q-item clickable class="q-py-xs">
        <q-item-section avatar>
          <q-icon name="edit_note" />
        </q-item-section>
        <q-item-section>Tasks</q-item-section>
      </q-item>

      <q-item clickable class="q-py-xs">
        <q-item-section avatar>
          <q-icon name="check_circle" />
        </q-item-section>
        <q-item-section>Inventories</q-item-section>
      </q-item>

      <q-item clickable class="q-py-xs">
        <q-item-section avatar>
          <q-icon name="group_add" />
        </q-item-section>
        <q-item-section>Users</q-item-section>
      </q-item>

      <q-expansion-item icon="settings" label="Settings" dense expand-separator header-class="q-py-xs">
        <q-item clickable v-close-popup>
          <q-item-section class="q-pl-md">Preferences</q-item-section>
        </q-item>
      </q-expansion-item>
    </q-list>

    <!-- Footer -->
    <div class="absolute-bottom q-pa-md text-caption text-grey-7">PT. Elevate Property<br />Management</div>
  </q-drawer>
</template>

<script setup>
import logo from "../assets/logo.svg";
</script>
