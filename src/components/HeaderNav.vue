<template>
  <b-navbar variant="faded" type="light" id="nav">
    <b-navbar-brand tag="h1" class="mb-0" :to="{ name: 'home' }">BlueShop</b-navbar-brand>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item :to="{ name: 'categories' }">{{ $t("categories") }}</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
    <b-navbar-nav class="ml-auto">
      <b-nav-item-dropdown :text="lang | capitalize" right>
        <b-dropdown-item
          v-for="(lang, i) in languageArray"
          :key="`lang${i}`"
          @click="selectLang(lang)"
        >{{ lang | capitalize }}</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
import { languages } from "@/plugins/i18n";

export default {
  data: function () {
    return {
      languageArray: languages,
    };
  },
  computed: {
    lang() {
      return this.$store.state.locale;
    },
  },
  methods: {
    selectLang(lang) {
      this.$store.dispatch("changeLocale", lang);
    },
  },
};
</script>
