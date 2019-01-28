<template>
  <div>AppContent</div>
</template>

<script>
import Home from "../pages/Home.vue";
import Apply from "../pages/Apply.vue";
import FAQ from "../pages/FAQ.vue";
import Contact from "../pages/Contact.vue";
import About from "../pages/About.vue";
import Reviews from "../pages/Reviews.vue";

export default {
  name: "AppContent",
  components: {},
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
