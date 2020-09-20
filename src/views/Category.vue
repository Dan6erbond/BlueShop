<template>
  <div class="category">
    <div v-if="loading">
      <b-spinner class="d-block m-auto" type="grow" label="Spinning"></b-spinner>
    </div>
    <div v-else-if="category">
      <b-breadcrumb>
        <b-breadcrumb-item :to="{ name: 'categories' }">{{ $t("categories") }}</b-breadcrumb-item>
        <b-breadcrumb-item
          :to="{ name: 'category', params: { id: category.id, name: categoryName } }"
        >{{ categoryName }}</b-breadcrumb-item>
      </b-breadcrumb>
      <b-form-slider :value="value"></b-form-slider>
      <b-card-group deck>
        <router-link
          v-for="product in products"
          :key="product.id"
          :to="{ name: 'product', params: { id: product.id, name: getProductName(product) } }"
        >
          <b-card
            :title="getProductName(product)"
            :img-src="getProductThumbnail(product)"
            :img-alt="getProductName(product)"
            img-top
            class="d-inline-flex"
          >
            <b-card-text>{{ getProductDescription(product) | striphtml | medium }}</b-card-text>
          </b-card>
        </router-link>
      </b-card-group>
    </div>
    <div v-else>
      <b-alert show variant="danger">{{ $t("categoryNotFound") }}</b-alert>
      <p>
        {{ $t("returnTo") }}
        <router-link to="/">{{ $t("home") }}</router-link>.
      </p>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "Category",
  data() {
    return {
      value: 5,
    };
  },
  computed: {
    ...mapState(["categories", "loading"]),
    products() {
      return this.category
        ? this.$store.getters.getProductsByCategory(this.category.id)
        : [];
    },
    category() {
      return this.$store.getters.getCategory(this.$route.params.id);
    },
    categoryName() {
      return (
        this.category.translations.find(
          (t) => t.language == this.$store.state.local
        ) || this.category.translations[0]
      ).name;
    },
  },
  methods: {
    ...mapActions(["fetchCategories", "fetchProducts"]),
    getProductName(product) {
      return (
        product.translations.find(
          (t) => t.language == this.$store.state.locale
        ) || product.translations[0]
      ).name;
    },
    getProductDescription(product) {
      return (
        product.translations.find(
          (t) => t.language == this.$store.state.locale
        ) || product.translations[0]
      ).description;
    },
    getProductThumbnail: (product) => product.image.data.thumbnails[5].url,
  },
  watch: {
    $route() {
      if (!this.products.length) this.fetchProducts(this, this.category.id);
    },
    category: {
      immediate: true,
      handler() {
        if (!this.products.length && this.category)
          this.fetchProducts(this, this.category.id);
      },
    },
  },
  mounted: function () {
    if (!this.categories.length) this.fetchCategories(this);
  },
};
</script>

<style lang="scss" scoped>
.card {
  max-width: 500px;
  min-width: 300px;
  width: 30%;
  transition: all 0.25s ease;
  color: black;
  text-decoration: none;

  &:hover {
    filter: brightness(0.85);
    color: black !important;
    text-decoration: none !important;
  }

  img {
    max-width: 400px !important;
    width: 90%;
    margin: 0 auto;
  }
}
</style>
