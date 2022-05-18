<template>
  <!-- Responsive navbar-->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a @click.prevent="$router.push({name: 'Home'}).catch(err => {})" class="navbar-brand" href="#!"><img :src="HomeImg" width="50px" height="50px">SSART Home</a>
        <div class="container px-5">
            
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto ">
                    <li class="nav-item">                        
                        <a @click.prevent="$router.push({name: 'ChartWizard'}).catch(err => {})" class="nav-link active" aria-current="page" href="#!">
                            메뉴 탭1(차트 코드)
                        </a>
                    </li>
                    <li class="nav-item"><a @click.prevent="$router.push({name: 'Documentation'}).catch(err => {})" class="nav-link active" aria-current="page" href="#!">
                            Documentation
                    </a></li>
                    <li class="nav-item"><a @click.prevent="$router.push({name: 'Sample'}).catch(err => {})" class="nav-link" href="#!">Sample</a></li>
                    <li class="nav-item"><a @click.prevent="$router.push({name: 'Contributing'}).catch(err => {})" class="nav-link" href="#!">Contributing</a></li>
                    
                    <li class="nav-item"><a @click="contact" class="nav-link" href="#!"> Contact </a></li>
                    <li class="nav-item"><a @click.prevent="$router.push({name: 'Licensed'}).catch(err => {})" class="nav-link" aria-current="page" href="#!">
                            Licensed
                    </a></li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
  name: "Navbar", 
  methods:{
      contact:function(){
          window.scrollTo(0, document.body.scrollHeight)
      }
  },
  data() {
    return {
        HomeImg : HomeImg,
    }
  }    
}
import HomeImg from "@/img/SSART-logo.png";
</script>

<style>
nav {
    position: fixed !important;
    top: 0;
    width: 100%;
    height: 4.25rem;
}
</style>
