<template>
  <div style="display: flex; flex-direction: row; justify-content: space-between;">
    <div class="card mb-4" style="position: static; width: 600px;">
      <div class="card-body bg-primary text-white " id="toAreaChart">Area Chart </div>
        <p class="m-3"> Area 차트 데이터 형식</p>
        &nbsp;&nbsp; 차트 이름 <input class="form-control" id="AreaChartTitle" type="text" placeholder="예시 차트 이름"  style="width: 90%; margin: 10px; margin-top: 5px;"/>
      
      <div class="row">
          <div class="col-sm-6">
              &nbsp;&nbsp; 데이터 1 <input class="form-control" id="AreainputData1" type="text" placeholder="ex) 10, 20, 30, 40, 50 ..."  style="width: 90%; margin: 10px; margin-top: 5px;"/>
          </div>
          <div class="col-sm-6">
              &nbsp;&nbsp;&nbsp; 데이터 1 라벨 <input class="form-control" id="AreaDataLabel1" type="text" placeholder="ex) 라벨1"  style="width: 80%; margin: 10px; margin-top: 5px;"/>
          </div>
      </div>

      <div class="row">
          <div class="col-sm-6">
              &nbsp;&nbsp; 데이터 2 <input class="form-control" id="AreainputData2" type="text" placeholder="ex) 5,10,15,20,25,30 ..." style="width: 90%; margin: 10px; margin-top: 5px;"/>
          </div>
          <div class="col-sm-6">
              &nbsp;&nbsp;&nbsp; 데이터 2 라벨 <input class="form-control" id="AreaDataLabel2" type="text" placeholder="ex) 라벨2"  style="width: 80%; margin: 10px; margin-top: 5px;"/>
          </div>
      </div>

      <div class="row">
          <div class="col-sm-6">
              &nbsp;&nbsp; 데이터 3 <input class="form-control" id="AreainputData3" type="text" placeholder="ex) 1, 2, 3, 4, 4, 4 ..." style="width: 90%; margin: 10px; margin-top: 5px;"/>
          </div>
          <div class="col-sm-6">
              &nbsp;&nbsp;&nbsp; 데이터 3 라벨 <input class="form-control" id="AreaDataLabel3" type="text" placeholder="ex) 라벨3"  style="width: 80%; margin: 10px; margin-top: 5px;"/>
          </div>
      </div>
      
      <div class="row">
          <div class="col-sm-4">
              &nbsp;&nbsp; 데이터1 색깔  <select class="form-select" id="AreaColor1" style="margin: 3px; width: 95%;">
                  <option>빨강</option>
                  <option selected>주황</option>
                  <option>노랑</option>
                  <option>초록</option>
                  <option>파랑</option>
                </select>
          </div>
          <div class="col-sm-4">
              &nbsp;&nbsp; 데이터2 색깔  <select class="form-select" id="AreaColor2" style="margin: 3px; width: 95%;">
                  <option>빨강</option>
                  <option>주황</option>
                  <option>노랑</option>
                  <option selected>초록</option>
                  <option>파랑</option>
                </select>
          </div>
          <div class="col-sm-4">
              &nbsp;&nbsp; 데이터3 색깔  <select class="form-select" id="AreaColor3" style="margin: 3px; width: 95%;">
                  <option>빨강</option>
                  <option>주황</option>
                  <option>노랑</option>
                  <option>초록</option>
                  <option selected>파랑</option>
                </select>
          </div>
        </div>
        <br>
        
        <div class="card-footer d-flex align-items-center justify-content-between">
          <button type="button" class="btn btn-primary" @click="generate">생성</button>
          <div class="small "><i class="fas fa-angle-right"></i></div>
      </div>
  </div>

  <div class="col-md-6" style="width: 600px; height: 569px;">
    <div class="card mb-4" style="position: static; height: 100%;">
        <div class="card-header">
            <i class="bi bi-search"></i>
            결과 예시
        </div>
        <div id="result" class="card-body" style="width: 500px; height: 500px;">
            
        </div>
    </div>
    
  </div>
</div>
</template>

<script>
import * as Chart from 'ssart'

export default {
  name: 'AreaSample',
  methods: {
    generate: function () {
      const dataArea = {
        labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        datasets: [
          {
            label: '라벨 1',
            data: [
              10,20,30,40,50
            ],
            backgroundColor: "",

          },
          {
            label: '라벨 2',
            data: [5,10,15,20,25,30]
            ,
            backgroundColor: "",
          },
          {
            label: '라벨 3',
            data:
              [
                [1, 1], [2, 2], [3, 3], [4, 4], [5, 4], [6, 4]
              ],
          },
          
        ]
      };

      const configArea = {
        type: 'area',
        width: 500,
        height: 500,
        margin: { top: 40, left: 40, bottom: 40, right: 40 },
        padding: 0.1,
        data: dataArea,
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'bottom',
            },
            title: {
              display: true,
              text: 'Chart'
            },
            xTitle: {
              display: true,
              text: 'y'
            },
            yTitle: {
              display: true,
              text: 'x'
            },
            yGrid: {
              display: true,
              color: "#323233",
              dash: "10,3",
              weight: 1,
              opacity: .5
            },
            menu: {
              yGrid: true,
              download: true
            }
          },
          scales: {
            xAxis : {
              type : "number",
              ticks:{

              }
            },    
            yAxis : {
              ticks:{

              }
            },
            line :{
              width : 0,
              opacity : 0
            },
            dot :{
              size : 1,
              opacity : 0,
              visible : false
            }
          }
        },
      };
      // const chartResult = document.getElementById("result");
      // chartResult.innerText = '';

      //data 갱신
      var chartName = document.getElementById("AreaChartTitle").value;
      var areaData1 = document.getElementById("AreainputData1").value;
      var areaData2 = document.getElementById("AreainputData2").value;
      var areaData3 = document.getElementById("AreainputData3").value;
      var areaDataLabel1 = document.getElementById("AreaDataLabel1").value;
      var areaDataLabel2 = document.getElementById("AreaDataLabel2").value;
      var areaDataLabel3 = document.getElementById("AreaDataLabel3").value;
      
      var areaColor1 = document.getElementById("AreaColor1").selectedIndex;
      var areaColor2 = document.getElementById("AreaColor2").selectedIndex;
      var areaColor3 = document.getElementById("AreaColor3").selectedIndex;
      var colorHex = ["#ff0000", "#ff7f00", "#ffff00", "#00ff00", "#0000ff" ];
      
      configArea.options.plugins.title.text = chartName;
      
      if(areaData1!=null && areaData1!="") {
          var dataArray1 = areaData1.replace(/ /g,"").split(",");
          dataArea.datasets[0].data = dataArray1;
      }
      if(areaDataLabel1!=null && areaDataLabel1) {
          dataArea.datasets[0].label = areaDataLabel1;
      }

      if(areaData2!=null && areaData2!="") {
          var dataArray2 = areaData2.replace(/ /g,"").split(",");
          dataArea.datasets[1].data = dataArray2;
      }
      if(areaDataLabel2!=null && areaDataLabel2) {
          dataArea.datasets[1].label = areaDataLabel2;
      }

      if(areaData3!=null && areaData3!="") {
          var dataArray3 = areaData3.replace(/ /g,"").split(",");
          dataArea.datasets[2].data = dataArray3;
      }
      if(areaDataLabel3!=null && areaDataLabel3) {
          dataArea.datasets[2].label = areaDataLabel3;
      }

      
      dataArea.datasets[0].backgroundColor=colorHex[areaColor1];
      dataArea.datasets[1].backgroundColor=colorHex[areaColor2];
      dataArea.datasets[2].backgroundColor=colorHex[areaColor3];

      Chart.Chart('#result', configArea);
      // console.log(data);

    }
  }
}
</script>

<style>

</style>