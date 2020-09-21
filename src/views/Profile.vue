<template>
  <div v-if="user" id="profile" class="d-flex">
    <div class="w-25 text-center">
      <div class="m-auto d-inline-block">
        <b-avatar size="lg"></b-avatar>
      </div>
    </div>
    <b-container class="pl-4 ml-4" fluid>
      <b-row>
        <b-col cols="4">
          <b>{{ $t("name") }}</b>
        </b-col>
        <b-col cols="8">{{ user.first_name }} {{ user.last_name }}</b-col>
      </b-row>
      <b-row>
        <b-col cols="4">
          <b>{{ $t("email") }}</b>
        </b-col>
        <b-col cols="8">{{ user.email }}</b-col>
      </b-row>
    </b-container>
  </div>
  <div v-else>{{ $t("redirecting") }}</div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  computed: {
    ...mapState(["user"]),
  },
  methods: {
    ...mapMutations(["setRedirectPath"]),
  },
  watch: {
    user: {
      immediate: true,
      handler: function () {
        if (this.user == null) {
          this.setRedirectPath({ path: { name: "profile" } });
          this.$router.push({ name: "login" });
        }
      },
    },
  },
};
</script>
