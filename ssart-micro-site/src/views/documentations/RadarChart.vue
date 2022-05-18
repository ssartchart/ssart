<template>
  <div>
        
                    <h3> RadarChart (레이더 차트)</h3>
                    <br>
                    
                    <div class="chart-text">
                        <p>This is a diagram that divides various evaluation items into polygons according to the number of items, </p>
                        <p>draws points according to the score of the items, and connects the points to form a line so that the balance between items can be seen at a glance.</p>
                        <p>레이다 차트(Radar Chart)는 어떤 측정 목표에 대한 평가항목이 여러 개일 때 항목 수에 따라 원을 같은 간격으로 나누고, </p>
                        <p>중심으로부터 일정 간격으로 동심으로 척도를 재는 칸을 나누어 각 평가항목의 정량화된 점수에 따라 </p>
                        <p>그 위치에 점을 찍고 평가항목간 점을 이어 선으로 만들어 항목 간 균형을 한눈에 볼 수 있도록 해주는 차트입니다.</p>
                        <p>여러 측정 목표를 함께 겹쳐 놓아 비교하기에도 편리합니다. 각 항목 간 비율뿐만 아니라 균형과 경향을 직관적으로 알 수 있습니다.</p>
                    </div>
                    <hr>
                    <h4>Example</h4>
                    <img src="@/img/IndexImg/9.Radar.png" width="400px" height="400px"/>
                    <hr>
                    
                    
                    <details>
                        <summary>Try It</summary>
                        <pre style="color: #000">
    <span class="script-color1">const</span> data = {
        labels: ['ability1', 'ability2', 'ability3', 'ability4' ,'ability5'],
            datasets: [
                { 
                    label: 'A',
                    data : [270,270,120,1,140]
                },
                { 
                    label: 'B', 
                    data :[140,100,280,250,120],
                },
                { 
                    label: 'C',
                    data : [100,190,140,12,270],
                },
                { 
                    label : 'D',
                    data : [20,200,200,52,230],
                }
            ],        
        };
    <span class="script-color1">const</span> config = {
            type: 'radar',
            width: 500,
            height: 500,
            margin: { top: 40, left: 40, bottom: 40, right: 40 },
            padding: 0.1,
            data: data,
            depth:7,<span class="annotation">// 구간 갯수</span>
            poly: true, <span class="annotation">// If you change it to false, the axis appears circular</span>
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',<span class="annotation">// top bottom left right</span>
                    },
                    title: {
                        display:  true,
                        text: 'Radar Chart'
                    },
                    sort:  true,
                    view:  true,
                    menu: {
                        download: true
                    }
                },
                scales:{
                    depth : 7 
                }
            }
        }
    </pre>
    <pre style="color: #000; ">
        &lt;script type="module"><span class="annotation">// 해당 모듈을 불러오는 명령어</span> 
            import * as Chart from './src/index.js';
            Chart.Chart('#radar', config);      
        &lt;/script>
        </pre>
        <pre style="color: #000; ">
        &lt;div id="radar">&lt;/div><span class="annotation">// 해당 차트를 만드는 명령어</span>
        </pre>
            </details>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>