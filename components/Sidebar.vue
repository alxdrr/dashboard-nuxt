<template>
  <q-list padding class="text-black">
    <q-item clickable v-ripple to="/">
      <q-item-section avatar>
        <q-icon name="dashboard" />
      </q-item-section>
      <q-item-section>Dashboard</q-item-section>
    </q-item>

    <q-item clickable v-ripple to="/reservations">
      <q-item-section avatar>
        <q-icon name="event" />
      </q-item-section>
      <q-item-section>Reservations</q-item-section>
    </q-item>

    <!-- Tambahkan item lainnya sesuai struktur -->
  </q-list>
</template>
