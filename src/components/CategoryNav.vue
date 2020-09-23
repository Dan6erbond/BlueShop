<template>
  <div>
    <b-navbar toggleable="lg">
      <b-navbar-toggle target="category-nav-collapse"></b-navbar-toggle>
      <b-collapse id="category-nav-collapse" is-nav>
        <b-nav class="d-block">
          <b-nav-item
            v-for="category in categories"
            :key="category.id"
            :to="{ name: 'category', params: { id: category.id, name: getCategoryName(category) } }"
          >{{ getCategoryName(category) }}</b-nav-item>
        </b-nav>
      </b-collapse>
    </b-navbar>
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
  },
  computed: {
    ...mapState(["categories", "locale"]),
  },
  mounted: function () {
    if (!this.categories.length) this.fetchCategories(this);
  },
};
</script>

<style lang="scss" scoped>
.nav-item {
  .nav-link {
    color: black;

    &:hover {
      color: grey;
    }

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
