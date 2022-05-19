<template>
  <div>
    <h3 class="bold">AreaChart (영역 차트)</h3>
    <br>
      <p>This chart which is based on the line chart displays graphically quantitative data. </p>
      <p>The area between axis and line are commonly emphasized with colors, textures and hatchings. 
      <p>Commonly one compares two or more quantities with an area chart.</p>
      <p>영역 차트 (Araa chart) 는 도형의 넓이를 이용하여 데이터의 정량적 크기를 나타냅니다.</p>
      <p>면적 그래프는 두개 이상의 자료를 비교하는데 용이하게 사용됩니다.</p>
    <hr>
    <h4 class="bold">Example</h4>
    <img :src="Areaimg" width="500px" height="500px">

    <hr>
    <details>
                        <summary class="bold">Try It</summary>
                        <pre style="color: #000">
    <span class="script-color1">const</span> data = {
        labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        datasets: [
            {
                label: '라인 데이터1',
                data: [
                    { name: 1, value: 10 },
                    { name: 2, value: 29 },
                    { name: 3, value: 32 },
                    { name: 4, value: 25 },
                    { name: 5, value: 23 },
                    { name: 10, value: 15 }
                ],
                backgroundColor: "red",
            },
            {
                label: '라인 데이터2',
                data: [1, 3, 3, 4, 5, 6, 7, 8, 9, 10]
                ,
                backgroundColor: "blue",
            },
            {
                label: '라인 데이터3',
                data: [
                    { x: 1, y: 15 },
                    { x: 2, y: 23 },
                    { x: 3, y: 25 },
                    { x: 4, y: 32 },
                    { x: 5, y: NaN },
                    { x: 6, y: 8 },
                    { x: 7, y: 13 },
                    { x: 8, y: 15 },
                ],
            }
        ]
    };

    <span class="script-color1">const</span> config = {
        type: 'area',
        width: 500,
        height: 500,
        margin: { top: 40, left: 40, bottom: 40, right: 40 },
        padding: 0.1,
        data: data,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom',<span class="annotation">// top bottom left right</span>
                },
                title: {
                    display:  true,
                    text: 'Area Chart'
                },
                xTitle: {
                    display:  true,
                    text: 'y'
                },
                yTitle: {
                    display:  true,
                    text: 'x'
                },

                xGrid : {
                    display:  true,
                    color: "#323233",<span class="annotation">// "rgb(255, 0, 0)" "rgba(255, 0, 0, 0.3)"</span>
                    dash: "10,3",<span class="annotation">// 점선, 10만큼 칠하고 3만큼 빈공간</span>
                    weight: 1,  <span class="annotation">// 선 두께</span>
                    opacity: .5 <span class="annotation">// 선 투명도 </span>
                },

                yGrid: {
                    display:  true,
                    color: "#323233", <span class="annotation">// "rgb(255, 0, 0)" "rgba(255, 0, 0, 0.3)"</span>
                    dash: "10,3",<span class="annotation">// 점선, 10만큼 칠하고 3만큼 빈공간</span>
                    weight: 1, <span class="annotation">// 선 두께</span>
                    opacity: .5 <span class="annotation">// 선 투명도</span>
                },

                menu: {
                    <span class="annotation">// grid: true,</span>
                    xGrid:  true,
                    yGrid:  true,
                    download:  true,

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
                    width : 5,
                    opacity : .5
                },
                dot :{
                    size : 0,
                    opacity : 1,
                    visible :  true,
                }
            }
        },
    };
    </pre>
    <pre style="color: #000; ">
        &lt;script type="module"><span class="annotation">// 해당 모듈을 불러오는 명령어</span> 
            import * as Chart from './src/index.js';
            Chart.Chart('#area', config);      
        &lt;/script>
        </pre>
        <pre style="color: #000; ">
        &lt;div id="area">&lt;/div><span class="annotation">// 해당 차트를 만드는 명령어</span>
        </pre>
            </details>
  </div>

</template>

<script>

export default {
    data() {
    return {
        Areaimg : Areaimg,
    }
  }    
}
import Areaimg from "@/img/IndexImg/4.Area.png";

</script>


<style>
pre {
  padding-top: 20px;
  background: #f0f0f0;
  border-radius: 10px;
  width: 800px;
  word-wrap: break-word;
  font-family: "Fira Mono", Consolas, Menlo, Monaco, "Courier New", Courier, monospace;
  font-variant-ligatures: no-common-ligatures;
  text-rendering: optimizeSpeed;
  color: #0C4B33;
  font-size: 1em;
  text-align: start;
}

.tag {
  color: blue;
}

.script-color1 {
  color: blueviolet;
}
.annotation {
  color: rgb(52, 116, 69);
}

</style>