<template>
    <div>
        <h3>PolarChart (극지방 차트)</h3>
                        <br>  
                    <div class="chart-text">
                        <p>Polar charts are similar to pie charts, but each dataset has the same angle.  </p>
                        <p>Each data set has a different radius size depending on the value. Useful when displaying comparison data similar to pie charts.</p>
                        <p>극지방 차트는 원 차트와 비슷하지만 각 데이터셋이 같은 각을 가집니다.</p>
                        <p>각 데이터셋은 값에 따라 반지름의 크기가 다릅니다.</p>
                        <p>원형차트와 유사한 비교 데이터를 표시할 때 유용합니다. 단 해당 데이터셋의 값 또한 표시합니다</p>
                    </div>
                    <hr>
                    <h4>Example</h4>
                    <img src="@/img/IndexImg/10.Polar.png" width="400px" height="400px"/>
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
            type: 'polar',
            width: 500,
            height: 500,
            margin: { top: 40, left: 40, bottom: 40, right: 40 },
            padding: 0.1,
            data: data,
            depth:7,<span class="annotation">// 구간 갯수</span>
            options: {
                responsive:  true,
                plugins: {
                    legend: {
                        position: 'top',<span class="annotation">// top bottom left right</span>
                    },
                    title: {
                        display:  true,
                        text: 'Polar Chart'
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
            Chart.Chart('#polar', config);      
        &lt;/script>
        </pre>
        <pre style="color: #000; ">
        &lt;div id="polar">&lt;/div><span class="annotation">// 해당 차트를 만드는 명령어</span>
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