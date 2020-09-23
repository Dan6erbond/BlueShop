<template>
  <div class="home">
    <div v-if="loading">
      <b-spinner class="d-block m-auto" type="grow" label="Spinning"></b-spinner>
    </div>
    <div v-else-if="homepage" v-html="bannerText"></div>
    <div v-else>
      <b-alert show variant="danger">{{ $t("errorLoadingHomepage") }}</b-alert>
    </div>
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
