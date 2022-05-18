<template>
  
                <div>
                    <h3> LineChart (선 차트)</h3>
                    <br>
                    
                    <div class="chart-text">
                        <p>This chart that uses lines to show how different pieces of information are related to each other.</p>
                        <p>각 데이터를 점으로 표시하고 그 점들을 선분으로 이어 그린 차트입니다.</p>
                        <p>데이터 값이 변화하는 모양과 정도를 쉽게 알 수 있습니다.</p>
                    </div>
                    <hr>
                    <h4>Example</h4>
                    <img src="@/img/IndexImg/3.Line.png" width="500px" height="500px"/>
                    <hr>
                    
                    
                    <details>
                        <summary>Try It</summary>
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
                    data: [1, 3, 3, 4, 5, 6, 7, 8, 9, 10],
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
            type: 'line',
            width: 500,
            height: 500,
            margin: { top: 40, left: 40, bottom: 40, right: 40 },
            padding: 0.1,
            data: data,
            options: {
                responsive:  true,
                plugins: {
                    legend: {
                        position: 'bottom',<span class="annotation">// top bottom left right</span>
                    },
                    title: {
                        display:  true,
                        text: 'Line Chart'
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
                        dash: "10,3",<span class="annotation"> // 점선, 10만큼 칠하고 3만큼 빈공간</span>
                        weight: 1, <span class="annotation">// 선 두께</span>
                        opacity: .5 <span class="annotation">// 선 투명도 </span>
                    },

                    yGrid: {
                        display:  true,
                        color: "#323233",<span class="annotation">// "rgb(255, 0, 0)" "rgba(255, 0, 0, 0.3)"</span>
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
                    xAxis: {
                        type: "number",
                        ticks: {

                        }
                    },
                    yAxis: {
                        ticks: {
                            max: 20
                        }
                    },
                    line: {
                        width: 5,
                        opacity: 0.6
                    },
                    dot: {
                        size: 0,
                        opacity: 1,
                        visible:  true,
                    }
                }
            },
        };
    </pre>
    <pre style="color: #000; ">
        &lt;script type="module"><span class="annotation">// 해당 모듈을 불러오는 명령어</span> 
            import * as Chart from './src/index.js';
            Chart.Chart('#line', config);      
        &lt;/script>
        </pre>
        <pre style="color: #000; ">
        &lt;div id="line">&lt;/div><span class="annotation">// 해당 차트를 만드는 명령어</span>
        </pre>
            </details>



                </div>

</template>

<script>
export default {

}
</script>

<style scoped>
  body {
    margin: 0;
    background: #f8f8f8;
  }
  
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    width: 12%;
    background-color: #f1f1f1;
    position: fixed;
    height: 100%;
    overflow: auto;
  }
  
  li a {
    display: block;
    color: #000;
    padding: 10px;
    text-decoration: none;
    height: 70px;
    text-align: center;
    line-height: 35px;
  }
  
  li a.active {
    background-color: #555;
    color: white;
  }
  
  li a:hover:not(.active) {
    background-color: #555;
    color: white;
  }
  
  #navHome {
      height: 56px;
  }
</style>