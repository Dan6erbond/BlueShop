<template>
  <div>
    <header-nav></header-nav>
    <div class="d-flex" id="content">
      <category-nav id="category-nav" class="w-25"></category-nav>
      <div class="w-75">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import HeaderNav from "@/components/HeaderNav.vue";
import CategoryNav from "@/components/CategoryNav.vue";

export default {
  components: {
    HeaderNav: HeaderNav,
    CategoryNav: CategoryNav,
  },
};
</script>

<style>
#nav {
  padding: 30px 10px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.nav-link.router-link-exact-active {
  color: #42b983;
}

#content {
  padding: 30px 10px;
}

#category-nav {
  min-width: 300px;
}
</style>
