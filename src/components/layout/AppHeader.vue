<template>
  <div>
    <b-navbar toggleable="md" type="dark" variant="info">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand>
        <router-link to="/" style="color:#fff;">Lending Group</router-link>
      </b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav class="ml-auto">
          <b-nav-item>
            <router-link to="/" style="color:#fff;">Home</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="/apply" style="color:#fff;">Apply</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="/faq" style="color:#fff;">FAQ</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="/contact" style="color:#fff;">Contact Us</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="/about" style="color:#fff;">About Us</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="/reviews/view" style="color:#fff;">Customer Reviews</router-link>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "AppHeader",
  data() {
    return {};
  },
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
