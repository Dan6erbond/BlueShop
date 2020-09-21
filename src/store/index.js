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
    user: null,
    redirectPath: null,
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
    setUser(state, { user }) {
      state.user = user;
    },
    setRedirectPath(state, { path }) {
      state.redirectPath = path;
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
    fetchProducts({ commit }, { vue, categoryId }) {
      commit("setLoading", { loading: true });
      vue.$client
        .getItems("products", {
          fields: ["*", "image.*", "category.*.*", "translations.*"],
          filter: {
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
    login({ commit }, { vue, email, password, persist }) {
      commit("setLoading", { loading: true });
      vue.$client
        .login({
          email,
          password,
          persist,
        })
        .then((res) => {
          commit("setLoading", { loading: false });
          commit("setUser", { user: res.data.user });
        });
    },
    logout({ commit }, { vue }) {
      commit("setLoading", { loading: true });
      vue.$client.logout().then(() => {
        commit("setLoading", { loading: false });
        commit("setUser", { user: null });
      });
    },
    signUp({ commit }, { vue, firstName, lastName, password, email }) {
      commit("setLoading", { loading: true });
      vue.$client.api
        .post("/custom/user/register", {
          email,
          password,
          firstName,
          lastName,
        })
        .then((res) => {
          commit("setLoading", { loading: false });
          commit("setUser", { user: res.data.user });
        });
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
