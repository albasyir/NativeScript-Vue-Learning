import Vue from "nativescript-vue";
import App from "./components/App.vue";
import store from "./plugins/vuex";

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = TNS_ENV === "production";

new Vue({
  store,
  render: (h) => h("frame", [h(App)]),
}).$start();
