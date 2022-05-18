<template>
  <div>
    
                    <h3> ScatterChart (산점도 차트)</h3>
                    <br>
                    <div class="chart-text">
                        <p>This chart is a type of plot or mathematical diagram using coordinates to display values for typically two variables for a set of data. </p>
                        <p>The data are displayed as a collection of points on the horizontal axis and the vertical axis.</p>
                        <p>산점도 차트(Scatter chart)는 직교 좌표계 (도표) 를 이용해 좌표상의 점을 표시함으로써 두 개 변수간의 관계를 나타내는 방법입니다.</p>
                        <p>두 변수 사이의 관계를 알 수 있습니다.</p>
                    </div>
                    <hr>
                    <h4>Example</h4>
                    <img src="@/img/IndexImg/5.Scatter.png" width="400px" height="400px"/>
                    <hr>
                    
                    
                    <details>
                        <summary>Try It</summary>
                        <pre style="color: #000">
    <span class="script-color1">const</span> data = {
        labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            datasets: [
                {
                    label: 'Fully Rounded',
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
                    label: 'Small Radius',
                    data: [1, 3, 3, 4, 5, 6, 7, 8, 9, 10]
                    ,
                    backgroundColor: "blue",
                },
                {
                    label: 'Small Radius',
                    data:
                        [
                            [1.5, 1], [2, 2], [3, 2], [4, 2], [5, 2], [6, 2]
                        ],
                },
                {
                    label: 'Small Radius',
                    data: [
                        { x: 1, y: 15 },
                        { x: 2, y: 23 },
                        { x: 3, y: 25 },
                        { x: 4, y: 32 },
                        { x: 5, y: 29 },
                        { x: -6, y: 13 },
                        { x: 7, y: 15 },
                    ],
                }
            ]
        };

    <span class="script-color1">const</span> config = {
            type: 'scatter',
            width: 500,
            height: 500,
            margin: { top: 40, left: 40, bottom: 40, right: 40 },
            padding: 0.1,
            data: data,
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'right',<span class="annotation">// top bottom left right</span>
                    },
                    title: {
                        display: true,
                        text: 'Scatter Chart'
                    },
                    xTitle: {
                        display:  true,
                        text: 'y'
                    },
                    yTitle: {
                        display:  true,
                        text: 'x'
                    },
                    xGrid: {
                        color: "#323233",<span class="annotation">// "rgb(255, 0, 0)" "rgba(255, 0, 0, 0.3)"</span>
                        dash: "10,3",
                        weight: 2,
                        opacity: .5
                    },
                    yGrid: {
                        display:  true,
                        color: "#323233", <span class="annotation">// "rgb(255, 0, 0)" "rgba(255, 0, 0, 0.3)"</span>
                        dash: "10,3", <span class="annotation">// 점선, 10만큼 칠하고 3만큼 빈공간</span>
                        weight: 2, <span class="annotation">// 선 두께</span>
                        opacity: .5 <span class="annotation">// 선 투명도</span>
                    },
                    background: {

                    },
                    menu: {
                        grid:  true,
                        xGrid: true,
                        yGrid:  true,
                        background:  true,
                        download:  true,
                    },

                },
                
                scales: {
                    xAxis: {
                        type: "number",
                        ticks: {
                            min: -10,
                            max: 10
                        }
                    },
                    dot: {
                        size: 10,
                        opacity: 1
                    }
                }
            },
        };
    </pre>
    <pre style="color: #000; ">
        &lt;script type="module"><span class="annotation">// 해당 모듈을 불러오는 명령어</span> 
            import * as Chart from './src/index.js';
            Chart.Chart('#scatter', config);      
        &lt;/script>
        </pre>
        <pre style="color: #000; ">
        &lt;div id="scatter">&lt;/div><span class="annotation">// 해당 차트를 만드는 명령어</span>
        </pre>
            </details>




        
    
    <br>



  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>