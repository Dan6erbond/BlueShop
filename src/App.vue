<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "app",
  computed: mapState(["locale"]),
  watch: {
    locale() {
      this.$router.replace({ params: { lang: this.locale } }).catch(() => {});
    },
  },
  methods: {
    ...mapActions(["changeLocale"]),
  },
  created() {
    this.changeLocale(this.locale);
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding: 0 30px;
}

ul {
  list-style-type: disc;
  padding-left: 20px;
}
</style>
