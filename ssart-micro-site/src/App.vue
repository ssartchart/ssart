<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/document">Documentation</router-link>
    </div>
    <!-- <Navbar />     -->
    <router-view/>
  </div>
</template>
<script>
// import Navbar from "./components/Navbar.vue"
export default {
  components: {
    // Navbar,
  }
}
</script>
<style>

</style>
