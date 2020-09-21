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
      <div class="pb-3 pl-3">
        <span class="pr-4">{{ $t("price") }}</span>
        <b-form-slider
          :value="sliderValue"
          :min="priceMin"
          :max="priceMax"
          @change="adjustPriceSlider"
        ></b-form-slider>
        <span class="px-4">{{ $t("sortBy") }}</span>
        <b-form-select class="d-inline-block w-auto" v-model="sortBy" :options="sortByOptions"></b-form-select>
      </div>
      <b-container fluid>
        <b-row>
          <b-col sm="6" cols="12" md="4" v-for="product in filteredProducts" :key="product.id">
            <router-link
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
          </b-col>
        </b-row>
      </b-container>
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
      sliderValue: [10, 5000],
      sortBy: "name",
      sortByOptions: [
        { value: "name", text: this.$t("name") },
        { value: "priceLow", text: this.$t("priceLow") },
        { value: "priceHigh", text: this.$t("priceHigh") },
      ],
    };
  },
  computed: {
    ...mapState(["categories", "loading"]),
    products() {
      return this.category
        ? this.$store.getters.getProductsByCategory(this.category.id)
        : [];
    },
    filteredProducts() {
      const [minPrice, maxPrice] = this.sliderValue;

      let _products = this.products.filter(
        (p) => p.price >= minPrice && p.price <= maxPrice
      );

      if (this.sortBy) {
        switch (this.sortBy) {
          case "priceHigh":
            _products = _products.sort((p1, p2) =>
              p1.price < p2.price ? 1 : p1.price > p2.price ? -1 : 0
            );
            break;
          case "priceLow":
            _products = _products.sort((p1, p2) =>
              p1.price > p2.price ? 1 : p1.price < p2.price ? -1 : 0
            );
            break;
          default:
            _products = _products.sort((p1, p2) => {
              const p1Name = this.getProductName(p1),
                p2Name = this.getProductName(p2);
              return p1Name > p2Name ? 1 : p1Name < p2Name ? -1 : 0;
            });
        }
      }

      return _products;
    },
    priceMin() {
      return Math.min(...this.products.map((p) => p.price));
    },
    priceMax() {
      return Math.max(...this.products.map((p) => p.price));
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
    adjustPriceSlider({ newValue }) {
      this.sliderValue = newValue;
    },
  },
  watch: {
    category: {
      immediate: true,
      handler(to, from) {
        if (to && from && to.id === from.id) return;
        if (!this.products.length && to && !this.loading)
          this.fetchProducts({ vue: this, categoryId: to.id });
      },
    },
    products: {
      immediate: true,
      handler() {
        this.sliderValue = [this.priceMin, this.priceMax];
      },
    },
  },
  mounted: function () {
    if (!this.categories.length) this.fetchCategories(this);
  },
};
</script>
