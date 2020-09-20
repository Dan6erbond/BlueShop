<template>
  <div>
    <div id="nav">
      <router-link :to="{ name: 'home' }">{{ $t("home") }}</router-link> |
      <router-link :to="{ name: 'categories' }">{{ $t("categories") }}</router-link>
    </div>
    <router-view />
  </div>
</template>
