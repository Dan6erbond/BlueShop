<template>
  <b-navbar variant="faded" toggleable="lg" type="light" id="nav">
    <b-navbar-brand tag="h1" class="mb-0" :to="{ name: 'home' }"
      >BlueShop</b-navbar-brand
    >
    <b-navbar-toggle target="header-nav-collapse"></b-navbar-toggle>
    <b-collapse id="header-nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item :to="{ name: 'categories' }">{{
          $t("categories")
        }}</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto d-flex w-100 align-items-lg-center">
        <b-nav-form class="w-100 px-4" @submit.prevent="searchProduct">
          <vue-bootstrap-typeahead
            v-model="query"
            :data="products"
            :serializer="getProductName"
            @hit="selectProduct"
            :placeholder="$t('findAProduct')"
          >
            <template slot="append">
              <b-button type="submit">{{ $t("search") }}</b-button>
            </template>
            <template slot="suggestion" slot-scope="{ data, htmlText }">
              <div class="d-flex">
                <img
                  class="rounded-circle"
                  :src="getProductThumbnail(data)"
                  style="width: 40px; height: 40px"
                />
                <div class="ml-4">
                  <strong>
                    <span v-html="htmlText"></span>
                  </strong>
                  <br />
                  <span>{{
                    getProductDescription(data) | striphtml | medium
                  }}</span>
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
            >{{ lang | capitalize }}</b-dropdown-item
          >
        </b-nav-item-dropdown>
        <b-nav-item-dropdown v-if="user" class="ml-2 h3">
          <template slot="button-content">
            <router-link :to="{ name: 'profile' }">
              <b-icon-person-fill></b-icon-person-fill>
            </router-link>
          </template>
          <b-dropdown-item @click="clickLogout">Log Out</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item
          v-else
          class="ml-2 h3"
          :to="{ name: 'login' }"
          @click="clickLogin"
        >
          <b-icon-door-closed-fill></b-icon-door-closed-fill>
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
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
      this.$router.push({ name: "search", query: { q: this.query } });
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

<style lang="scss">
.input-group {
  .form-control {
    margin-left: auto;
    width: auto !important;
    transition: flex 500ms ease;
    flex: none;

    &:focus {
      flex: 1 1 auto;
    }
  }
}

@media (max-width: 992px) {
  .form-inline {
    padding-left: 0 !important;
    padding-right: 0 !important;

    .input-group {
      .form-control {
        flex: 1 1 auto;
      }
    }
  }
}
</style>
