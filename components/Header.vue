<script setup>
import { Bell, MessageSquare, Menu } from "lucide-vue-next";
import avatar from "../assets/avatar.png";
</script>
<template>
  <header class="tw:h-16 tw:bg-white tw:flex tw:justify-between tw:items-center tw:px-6 tw:fixed tw:left-64 tw:right-0 tw:top-0 tw:z-10">
    <Menu />
    <div class="tw:flex tw:items-center tw:gap-4">
      <div>
        <Bell />
        <q-menu anchor="bottom left">
          <div class="tw:flex tw:flex-col tw:gap-2 tw:min-w-64 tw:min-h-100 tw:px-4 tw:py-4">
            <p>Notification</p>
            <hr class="tw:w-full tw:border-neutral-300" />
            <div class="tw:w-full tw:flex tw:items-center tw:justify-center tw:h-full"><p>No Notifications</p></div>
          </div>
        </q-menu>
      </div>
      <div>
        <MessageSquare />
        <q-menu anchor="bottom left">
          <div class="tw:flex tw:flex-col tw:gap-2 tw:min-w-64 tw:min-h-100 tw:px-4 tw:py-4">
            <p>Chat</p>
            <hr class="tw:w-full tw:border-neutral-300" />
            <div style="width: 100%; max-width: 400px">
              <q-chat-message :text="['hey, how are you?']" sent />
              <q-chat-message :text="['doing fine, how r you?']" />
            </div>
          </div>
        </q-menu>
      </div>

      <q-avatar>
        <img :src="avatar" />
        <q-menu class="bg-white text-black" auto-close>
          <q-list style="min-width: 100px">
            <q-item clickable>
              <q-item-section>New tab</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section>New incognito tab</q-item-section>
            </q-item>
            <q-separator dark />
            <q-item clickable>
              <q-item-section>Recent tabs</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section>History</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section>Downloads</q-item-section>
            </q-item>
            <q-separator dark />
            <q-item clickable>
              <q-item-section>Settings</q-item-section>
            </q-item>
            <q-separator dark />
            <q-item clickable>
              <q-item-section>Help &amp; Feedback</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-avatar>
    </div>
  </header>
</template>
