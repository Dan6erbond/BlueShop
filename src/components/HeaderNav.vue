<template>
  <b-navbar variant="faded" type="light" id="nav">
    <b-navbar-brand tag="h1" class="mb-0" :to="{ name: 'home' }">BlueShop</b-navbar-brand>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item :to="{ name: 'categories' }">{{ $t("categories") }}</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
    <b-navbar-nav class="ml-auto d-flex align-items-center">
      <b-nav-item-dropdown :text="lang | capitalize" right>
        <b-dropdown-item
          v-for="(lang, i) in languageArray"
          :key="`lang${i}`"
          @click="selectLang(lang)"
        >{{ lang | capitalize }}</b-dropdown-item>
      </b-nav-item-dropdown>
      <b-nav-item v-if="user" class="ml-2 h3" :to="{ name: 'profile' }">
        <b-icon-person-fill></b-icon-person-fill>
      </b-nav-item>
      <b-nav-item v-else class="ml-2 h3" :to="{ name: 'login' }" @click="clickLogin">
        <b-icon-door-closed-fill></b-icon-door-closed-fill>
      </b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
import { languages } from "@/plugins/i18n";
import { mapMutations, mapState } from "vuex";

export default {
  data: function () {
    return {
      languageArray: languages,
    };
  },
  computed: {
    ...mapState(["user"]),
    lang() {
      return this.$store.state.locale;
    },
  },
  methods: {
    ...mapMutations(["setRedirectPath"]),
    selectLang(lang) {
      this.$store.dispatch("changeLocale", lang);
    },
    clickLogin() {
      this.setRedirectPath({ path: this.$route.path });
    },
  },
};
</script>
