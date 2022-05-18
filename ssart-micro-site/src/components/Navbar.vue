<template>
  <!-- Responsive navbar-->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container px-5">
            <a @click.prevent="$router.push({name: 'Home'}).catch(err => {})" class="navbar-brand" href="#!">네비게이션 바 (필요한진 모르겠음)</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">                        
                        <a @click.prevent="$router.push({name: 'ChartWizard'}).catch(err => {})" class="nav-link active" aria-current="page" href="#!">
                            메뉴 탭1(차트 코드)
                        </a>
                    </li>
                    <li class="nav-item"><a @click.prevent="$router.push({name: 'Sample'}).catch(err => {})" class="nav-link" href="#!">메뉴 탭2</a></li>
                    <li class="nav-item"><a @click.prevent="$router.push({name: 'Documentation'}).catch(err => {})" class="nav-link active" aria-current="page" href="#!">
                            Documentation
                        </a></li>
                       <li class="nav-item"><a @click.prevent="$router.push({name: 'Licensed'}).catch(err => {})" class="nav-link active" aria-current="page" href="#!">
                            Licensed
                        </a></li>
                    <li class="nav-item"><a class="nav-link" href="#!">Contact Us</a></li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
  name: "Navbar",    
}
</script>

<style>

</style>
