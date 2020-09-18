import Vue from "vue";
import App from "./App.vue";
import "./plugins/axios";
import "./plugins/bootstrap-vue";
import "./plugins/directus";
import router from "./router";
import store from "./store";
import "./utils/filters";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
