<template>
    
    <div>
        <h3 class="bold"> BubbleChart (거품 차트)</h3>
        <br>        
        <div class="chart-text">            
            <p>This chart displays three dimensions of data.</p>
            <p>Each entity is plotted as a disk that express two of the values through the disk's x-axis and y-axis and the thrid thrugh its size.</p>
            <p>거품형 차트(Bubble Chart)는 3차원 데이터를 나타내는 차트 유형입니다. 각각의 좌표 x,y 값과 이의 가중치 ( v , 거품의 크기 ) 로 구성되어있습니다.</p>
            <p>거품형 차트는 사회, 경제, 의료 및 기타 과학적 관계에 대한 이해를 용이하게 할 수 있습니다.</p>
        </div>
        <hr>
        <h4 class="bold">Example</h4>
        <img src="@/img/IndexImg/6.Bubble.png" width="400px" height="400px"/>
        <hr>        
        
                    <details>
                        <summary class="bold">Try It</summary>
                        <pre style="color: #000">
        <span class="script-color1">const</span> data = {
            labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            datasets: [
                {
                    label: 'Small Radius',
                    data:
                        [
                            [1, -10, 1], [20, 20, 2], [3, 20, 3], [4, 20, 4], [5, 20, 5], [6, 20, 6]
                        ],
                },
                {
                    label: 'Small Radius',
                    data: [
                        { x: 1, y: 15, r: 10 },
                        { x: 2, y: 23, r: 20 },
                        { x: 3, y: 25, r: 30 },
                        { x: 4, y: 32, r: 30 },
                        { x: 5, y: 29, r: 100 },
                        { x: 6, y: 13, r: 20 },
                        { x: 7, y: 15, r: 50 },
                    ],
                },
                {
                    label: 'Small Radius',
                    data: [
                        { x: 10, y: 150, r: 10 },
                        { x: 5, y: 230, r: 20 },
                        { x: 6, y: 250, r: 30 },
                        { x: 7, y: 32, r: 30 },
                        { x: 8, y: 29, r: 100 },
                        { x: 9, y: 13, r: 20 },
                        { x: 10, y: 15, r: 50 },
                    ],
                },
                {
                    label: 'Small Radius',
                    data: [
                        { x: 1, y: 15, r: 10 },
                        { x: 2, y: 23, r: 20 },
                        { x: 3, y: 25, r: 30 },
                        { x: 4, y: 32, r: 30 },
                        { x: 5, y: 29, r: 100 },
                        { x: 6, y: 13, r: 20 },
                        { x: 7, y: 15, r: 50 },
                    ],
                }
            ]
        };

        <span class="script-color1">const</span> config = {
            type: 'bubble',
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
                        text: 'bubble Chart',
                        color: '#000000',
                        align: 'center'<span class="annotation">//start, end, center</span>
                    },
                    xTitle: {
                        display:  true,
                        text: 'x축',
                        size: "15px",
                        // color: 'rgba(100, 150, 0, .5)',
                        align: 'center'<span class="annotation">//start, end, center</span>
                    },
                    yTitle: {
                        display: true,
                        text: 'y축',
                        size: "15px",
                        rotate: true,
                        position: 'left',
                        color: '#000000',
                        align: 'center'<span class="annotation">//top, bottom, center</span>
                    },
                    xGrid: {
                        color: "rgb(255, 0, 0)",<span class="annotation">// "rgb(255, 0, 0)" "rgba(255, 0, 0, 0.3)"</span>
                        dash: "10,3",
                        weight: 1,
                        opacity: .5,
                    },
                    yGrid: {
                        color: "#323233",<span class="annotation">// "rgb(255, 0, 0)" "rgba(255, 0, 0, 0.3)"</span>
                        dash: "10,3", <span class="annotation">// 점선, 10만큼 칠하고 3만큼 빈공간</span>
                        weight: 1, <span class="annotation">// 선 두께</span>
                        opacity: .5,<span class="annotation">// 선 투명도</span>
                    },
                    menu: {

                    }
                },
                scales: {
                    xAxis: {
                        <span class="annotation"> // type: "number",</span>
                        ticks: {
                            min: 0,
                            max: 10
                        }
                    },
                    yAxis: {
                        ticks: {
                            max: 80,
                            tick: 20
                        }
                    },
                    r: {
                        size: {
                            min: 10,
                            max: 30
                        }
                    },
                    fillopacity: 0.5
                }
            },
        };

    </pre>
    <pre style="color: #000; ">
        &lt;script type="module"><span class="annotation">// 해당 모듈을 불러오는 명령어</span> 
            import * as Chart from './src/index.js';
            Chart.Chart('#bubble', config);      
        &lt;/script>
        </pre>
        <pre style="color: #000; ">
        &lt;div id="bubble">&lt;/div><span class="annotation">// 해당 차트를 만드는 명령어</span>
        </pre>
            </details>



                </div>

</template>

<script>
export default {
  name: 'BubbleChartDoc'
}
</script>

<style>

</style>