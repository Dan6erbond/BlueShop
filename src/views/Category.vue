<template>
  <div class="category">
    <div v-if="category">
      <router-link
        v-for="product in category.products"
        :key="product.id"
        :to="{ name: 'Product', params: { id: product.id } }"
      >
        <b-card
          :title="product.name"
          :img-src="product.image.data.thumbnails[5].url"
          :img-alt="product.name"
          img-top
        ></b-card>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Category",
  data: function () {
    return {
      category: null,
    };
  },
  methods: {
    fetchCategory() {
      this.$client
        .getItem("categories", this.$route.params.id, {
          fields: ["*", "products.*", "products.image.*"],
        })
        .then((res) => (this.category = res.data));
    },
  },
  watch: {
    $route() {
      this.fetchCategory();
    },
  },
  mounted: function () {
    this.fetchCategory();
  },
};
</script>

<style lang="scss" scoped>
.card {
  max-width: 500px;
  min-width: 300px;
  width: 30%;
  transition: all 0.25s ease;

  &:hover {
    filter: brightness(0.85);
  }

  img {
    max-width: 400px !important;
    width: 90%;
    margin: 0 auto;
  }
}
</style>
