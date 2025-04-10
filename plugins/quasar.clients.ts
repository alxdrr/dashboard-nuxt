import { Quasar } from "quasar";
import lang from "quasar/lang/en-US";
import iconSet from "quasar/icon-set/material-icons";
// import "quasar/src/css/index.sass";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Quasar, {
    plugins: {}, // isi jika butuh plugin dari Quasar
    lang,
    iconSet,
  });
});
