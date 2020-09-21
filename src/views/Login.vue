<template>
  <div id="login">
    <b-form @submit.prevent="submit">
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.password"
          type="password"
          required
          placeholder="Enter password"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-4">
        <b-form-checkbox v-model="form.persist" class="mb-2 mr-sm-2 mb-sm-0">Remember me</b-form-checkbox>
      </b-form-group>

      <span>
        {{ $t("noAccount") }}
        <router-link :to="{ name: 'register' }">{{ $t("register") }}</router-link>
      </span>
      <br />
      <br />

      <b-button type="submit" variant="primary">Log In</b-button>
    </b-form>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  data: function () {
    return {
      form: {
        email: "",
        password: "",
        persist: "",
      },
    };
  },
  computed: {
    ...mapState(["user", "redirectPath"]),
  },
  methods: {
    ...mapActions(["login"]),
    submit() {
      this.login({ vue: this, ...this.form });
    },
  },
  watch: {
    user() {
      if (this.user) {
        this.$router.push(this.redirectPath || { name: "home" });
      }
    },
  },
};
</script>
