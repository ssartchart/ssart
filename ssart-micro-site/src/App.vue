<template>
  <div id="app">
    <Navbar />    
    <router-view/>
    <!-- Footer-->
    <footer class="py-5 bg-dark">
        <div class="container px-5">
          <div class="m-0 text-center text-white">
          <p >Copyright (c) 2022 ssart </p>
          <p>Library released under <a href="https://opensource.org/licenses/MIT">MIT license</a> </p>
          <p>Mail : npm_ssart@naver.com </p>
          <p>Git : <a href="https://github.com/ssartchart/ssart">ssart git</a></p>
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
