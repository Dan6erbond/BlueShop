<template>
  <div class="categories">
    <h1>{{ $t("productCategories") }}</h1>
    <br />
    <div v-if="loading">
      <b-spinner class="d-block m-auto" type="grow" label="Spinning"></b-spinner>
    </div>
    <div v-else>
      <b-container fluid>
        <b-row>
          <b-col sm="6" cols="12" md="4" v-for="category in categories" :key="category.id">
            <router-link
              :to="{ name: 'category', params: { id: category.id, name: getCategoryName(category) } }"
              class="p-2"
            >
              <b-card
                :title="getCategoryName(category)"
                :img-src="category.image && category.image.data.thumbnails[5].url"
                :img-alt="getCategoryName(category)"
                img-top
                class="d-inline-flex"
              >
                <b-card-text>{{ getCategoryDescription(category) | medium }}</b-card-text>
              </b-card>
            </router-link>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "Categories",
  methods: {
    ...mapActions(["fetchCategories"]),
    getCategoryName(category) {
      return (
        category.translations.find((t) => t.language == this.locale) ||
        category.translations[0]
      ).name;
    },
    getCategoryDescription(category) {
      return (
        category.translations.find((t) => t.language == this.locale) ||
        category.translations[0]
      ).description;
    },
  },
  computed: {
    ...mapState(["categories", "loading", "locale"]),
  },
  mounted: function () {
    if (!this.categories.length) this.fetchCategories(this);
  },
};
</script>
