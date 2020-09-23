<template>
  <div>
    <h2 v-if="products">{{ $t("yourSearchResults", {search: query}) }}</h2>
    <h2 v-else>{{ $t("noSearchResults", {search: query}) }}</h2>
    <b-list-group>
      <b-list-group-item
        v-for="product in products"
        :key="product.id"
        :to="{ name: 'product', params: { id: product.id, name: getProductName(product) } }"
      >
        <div class="d-flex align-items-center">
          <img
            class="rounded-circle"
            :src="getProductThumbnail(product)"
            style="width: 40px; height: 40px;"
          />
          <div class="ml-4">
            <strong>
              <span>{{ getProductName(product) }}</span>
            </strong>
            <br />
            <span>{{ getProductDescription(product) | striphtml | medium }}</span>
          </div>
        </div>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      products: [],
    };
  },
  computed: {
    query() {
      return this.$route.query.q;
    },
  },
  watch: {
    query: {
      immediate: true,
      handler(newQuery) {
        this.$client
          .getItems("products", {
            fields: ["*", "image.*", "category.*.*", "translations.*"],
            filter: {
              "translations.name": {
                logical: "or",
                contains: newQuery,
              },
            },
          })
          .then((res) => {
            this.products = res.data;
          });
      },
    },
  },
  methods: {
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
  },
};
</script>
