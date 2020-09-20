import Layout from "@/Layout.vue";
import { languages } from "@/plugins/i18n";
import store from "@/store";
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "root",
    beforeEnter(to, from, next) {
      next(store.state.locale);
    },
  },
  {
    path: "/:lang",
    component: Layout,
    beforeEnter(to, from, next) {
      let lang = to.params.lang;
      if (languages.includes(lang)) {
        if (store.state.locale !== lang) {
          store.dispatch("changeLocale", lang);
        }
        return next();
      }
      return next({ path: store.state.locale });
    },
    children: [
      {
        path: "",
        name: "home",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/Home.vue"),
      },
      {
        path: "categories",
        name: "categories",
        component: () => import("../views/Categories.vue"),
      },
      {
        path: "categories/:id-:name?",
        name: "category",
        component: () => import("../views/Category.vue"),
      },
      {
        path: "products/:id-:name?",
        name: "product",
        component: () => import("../views/Product.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
