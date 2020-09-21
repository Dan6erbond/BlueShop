<template>
  <div id="register">
    <b-form @submit.prevent="submit">
      <div class="d-flex justify-content-between">
        <b-form-group
          class="w-100"
          id="input-group-1"
          :label="$t('firstName') + ':'"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="form.firstName"
            required
            :placeholder="$t('enter', {field: $t('firstName')})"
          ></b-form-input>
        </b-form-group>

        <div class="p-3"></div>

        <b-form-group
          class="w-100"
          id="input-group-2"
          :label="$t('lastName') + ':'"
          label-for="input-2"
        >
          <b-form-input
            id="input-2"
            v-model="form.lastName"
            required
            :placeholder="$t('enter', {field: $t('lastName')})"
          ></b-form-input>
        </b-form-group>
      </div>

      <b-form-group
        id="input-group-3"
        :label="$t('email') + ' ' + $t('address') + ':'"
        label-for="input-3"
        :description="$t('emailFieldDescription')"
      >
        <b-form-input
          id="input-3"
          v-model="form.email"
          type="email"
          required
          :placeholder="$t('enter', {field: $t('email')})"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-4" :label="$t('password') + ':'" label-for="input-4">
        <b-form-input
          id="input-4"
          v-model="form.password"
          type="password"
          :state="passwordValidation"
          required
          :placeholder="$t('enter', {field: $t('password')})"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-5"
        :label="$t('confirmation', {field: $t('password')}) + ':'"
        label-for="input-5"
      >
        <b-form-input
          id="input-5"
          v-model="form.passwordConfirm"
          type="password"
          :state="passwordValidation"
          required
          :placeholder="$t('confirm', {field: $t('password')})"
        ></b-form-input>
      </b-form-group>

      <b-form-invalid-feedback :state="passwordMatch">Please confirm your password.</b-form-invalid-feedback>
      <b-form-valid-feedback :state="passwordValidation">Looks Good.</b-form-valid-feedback>

      <br />
      <span>
        {{ $t("alreadyHaveAccount") }}
        <router-link :to="{ name: 'login' }">{{ $t("logIn") }}.</router-link>
      </span>
      <br />
      <br />

      <b-button type="submit" variant="primary">{{ $t("register") }}</b-button>
    </b-form>
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from "vuex";

export default {
  data: function () {
    return {
      form: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        passwordConfirm: "",
      },
    };
  },
  computed: {
    ...mapState(["user", "redirectPath"]),
    passwordValidation() {
      return (
        this.form.password != "" &&
        this.form.passwordConfirm != "" &&
        this.form.password == this.form.passwordConfirm
      );
    },
    passwordMatch() {
      return (
        this.form.password == null ||
        this.form.passwordConfirm == null ||
        this.form.password == this.form.passwordConfirm
      );
    },
  },
  methods: {
    ...mapMutations(["setRedirectPath"]),
    ...mapActions(["signUp"]),
    submit() {
      this.signUp({ vue: this, ...this.form });
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
