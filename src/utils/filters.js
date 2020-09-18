import Vue from "vue";

Vue.filter("chf", function(value) {
  if (!value) return "";
  return new Number(value).toLocaleString("de-CH", {
    minimumFractionDigits: 2,
  }) + " CHF";
});
