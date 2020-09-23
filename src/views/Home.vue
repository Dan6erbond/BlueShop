<template>
  <div class="home">
    <div v-if="homepage" v-html="bannerText"></div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Home",
  data() {
    return {
      slide: 0,
      sliding: null,
    };
  },
  computed: {
    ...mapState(["loading", "homepage", "locale"]),
    bannerText() {
      return (
        this.homepage.translations.find((t) => t.language == this.locale) ||
        this.homepage.translations[0]
      ).banner_text;
    },
  },
  methods: {
    ...mapActions(["fetchHomepage"]),
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    },
  },
  mounted: function () {
    if (this.homepage == null) this.fetchHomepage({ vue: this });
  },
};
</script>
