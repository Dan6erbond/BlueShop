import Vue from "vue";
import App from "./App.vue";
import "./plugins/axios";
import "./plugins/bootstrap-vue";
import "./plugins/directus";
import i18n from "./plugins/i18n";
import "./plugins/slider";
import router from "./router";
import store from "./store";
import "./styles/card.scss";
import "./utils/filters";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
