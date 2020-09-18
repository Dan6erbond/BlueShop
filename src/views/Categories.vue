<template>
  <div class="categories">
    <h1>Product Categories</h1>
    <br />
    <router-link
      v-for="category in categories"
      :key="category.id"
      :to="{ name: 'Category', params: { id: category.id } }"
    >
      <b-card
        :title="category.name"
        :img-src="randomProduct(category).image.data.thumbnails[5].url"
        :img-alt="category.name"
        img-top
      ></b-card>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Categories",
  data: function () {
    return {
      categories: [],
    };
  },
  methods: {
    randomProduct(category) {
      var index = Math.floor(Math.random() * category.products.length);
      return category.products[index];
    },
  },
  mounted: function () {
    this.$client
      .getItems("categories", {
        fields: ["*", "products.*", "products.image.*"],
      })
      .then((res) => (this.categories = res.data));
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
