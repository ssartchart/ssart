<template>
  <!-- Responsive navbar-->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a @click.prevent="$router.push({name: 'Home'}).catch(err => {})" class="navbar-brand" href="#!"><img :src="HomeImg" width="50px" height="50px">SSART Home</a>
            <button class="navbar-toggler collapsed" style="margin-right: 2rem" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="navbar-collapse collapse px-5" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto" style="margin-right: 50px">
                    <li class="nav-item" style="margin: 0px 5px 0px 5px">                        
                        <a @click.prevent="$router.push({path: '/chart-wizard/information'}).catch(err => {}); scrollTop();" :class="{'nav-link': true, 'active': currentPageName == 'ChartWizard'}" aria-current="page" href="#!">
                            Chart Maker
                        </a>
                    </li>
                    <li class="nav-item" style="margin: 0px 5px 0px 5px"><a @click.prevent="$router.push({name: 'Documentation'}).catch(err => {}); scrollTop();" :class="{'nav-link': true, 'active': currentPageName == 'Documentation'}" aria-current="page" href="#!">
                            Documentation
                    </a></li>
                    <li class="nav-item" style="margin: 0px 5px 0px 5px"><a @click.prevent="$router.push({name: 'ChartSample'}).catch(err => {}); scrollTop();" :class="{'nav-link': true, 'active': currentPageName == 'ChartSample'}" href="#!">Sample</a></li>
                    <li class="nav-item" style="margin: 0px 5px 0px 5px"><a @click.prevent="$router.push({name: 'Contributing'}).catch(err => {}); scrollTop();" :class="{'nav-link': true, 'active': currentPageName == 'Contributing'}" href="#!">Contributing</a></li>
                    
                    <li class="nav-item" style="margin: 0px 5px 0px 5px"><a @click="contact" class="nav-link" href="#!"> Contact </a></li>
                    <li class="nav-item" style="margin: 0px 5px 0px 5px"><a @click.prevent="$router.push({name: 'Licensed'}).catch(err => {}); scrollTop();" :class="{'nav-link': true, 'active': currentPageName == 'Licensed'}" aria-current="page" href="#!">
                            Licensed
                    </a></li>
                </ul>
            </div>

    </nav>
</template>

<script>
export default {
  name: "Navbar", 
  props: {
      currentPageName: String
  },
  methods:{
      contact:function(){
          window.scrollTo(0, document.body.scrollHeight)
      },
      scrollTop:function() {
          window.scrollTo(0, 0)
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
