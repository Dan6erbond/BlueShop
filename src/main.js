import Vue from "vue";
import App from "./App.vue";
import "./plugins/axios";
import "./plugins/bootstrap-vue";
import "./plugins/directus";
import router from "./router";
import store from "./store";
import "./utils/filters";
import i18n from './i18n'

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App)
}).$mount("#app");
