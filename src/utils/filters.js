import Vue from "vue";

Vue.filter("chf", function(value) {
  if (!value) return "";
  return (
    new Number(value).toLocaleString("de-CH", {
      minimumFractionDigits: 2,
    }) + " CHF"
  );
});

Vue.filter("medium", function(value) {
  if (!value) return;
  var count = 35;
  return value.slice(0, count) + (value.length > count ? "..." : "");
});

Vue.filter("striphtml", function(value) {
  var div = document.createElement("div");
  div.innerHTML = value;
  var text = div.textContent || div.innerText || "";
  return text;
});
