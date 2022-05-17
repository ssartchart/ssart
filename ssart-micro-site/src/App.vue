<template>
  <div id="app">
    <Navbar />    
    <router-view/>
    <!-- Footer-->
    <footer class="py-5 bg-dark">
        <div class="container px-5"><p class="m-0 text-center text-white"> Footer 섹션 </p></div>
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
