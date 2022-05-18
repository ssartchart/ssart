<template>
                <div>
                    <h3> CircleChart (원형 차트)  (PIE / DONUT)</h3>
                    <br>                
                    <p>This chart is a graph showing the ratio of each part to the whole as a percentage in a fan shape. </p>                    
                    <p>원형 차트(Circle chart)는 전체에 대한 각 부분의 비율을 부채꼴 모양으로 백분률로 나타낸 그래프입니다.</p>
                    <p>각 부채꼴의 중심각이 전체에서 차지하는 비율을 나타내며, 비율을 한눈에 볼 수 있습니다.</p>
                    <p>전체적인 비율을 쉽게 파악할 수 있어서 언론사에서 통계 수치를 공개할 때 자주 활용됩니다.</p>                        
                    
                                                
                    <hr>
                    <h4>Example</h4>
                    <img src="@/img/IndexImg/8.Pie.png" width="400px" height="400px">
                    <img src="@/img/IndexImg/7.Donut.png" width="400px" height="400px">
                    <hr>
                    
                    
                    <details>
                        <summary>Try It</summary>
                        <pre style="color: #000">
        <span class="script-color1">const</span> data = {
            labels: ['dd', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
                datasets: [{    
                    data : [
                    { name: 'AAAA', value: 1000, color: '#efa86b' },
                    { name: 'BBB', value: 1500, color: '#c1484f' },
                    { name: 'C', value: 1300 },
                    { name: 'D', value: 900, color: '#f4c17c' },
                    { name: 'E', value: 700, color: '#fae8a4' },
                    { name: 'F', value: 1200, color: '#df7454' },
                    { name: 'G', value: 1100, color: '#e88d5d' },
                    { name: 'H', value: 600, color: '#f8d690' },
                    ]
                }
                ]
            };
        <span class="script-color1">const</span> config = {
                type: 'donut',<span class="annotation">// if you want pie chart , change the type to pie!</span>
                width: 500,
                height: 500,
                margin: { top: 40, left: 40, bottom: 40, right: 40 },
                padding: 0.1,
                data: data,
                options: {
                    responsive:  true,
                    plugins: {
                        legend: {
                            position: 'left',<span class="annotation">// top bottom left right</span>
                        },
                        title: {
                            display:  true,
                            text: 'Donut Chart'
                        },
                        sort: true,
                        view:  true,
                    },
                }
            }
    </pre>
    <pre style="color: #000; ">
        &lt;script type="module"><span class="annotation">// 해당 모듈을 불러오는 명령어</span> 
            import * as Chart from './src/index.js';
            Chart.Chart('#circle', config);      
        &lt;/script>
        </pre>
        <pre style="color: #000; ">
        &lt;div id="circle">&lt;/div><span class="annotation">// 해당 차트를 만드는 명령어</span>
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