<template>
  <div id="login">
    <b-form @submit.prevent="submit">
      <b-form-group
        id="input-group-1"
        :label="$t('email') + ' ' + $t('address') + ':'"
        label-for="input-1"
        :description="$t('emailFieldDescription')"
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          :placeholder="$t('enter', {field: $t('email')})"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" :label="$t('password') + ':'" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.password"
          type="password"
          required
          :placeholder="$t('enter', {field: $t('password')})"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-4">
        <b-form-checkbox
          v-model="form.persist"
          class="mb-2 mr-sm-2 mb-sm-0"
        >{{ $t("rememberLabel") }}</b-form-checkbox>
      </b-form-group>

      <span>
        {{ $t("noAccount") }}
        <router-link :to="{ name: 'register' }">{{ $t("register") }}.</router-link>
      </span>
      <br />
      <br />

      <b-button type="submit" variant="primary">{{ $t("logIn") }}</b-button>
    </b-form>
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from "vuex";

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
    ...mapMutations(["setRedirectPath"]),
    ...mapActions(["login"]),
    submit() {
      this.login({ vue: this, ...this.form });
    },
  },
  watch: {
    user: {
      immediate: true,
      handler() {
        if (this.user) {
          let redirectPath = this.redirectPath;
          this.setRedirectPath({ path: null });
          this.$router.push(redirectPath || { name: "home" });
        }
      },
    },
  },
};
</script>
