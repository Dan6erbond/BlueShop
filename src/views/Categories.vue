<template>
  <div class="categories">
    <h1>{{ $t("productCategories") }}</h1>
    <br />
    <div v-if="loading">
      <b-spinner class="d-block m-auto" type="grow" label="Spinning"></b-spinner>
    </div>
    <div v-else>
      <router-link
        v-for="category in categories"
        :key="category.id"
        :to="{ name: 'Category', params: { id: category.id, name: getCategoryName(category) } }"
      >
        <b-card
          :title="category.translations[0].name"
          :img-src="category.image.data.thumbnails[5].url"
          :img-alt="category.translations[0].name"
          img-top
          class="d-inline-flex"
        >
          <b-card-text>{{ category.translations[0].description }}</b-card-text>
        </b-card>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "Categories",
  methods: {
    ...mapActions(["fetchCategories"]),
    getCategoryName: (category) => category.translations[0].name,
  },
  computed: {
    ...mapState(["categories", "loading"]),
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
