<template>
  <div>
    <header class="bg-dark py-4">
      <div class="container px-5">
          <div class="row gx-5 justify-content-center">
              <div class="col-lg-8">
                  <div class="text-center my-5">
                      <h1 class="display-5 fw-bolder text-white mb-2">SSART OPENSOURCE LIBRARY </h1>
                      <p class="lead text-white-50 mb-4" style="font-size: 1.2rem;">This Library helps you visualize your data in an easy and simple way.  </p>
                      <div class="d-grid gap-3 d-sm-flex justify-content-sm-center">
                          
                          <a class="btn btn-outline-light btn-lg px-4 me-sm-5" @click="goToDocumentation">메뉴얼</a>
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
                        <div>
                        <p class="text-secondary">This chart that represents categorical data as vertical rectangular bars with height and length proportional to the representation values.</p>
                        </div>
                            <img class="card-img-top" :src='Bar' alt="Card image cap">
                        <a class="text-decoration-none" @click="goToBar1Documentation">
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
                        <div>
                        <p class="text-secondary">This chart that represents categorical data as horizontal rectangular bars with height and length proportional to the representation values.</p>
                        </div>
                            <img class="card-img-top" :src='BarH' alt="Card image cap">
                        <a class="text-decoration-none" @click="goToBar2Documentation">
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
                        <div>
                            <p class="text-secondary">This chart that uses lines to show how different pieces of information are related to each other.</p><br>
                        </div>
                        <img class="card-img-top" :src='Line' alt="Card image cap"/>
                        <br/>
                        <a class="text-decoration-none" @click="goToLineDocumentation">
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
                        <div>
                        <p class="text-secondary">This chart which is based on the line chart displays graphically quantitative data. The area between axis and line are commonly emphasized with colors, textures and hatchings. Commonly one compares two or more quantities with an area chart.</p>
                        </div>
                            <img class="card-img-top" :src='Area' alt="Card image cap">
                        <a class="text-decoration-none" @click="goToAreaDocumentation">
                            Area Chart Detail
                            <i class="bi bi-arrow-right"></i>
                        </a>
                    </div>

                    <div class="col-lg-4 mb-lg-0">
                        <div class="row" style="display: flex; align-items: center;">
                            <div class="col-sm-3">
                                <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                                    <i class="bi"><img :src="scatterIco" alt="" style="display: block; width: 100%; height: auto;" ></i>
                                </div>
                            </div>
                            <div class="col-sm-9" style="display: table-cell; vertical-align: middle;">
                                <h2 class="h4 fw-bolder" style="display: flex; align-items: center;">Scatter Chart</h2>
                            </div>
                        </div>
                        <div>
                            <p class="text-secondary">This chart is a type of plot or mathematical diagram using coordinates to display values for typically two variables for a set of data. The data are displayed as a collection of points on the horizontal axis and the vertical axis.</p>
                        </div>
                            <img class="card-img-top" :src='Scatter' alt="Card image cap">
                        <a class="text-decoration-none" @click="goToScatterDocumentation">
                            Scatter Chart Detail
                            <i class="bi bi-arrow-right"></i>
                        </a>
                    </div>

                    <div class="col-lg-4 mb-lg-0">
                        <div class="row" style="display: flex; align-items: center;">
                            <div class="col-sm-3">
                                <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                                    <i class="bi"><img :src="bubbleIco" alt="" style="display: block; width: 100%; height: auto;" ></i>
                                </div>
                            </div>
                            <div class="col-sm-9" style="display: table-cell; vertical-align: middle;">
                                <h2 class="h4 fw-bolder" style="display: flex; align-items: center;">Bubble Chart</h2>
                        </div>
                        <div>
                            <p class="text-secondary">This chart displays three dimensions of data. Each entity is plotted as a disk that express two of the values through the disk's x-axis and y-axis and the thrid thrugh its size.</p>
                            <br/>
                        </div>

                        <img class="card-img-top" :src='Bubble' alt="Card image cap">
                        <a class="text-decoration-none" @click="goToBubbleDocumentation">
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
                                    <i class="bi bi-pie-chart"></i>
                                </div>
                            </div>
                            <div class="col-sm-9" style="display: table-cell; vertical-align: middle;">
                                <h2 class="h4 fw-bolder" style="display: flex; align-items: center;">Pie Chart</h2>
                            </div>
                        </div>
                        <div>
                            <p class="text-secondary">This chart is a graph showing the ratio of each part to the whole as a percentage in a fan shape. The central angle of each sector represents the proportion of the total, and has the advantage of being able to see the ratio at a glance. </p>
                            <br/>
                        </div>

                            <img class="card-img-top" :src='Pie' alt="Card image cap">
                        <a class="text-decoration-none" @click="goToCircleDocumentation">
                            Pie Chart Detail
                            <i class="bi bi-arrow-right"></i>
                        </a>
                    </div>

                    <div class="col-lg-4 mb-lg-0">
                        <div class="row" style="display: flex; align-items: center;">
                            <div class="col-sm-3">
                                <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                                    <i class="bi"><img :src="donutIco" alt="" style="display: block; width: 100%; height: auto;" ></i>                        
                                </div>
                            </div>
                            <div class="col-sm-9" style="display: table-cell; vertical-align: middle;">
                                <h2 class="h4 fw-bolder" style="display: flex; align-items: center;">Donut Chart</h2>
                            </div>
                        </div>
                        <div>
                            <p class="text-secondary">This chart is shaped like a donut with a hole in the middle. All its functions and characteristics are based on pie chart. </p>
                            <br/>
                            <br/>
                            <br/>
                        </div>

                            <img class="card-img-top" :src='Donut' alt="Card image cap">
                        <a class="text-decoration-none" @click="goToCircleDocumentation">
                            Donut Chart Detail
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
                        <div>
                            <p class="text-secondary">This is a diagram that divides various evaluation items into polygons according to the number of items, draws points according to the score of the items, and connects the points to form a line so that the balance between items can be seen at a glance.</p>
                            
                        </div>

                        <img class="card-img-top" :src='Radar' alt="Card image cap">
                        <a class="text-decoration-none" @click="goToRadarDocumentation">
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
  },
  methods: {
    goToDocumentation: function () {
        this.$router.push('document')
    },
    goToAreaDocumentation: function () {
        this.$router.push('document?field=Area')
    },
    goToBar1Documentation: function () {
        this.$router.push('document?field=Bar1')
    },
    goToBar2Documentation: function () {
        this.$router.push('document?field=Bar2')
    },
    goToBubbleDocumentation: function () {
        this.$router.push('document?field=Bubble')
    },
    goToCircleDocumentation: function () {
        this.$router.push('document?field=Circle')
    },
    goToLineDocumentation: function () {
        this.$router.push('document?field=Line')
    },
    goToPolarDocumentation: function () {
        this.$router.push('document?field=Polar')
    },
    goToRadarDocumentation: function () {
        this.$router.push('document?field=Radar')
    },
    goToScatterDocumentation: function () {
        this.$router.push('document?field=Scatter')
    }
  }
}
</script>
