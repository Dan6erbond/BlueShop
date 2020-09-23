<template>
  <b-navbar variant="faded" type="light" id="nav">
    <b-navbar-brand tag="h1" class="mb-0" :to="{ name: 'home' }">BlueShop</b-navbar-brand>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item :to="{ name: 'categories' }">{{ $t("categories") }}</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
    <b-navbar-nav class="ml-auto d-flex align-items-center w-100">
      <div class="ml-auto"></div>
      <b-nav-form class="w-100 px-4" @submit.prevent="searchProduct">
        <vue-bootstrap-typeahead
          v-model="query"
          :data="products"
          :serializer="getProductName"
          @hit="selectProduct"
          :placeholder="$t('findAProduct')"
        >
          <template slot="append">
            <b-button class="my-2 my-sm-0" type="submit">{{ $t("search") }}</b-button>
          </template>
          <template slot="suggestion" slot-scope="{ data, htmlText }">
            <div class="d-flex align-items-center">
              <img
                class="rounded-circle"
                :src="getProductThumbnail(data)"
                style="width: 40px; height: 40px;"
              />
              <div class="ml-4">
                <strong>
                  <span v-html="htmlText"></span>
                </strong>
                <br />
                <span>{{ getProductDescription(data) | striphtml | medium }}</span>
              </div>
            </div>
          </template>
        </vue-bootstrap-typeahead>
      </b-nav-form>
      <b-nav-item-dropdown :text="lang | capitalize" right>
        <b-dropdown-item
          v-for="(lang, i) in languageArray"
          :key="`lang${i}`"
          @click="selectLang(lang)"
        >{{ lang | capitalize }}</b-dropdown-item>
      </b-nav-item-dropdown>
      <b-nav-item-dropdown v-if="user" class="ml-2 h3">
        <template slot="button-content">
          <router-link :to="{ name: 'profile' }">
            <b-icon-person-fill></b-icon-person-fill>
          </router-link>
        </template>
        <b-dropdown-item @click="clickLogout">Log Out</b-dropdown-item>
      </b-nav-item-dropdown>
      <b-nav-item v-else class="ml-2 h3" :to="{ name: 'login' }" @click="clickLogin">
        <b-icon-door-closed-fill></b-icon-door-closed-fill>
      </b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
import { languages } from "@/plugins/i18n";
import { mapActions, mapMutations, mapState } from "vuex";
import VueBootstrapTypeahead from "vue-bootstrap-typeahead";
import _ from "lodash";

export default {
  components: {
    VueBootstrapTypeahead,
  },
  data: function () {
    return {
      languageArray: languages,
      query: "",
      products: [],
    };
  },
  computed: {
    ...mapState(["user", "locale"]),
    lang() {
      return this.locale;
    },
  },
  watch: {
    query: _.debounce(function (newQuery) {
      this.searchProducts(newQuery);
    }, 250),
  },
  methods: {
    ...mapMutations(["setRedirectPath"]),
    ...mapActions(["logout", "changeLocale"]),
    selectLang(lang) {
      this.changeLocale(lang);
    },
    clickLogin() {
      this.setRedirectPath({ path: this.$route.path });
    },
    clickLogout() {
      this.logout({ vue: this });
    },
    getProductName(product) {
      return (
        product.translations.find((t) => t.language == this.locale) ||
        product.translations[0]
      ).name;
    },
    getProductDescription(product) {
      return (
        product.translations.find((t) => t.language == this.locale) ||
        product.translations[0]
      ).description;
    },
    getProductThumbnail: (product) => product.image.data.thumbnails[5].url,
    searchProducts(newQuery) {
      this.$client
        .getItems("products", {
          fields: ["*", "image.*", "category.*.*", "translations.*"],
          filter: {
            "translations.name": {
              logical: "or",
              contains: newQuery,
            },
            "translations.description": {
              logical: "or",
              contains: newQuery,
            },
          },
        })
        .then((res) => {
          this.products = res.data;
        });
    },
    searchProduct() {
      // TODO: Create search page and route to it.
      this.$router.push({
        name: "product",
        params: {
          id: this.products[0].id,
          name: this.getProductName(this.products[0]),
        },
      });
    },
    selectProduct(product) {
      this.$router.push({
        name: "product",
        params: {
          id: product.id,
          name: this.getProductName(product),
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.form-inline {
  width: 100%;

  div {
    width: 100%;
  }
}
</style>
