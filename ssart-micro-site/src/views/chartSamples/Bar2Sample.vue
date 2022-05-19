<template>
  <div style="display: flex; flex-direction: row; justify-content: space-between;">
    <div class="card mb-4" style="position: static; width: 600px;">
      <div class="card-body bg-primary text-white ">Bar Chart </div>
        <p class="m-3"> Bar 차트 데이터 형식</p>
        &nbsp;&nbsp; 차트 이름 <input class="form-control" id="ChartTitle" type="text" placeholder="예시 차트 이름"  style="width: 90%; margin: 10px; margin-top: 5px;"/>
      
      <div class="row">
          <div class="col-sm-6">
              &nbsp;&nbsp; 데이터 1 <input class="form-control" id="inputData1" type="text" placeholder="ex) 10, 20, 30, 40, 50 ..."  style="width: 90%; margin: 10px; margin-top: 5px;"/>
          </div>
          <div class="col-sm-6">
              &nbsp;&nbsp;&nbsp; 데이터 1 라벨 <input class="form-control" id="DataLabel1" type="text" placeholder="ex) 라벨1"  style="width: 80%; margin: 10px; margin-top: 5px;"/>
          </div>
      </div>

      <div class="row">
          <div class="col-sm-6">
              &nbsp;&nbsp; 데이터 2 <input class="form-control" id="inputData2" type="text" placeholder="ex) 5,10,15,20,25,30 ..." style="width: 90%; margin: 10px; margin-top: 5px;"/>
          </div>
          <div class="col-sm-6">
              &nbsp;&nbsp;&nbsp; 데이터 2 라벨 <input class="form-control" id="DataLabel2" type="text" placeholder="ex) 라벨2"  style="width: 80%; margin: 10px; margin-top: 5px;"/>
          </div>
      </div>

      <div class="row">
          <div class="col-sm-6">
              &nbsp;&nbsp; 데이터 3 <input class="form-control" id="inputData3" type="text" placeholder="ex) 1, 2, 3, 4, 4, 4 ..." style="width: 90%; margin: 10px; margin-top: 5px;"/>
          </div>
          <div class="col-sm-6">
              &nbsp;&nbsp;&nbsp; 데이터 3 라벨 <input class="form-control" id="DataLabel3" type="text" placeholder="ex) 라벨3"  style="width: 80%; margin: 10px; margin-top: 5px;"/>
          </div>
      </div>
      
      <div class="row">
          <div class="col-sm-4">
              &nbsp;&nbsp; 데이터1 색깔  <select class="form-select" id="Color1" style="margin: 3px; width: 95%;">
                  <option selected>빨강</option>
                  <option>주황</option>
                  <option>노랑</option>
                  <option>초록</option>
                  <option>파랑</option>
                </select>
          </div>
          <div class="col-sm-4">
              &nbsp;&nbsp; 데이터2 색깔  <select class="form-select" id="Color2" style="margin: 3px; width: 95%;">
                  <option>빨강</option>
                  <option>주황</option>
                  <option>노랑</option>
                  <option selected>초록</option>
                  <option>파랑</option>
                </select>
          </div>
          <div class="col-sm-4">
              &nbsp;&nbsp; 데이터3 색깔  <select class="form-select" id="Color3" style="margin: 3px; width: 95%;">
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
  name: 'Bar2Sample',
  methods: {
    generate: function () {
      const data = {
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
                [7, 1], [8, 2], [3, 3], [4, 4], [5, 4], [6, 4]
              ],
          },
          
        ]
      };

      const config = {
        type: 'barH',
        width: 500,
        height: 500,
        margin: { top: 40, left: 40, bottom: 40, right: 40 },
        padding: 0.1,
        data: data,
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
              width : 10,
              opacity : .5
            },
            dot :{
              size : 0,
              opacity : 1,
              visible : true
            }
          }
        },
      };

      //data 갱신
      var chartName = document.getElementById("ChartTitle").value;
      var Data1 = document.getElementById("inputData1").value;
      var Data2 = document.getElementById("inputData2").value;
      var Data3 = document.getElementById("inputData3").value;
      var DataLabel1 = document.getElementById("DataLabel1").value;
      var DataLabel2 = document.getElementById("DataLabel2").value;
      var DataLabel3 = document.getElementById("DataLabel3").value;
      
      var Color1 = document.getElementById("Color1").selectedIndex;
      var Color2 = document.getElementById("Color2").selectedIndex;
      var Color3 = document.getElementById("Color3").selectedIndex;
      var colorHex = ["#ff0000", "#ff7f00", "#ffff00", "#00ff00", "#0000ff" ];
      
      config.options.plugins.title.text = chartName;
      
      if(Data1!=null && Data1!="") {
          var dataArray1 = Data1.replace(/ /g,"").split(",");
          data.datasets[0].data = dataArray1;
      }
      if(DataLabel1!=null && DataLabel1) {
          data.datasets[0].label = DataLabel1;
      }

      if(Data2!=null && Data2!="") {
          var dataArray2 = Data2.replace(/ /g,"").split(",");
          data.datasets[1].data = dataArray2;
      }
      if(DataLabel2!=null && DataLabel2) {
          data.datasets[1].label = DataLabel2;
      }

      if(Data3!=null && Data3!="") {
          var dataArray3 = Data3.replace(/ /g,"").split(",");
          data.datasets[2].data = dataArray3;
      }
      if(DataLabel3!=null && DataLabel3) {
          data.datasets[2].label = DataLabel3;
      }

      
      data.datasets[0].backgroundColor=colorHex[Color1];
      data.datasets[1].backgroundColor=colorHex[Color2];
      data.datasets[2].backgroundColor=colorHex[Color3];

      Chart.Chart('#result', config);
      // console.log(data);

    }
  }
}
</script>

<style>

</style>