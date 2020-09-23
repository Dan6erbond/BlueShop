<template>
  <div>
    <div v-if="loading">
      <b-spinner class="d-block m-auto" type="grow" label="Spinning"></b-spinner>
    </div>
    <div v-else-if="product" class="product">
      <b-breadcrumb>
        <b-breadcrumb-item :to="{ name: 'categories' }">{{ $t("categories") }}</b-breadcrumb-item>
        <b-breadcrumb-item
          :to="{ name: 'category', params: { id: product.category.id, name: categoryName } }"
        >{{ categoryName }}</b-breadcrumb-item>
        <b-breadcrumb-item
          :to=" { name: 'product', params: { id: product.id, name: productName } }"
        >{{ productName }}</b-breadcrumb-item>
      </b-breadcrumb>
      <b-container fluid>
        <b-row class="d-flex justify-content-between align-items-center p-2">
          <h1>{{ productName }}</h1>
          <span class="pr-4">{{ product.price | chf }}</span>
        </b-row>
        <br />
        <b-row>
          <b-col lg="4" md="12">
            <img class="m-auto d-block w-100" :src="product.image.data.full_url" :alt="productName" />
          </b-col>
          <b-col lg="8" md="12">
            <div v-html="productDescription"></div>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div v-else>
      <b-alert show variant="danger">{{ $t("productNotFound") }}</b-alert>
      <p>
        {{ $t("returnTo") }}
        <router-link to="/">{{ $t("home") }}</router-link>.
      </p>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";

export default {
  name: "Product",
  computed: {
    ...mapState(["loading", "locale"]),
    ...mapGetters(["getProduct"]),
    product() {
      return this.getProduct(this.$route.params.id);
    },
    productName() {
      return (
        this.product.translations.find((t) => t.language == this.locale) ||
        this.product.translations[0]
      ).name;
    },
    productDescription() {
      return (
        this.product.translations.find((t) => t.language == this.locale) ||
        this.product.translations[0]
      ).description;
    },
    categoryName() {
      return (
        this.product.category.translations.find(
          (t) => t.language == this.locale
        ) || this.product.category.translations[0]
      ).name;
    },
  },
  methods: {
    ...mapActions(["fetchProduct"]),
  },
  watch: {
    $route: {
      immediate: true,
      handler() {
        if (!this.product)
          this.fetchProduct({ vue: this, id: this.$route.params.id });
      },
    },
  },
};
</script>
