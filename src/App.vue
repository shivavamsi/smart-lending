<template>
  <div id="app">
    <AppHeader></AppHeader>

    <router-view></router-view>

    <AppFooter></AppFooter>
  </div>
</template>

<script>
import AppHeader from "./components/layout/AppHeader.vue";
import AppFooter from "./components/layout/AppFooter.vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

export default {
  // comment
  name: "app",
  components: {
    AppHeader: AppHeader,
    AppFooter: AppFooter
  }
};
</script>

<style>
</style>
