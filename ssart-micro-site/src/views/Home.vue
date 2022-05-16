<template>
  <div>
    <header class="bg-dark py-4">
      <div class="container px-5">
          <div class="row gx-5 justify-content-center">
              <div class="col-lg-8">
                  <div class="text-center my-5">
                      <h1 class="display-5 fw-bolder text-white mb-2">SSART OPENSOURCE LIBRARY </h1>
                      <p class="lead text-white-50 mb-4">..............부연 설명..............</p>
                      <div class="d-grid gap-3 d-sm-flex justify-content-sm-center">
                          
                          <a class="btn btn-outline-light btn-lg px-4 me-sm-5" href="./documentations/getting_started.html">메뉴얼</a>
                          <a class="btn btn-outline-light btn-lg px-4 me-sm-5" href="./sample.html">차트 샘플</a>
                          <a class="btn btn-outline-light btn-lg px-4 me-sm-5" href="#!">GitHub</a>

                      </div>
                  </div>
              </div>
          </div>
      </div>
   </header>

    <!-- Chart Feature 섹션-->
        <section class="py-4 border-bottom" id="features">
          <div class="container px-3 my-4">
              <div class="row gx-5">
                  <div class="col-lg-4 mb-lg-0">
                      <div class="row" style="display: flex; align-items: center;">
                          <div class="col-sm-3">
                              <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                                  <i class="bi bi-bar-chart-line-fill"></i>                            
                              </div>
                          </div>
                          <div class="col-sm-9" style="display: table-cell; vertical-align: middle;">
                              <h2 class="h4 fw-bolder" style="display: flex; align-items: center;">Bar Chart - Vertical</h2>
                          </div>
                      </div>
                      <p>..............................막대 그래프 대략 설명..........................................</p>
                          <img class="card-img-top" :src='Bar' alt="Card image cap">
                        <a class="text-decoration-none" href="#!">
                            Bar Chart Detail
                            <i class="bi bi-arrow-right"></i>
                        </a>
                    </div>

                    <div class="col-lg-4 mb-lg-0">
                        <div class="row" style="display: flex; align-items: center;">
                            <div class="col-sm-3">
                                <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                                    <i class="bi bi-bar-chart-steps"></i>
                                </div>
                            </div>
                            <div class="col-sm-9" style="display: table-cell; vertical-align: middle;">
                                <h2 class="h4 fw-bolder" style="display: flex; align-items: center;">Bar Chart - Horizontal</h2>
                            </div>
                        </div>
                        <p>..............................막대 그래프 대략 설명..........................................</p>
                            <img class="card-img-top" :src="BarH" alt="Card image cap">
                        <a class="text-decoration-none" href="#!">
                            Bar chart Detail
                            <i class="bi bi-arrow-right"></i>
                        </a>
                    </div>

                    <div class="col-lg-4 mb-lg-0">
                        <div class="row" style="display: flex; align-items: center;">
                            <div class="col-sm-3">
                                <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                                    <i class="bi bi-graph-up"></i>
                                </div>
                            </div>
                            <div class="col-sm-9" style="display: table-cell; vertical-align: middle;">
                                <h2 class="h4 fw-bolder" style="display: flex; align-items: center;">Line Chart</h2>
                        </div>
                        <p>..............................라인 그래프 대략 설명..........................................</p>
                        <img class="card-img-top" :src="Line" alt="Card image cap">
                        <a class="text-decoration-none" href="#!">
                            Line Chart Detail
                            <i class="bi bi-arrow-right"></i>
                        </a>
                    </div>
                </div>

            </div>
          </div>
        <br><!-- 3개씩 container 나누기 -->
            <div class="container px-3 my-4">
                <div class="row gx-5">
                    <div class="col-lg-4 mb-lg-0">
                       
                        <div class="row" style="display: flex; align-items: center;">
                            <div class="col-sm-3">
                                <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                                    <i class="bi"><img :src="areaIco" alt="" style="display: block; width: 100%; height: auto;" ></i>
                                </div>
                            </div>
                            <div class="col-sm-9" style="display: table-cell; vertical-align: middle;">
                                <h2 class="h4 fw-bolder" style="display: flex; align-items: center;">Area Chart</h2>
                            </div>
                        </div>
                        <p>..............................area 그래프 대략 설명..........................................</p>
                            <img class="card-img-top" :src="Area" alt="Card image cap">
                        <a class="text-decoration-none" href="#!">
                            Area Chart Detail
                            <i class="bi bi-arrow-right"></i>
                        </a>
                    </div>

                    <div class="col-lg-4 mb-lg-0">
                        <div class="row" style="display: flex; align-items: center;">
                            <div class="col-sm-3">
                                <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                                    <i class="bi"><img :src="scatterIco" alt="" style="display: block; width: 60px; height: auto;" ></i>
                                </div>
                            </div>
                            <div class="col-sm-9" style="display: table-cell; vertical-align: middle;">
                                <h2 class="h4 fw-bolder" style="display: flex; align-items: center;">Scatter Chart</h2>
                            </div>
                        </div>
                        <p>..............................scatter 그래프 대략 설명..........................................</p>
                            <img class="card-img-top" :src="Scatter" alt="Card image cap">
                        <a class="text-decoration-none" href="#!">
                            Scatter Chart Detail
                            <i class="bi bi-arrow-right"></i>
                        </a>
                    </div>

                    <div class="col-lg-4 mb-lg-0">
                        <div class="row" style="display: flex; align-items: center;">
                            <div class="col-sm-3">
                                <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                                    <i class="bi"><img :src="bubbleIco" alt="" style="display: block; width: 60px; height: auto;" ></i>
                                </div>
                            </div>
                            <div class="col-sm-9" style="display: table-cell; vertical-align: middle;">
                                <h2 class="h4 fw-bolder" style="display: flex; align-items: center;">Bubble Chart</h2>
                        </div>
                        <p>..............................bubble 그래프 대략 설명..........................................</p>
                        <img class="card-img-top" :src="Bubble" alt="Card image cap">
                        <a class="text-decoration-none" href="#!">
                            Bubble Chart Detail
                            <i class="bi bi-arrow-right"></i>
                        </a>
                    </div>
                </div>

            </div>
          </div>
        <br><!-- 3개씩 container 나누기 -->
            <div class="container px-3 my-4">
                <div class="row gx-5">
                    <div class="col-lg-4 mb-lg-0">
                        <div class="row" style="display: flex; align-items: center;">
                            <div class="col-sm-3">
                                <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                                    <i class="bi"><img :src="donutIco" alt="" style="display: block; width: 60px; height: auto;" ></i>                        
                                </div>
                            </div>
                            <div class="col-sm-9" style="display: table-cell; vertical-align: middle;">
                                <h2 class="h4 fw-bolder" style="display: flex; align-items: center;">Donut Chart</h2>
                            </div>
                        </div>
                        <p>..............................donut 그래프 대략 설명..........................................</p>
                            <img class="card-img-top" :src="Donut" alt="Card image cap">
                        <a class="text-decoration-none" href="#!">
                            Donut Chart Detail
                            <i class="bi bi-arrow-right"></i>
                        </a>
                    </div>

                    <div class="col-lg-4 mb-lg-0">
                        <div class="row" style="display: flex; align-items: center;">
                            <div class="col-sm-3">
                                <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                                    <i class="bi bi-pie-chart"></i>
                                </div>
                            </div>
                            <div class="col-sm-9" style="display: table-cell; vertical-align: middle;">
                                <h2 class="h4 fw-bolder" style="display: flex; align-items: center;">Pie Chart</h2>
                            </div>
                        </div>
                        <p>......pie 그래프 대략 설명..........................................</p>
                            <img class="card-img-top" :src="Pie" alt="Card image cap">
                        <a class="text-decoration-none" href="#!">
                            Pie Chart Detail
                            <i class="bi bi-arrow-right"></i>
                        </a>
                    </div>

                    <div class="col-lg-4 mb-lg-0">
                        <div class="row" style="display: flex; align-items: center;">
                            <div class="col-sm-3">
                                <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                                    <i class="bi bi-pentagon"></i>
                                </div>
                            </div>
                            <div class="col-sm-9" style="display: table-cell; vertical-align: middle;">
                                <h2 class="h4 fw-bolder" style="display: flex; align-items: center;">Radar Chart</h2>
                        </div>
                        <p>..............................radar 그래프 대략 설명..........................................</p>
                        <img class="card-img-top" :src="Radar" alt="Card image cap">
                        <a class="text-decoration-none" href="#!">
                            Radar Chart Detail
                            <i class="bi bi-arrow-right"></i>
                        </a>
                    </div>
                </div>

            </div>
          </div>
        <br><!-- 3개씩 container 나누기 -->

        </section>    
  </div>
</template>

<script>
// @ is an alias to /src
import Bar from "@/img/IndexImg/1.Bar.png"
import BarH from "@/img/IndexImg/2.Bar2.png"
import Line from "@/img/IndexImg/3.Line.png"
import Area from "@/img/IndexImg/4.Area.png"
import Scatter from "@/img/IndexImg/5.Scatter.png"
import Bubble from "@/img/IndexImg/6.Bubble.png"
import Donut from "@/img/IndexImg/7.Donut.png"
import Pie from "@/img/IndexImg/8.Pie.png"
import Radar from "@/img/IndexImg/9.Radar.png"
import areaIco from "@/ico/area.png"
import bubbleIco from "@/ico/bubble.png"
import donutIco from "@/ico/donut.png"
import scatterIco from "@/ico/scatter.png"
export default {
  name: 'Home',
  components: {

  },
  data () {
    return {
      Bar, BarH, Line, Area, Scatter, Bubble, Donut, Pie, Radar, areaIco, bubbleIco, donutIco, scatterIco,
    }
  }
}
</script>
