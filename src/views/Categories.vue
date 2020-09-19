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
        :title="category.translations[0].name"
        :img-src="category.image.data.thumbnails[5].url"
        :img-alt="category.translations[0].name"
        img-top
      >
        <b-card-text>{{category.translations[0].description}}</b-card-text>
      </b-card>
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
  mounted: function () {
    this.$client.api
      .get("/custom/categories")
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
