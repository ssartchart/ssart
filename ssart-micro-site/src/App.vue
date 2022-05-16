<template>
  <div id="app">
<<<<<<< HEAD
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/document">Documentation</router-link>
    </div>
=======
    <Navbar />    
>>>>>>> 5862fda273c9fcccbe50c8d2e994930898e07d23
    <router-view/>
  </div>
</template>
<script>
import Navbar from "./components/Navbar.vue"
export default {
  components: {
    Navbar,
  }
}
</script>
<style>

</style>
