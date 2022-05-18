<template>
  <div id="app">
    <Navbar />    
    <router-view/>
    <!-- Footer-->
    <footer class="py-5 bg-dark">
        <div class="container px-5">
          <div class="m-0 text-center text-white">
          <p >Copyright (c) 2022 ssart </p>
          <p>our git </p>
          <p>our git </p>
          <p>our git </p>
          <p>our git </p>
          <p>our git </p>
          </div>
        </div>
    </footer>
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
