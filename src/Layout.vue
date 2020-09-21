<template>
  <div>
    <header-nav></header-nav>
    <b-container id="content" fluid>
      <b-row>
        <b-col lg="3" md="12">
          <category-nav id="category-nav"></category-nav>
        </b-col>
        <b-col lg="9" md="12">
          <div>
            <router-view />
          </div>
        </b-col>
      </b-row>
    </b-container>
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
