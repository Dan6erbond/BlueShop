import i18n, { selectedLocale } from "@/plugins/i18n";
import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    categories: [],
    products: [],
    loading: false,
    locale: selectedLocale,
  },
  mutations: {
    setLoading(state, { loading }) {
      state.loading = loading;
    },
    setCategories(state, { categories }) {
      state.categories = categories;
    },
    addProducts(state, { products }) {
      state.products.push(...products);
    },
    updateLocale(state, newLocale) {
      state.locale = newLocale;
    },
  },
  actions: {
    fetchCategories({ commit }, vue) {
      commit("setLoading", { loading: true });
      vue.$client.api.get("/custom/categories").then((res) => {
        commit("setCategories", { categories: res.data });
        commit("setLoading", { loading: false });
      });
    },
    fetchProducts({ commit }, vue, categoryId) {
      commit("setLoading", { loading: true });
      vue.$client
        .getItems("products", {
          fields: ["*", "image.*", "category.*.*", "translations.*"],
          filters: {
            "category.id": {
              eq: categoryId,
            },
          },
        })
        .then((res) => {
          commit("addProducts", { products: res.data });
          commit("setLoading", { loading: false });
        });
    },
    fetchProduct({ commit }, { vue, id }) {
      commit("setLoading", { loading: true });
      vue.$client
        .getItem("products", id, {
          fields: ["*", "image.*", "category.*.*", "translations.*"],
        })
        .then((res) => {
          commit("addProducts", { products: [res.data] });
          commit("setLoading", { loading: false });
        })
        .catch((err) => {
          if (err.code == 203)
            commit("setLoading", {
              loading: false,
            });
        });
    },
    changeLocale({ commit }, newLocale) {
      i18n.locale = newLocale; // important!
      commit("updateLocale", newLocale);
    },
  },
  getters: {
    getCategory: (state) => (id) => {
      return state.categories.find((category) => category.id == id);
    },
    getProduct: (state) => (id) => {
      return state.products.find((product) => product.id == id);
    },
    getProductsByCategory: (state) => (categoryId) => {
      return state.products.filter(
        (product) => product.category.id == categoryId
      );
    },
  },
  plugins: [
    createPersistedState({
      paths: ["locale"],
    }),
  ],
});
