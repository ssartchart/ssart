<template>
  <div>
    <h3> BarChart 2 (가로막대 차트)</h3>
    <br>
      <p>This chart that represents categorical data as vertical rectangular bars with height and length proportional to the representation values. </p>
      <p>막대 차트(bar chart) 는 표현 값에 비례한 높이와 길이를 가진 막대로 범주형 데이터를 표현하는 차트를 말합니다.</p>
      <p>자료의 대소관계를 한눈에 알아보기 쉽고 직관적입니다.</p>
    <hr>
    <h4>Example</h4>
    <img :src="Bar2img" width="500px" height="500px">

    <hr>
    <details>
                        <summary>Try It</summary>
                        <pre style="color: #000">
    <span class="script-color1">const</span> data = {
                labels: ['a', 'b', 'c', 'd', 'e'],
                datasets: [
                    {
                    label: '1번 막대 label',
                    data: [
                        { name: 'a', value: 100 },
                        { name: 'b', value: 290 },
                        { name: 'c', value: 750 },
                        { name: 'd', value: 250 },
                        { name: 'e', value: 750 },
                    ],
                    backgroundColor: "red",                    
                    },
                    {
                    label: '2번 막대 label',
                    data: [100, 200, 320, 45],
                    backgroundColor: "blue",
                    },
                    {
                    label: '3번 막대 label',
                    data: [90, 170, 300, 415],
                    backgroundColor: "yellow",
                    },
                        ]
                    };
    <span class="script-color1">const</span> config = {
            type: 'barH',
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
                        text: '가로막대 그래프'
                    },
                    xTitle: {
                        display: true,
                        text: 'name'
                    },
                    yTitle: {
                        display: true,
                        text: 'value'
                    },
                    xGrid: {
                        color: "rgb(255, 0, 0)", <span class="annotation">//"rgb(255, 0, 0)" "rgba(255, 0, 0, 0.3)"</span>
                        dash: "10,3",
                        weight: 1,
                        opacity: .5,
                    },
                    yGrid: {
                        color: "#323233", <span class="annotation">// "rgb(255, 0, 0)" "rgba(255, 0, 0, 0.3)"</span>
                        dash: "10,3",     <span class="annotation">// 점선, 10만큼 칠하고 3만큼 빈공간</span>
                        weight: 1,        <span class="annotation">// 선 두께</span>
                        opacity: .5,      <span class="annotation">// 선 투명도</span>
                    },
                },
                scales:{
                    yAxis : {
                    ticks:{
                        <span class="annotation">// min : -10,</span>
                        max : 900
                        }
                    },
                }                    
            }
        };
    </pre>
    <pre style="color: #000; ">
        &lt;script type="module"><span class="annotation">// 해당 모듈을 불러오는 명령어</span> 
            import * as Chart from './src/index.js';
            Chart.Chart('#barH', config);      
        &lt;/script>
        </pre>
        <pre style="color: #000; ">
        &lt;div id="barH">&lt;/div><span class="annotation">// 해당 차트를 만드는 명령어</span>
        </pre>
            </details>
  </div>

</template>

<script>

export default {
    data() {
    return {
        Bar2img : Bar2img,
    }
  }    
}
import Bar2img from "@/img/IndexImg/2.Bar2.png";

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