<template>
  <q-toolbar class="q-px-md q-py-sm">
    <q-btn flat round dense icon="menu" @click="$emit('toggle-drawer')" class="q-mr-sm" />

    <q-toolbar-title class="text-h6">Elev8</q-toolbar-title>

    <q-space />

    <!-- Avatar & Language Icon -->
    <q-btn flat round icon="translate" />
    <q-avatar size="32px">
      <img src="https://randomuser.me/api/portraits/men/1.jpg" />
    </q-avatar>
  </q-toolbar>
</template>
