// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css", "~/assets/css/override.css", "~/assets/css/quasar-variables.sass"],

  vite: {
    plugins: [tailwindcss()],
  },
  modules: ["nuxt-quasar-ui"],
});
