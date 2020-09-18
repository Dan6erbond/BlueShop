import DirectusSDK from "@directus/sdk-js";
import Vue from "vue";

const client = new DirectusSDK({
  url: "https://directus.ravianand.bluemouse.ch/directus/public",
  project: "directusapp",
  storage: window.localStorage,
});

Object.defineProperties(Vue.prototype, {
  $client: { value: client },
});
