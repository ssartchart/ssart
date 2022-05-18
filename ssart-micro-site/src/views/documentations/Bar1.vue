<template>
  <div>
    <h3> BarChart 1 (세로막대 차트)</h3>
    <br>
      <p>This chart that represents categorical data as vertical rectangular bars with height and length proportional to the representation values. </p>
      <p>막대 차트(bar chart) 는 표현 값에 비례한 높이와 길이를 가진 막대로 범주형 데이터를 표현하는 차트를 말합니다.</p>
      <p>자료의 대소관계를 한눈에 알아보기 쉽고 직관적입니다.</p>
    <hr>
    <h4>Example</h4>
    <img :src="Bar1img" width="500px" height="500px">

    <hr>
    <details>
                        <summary>Try It</summary>
                        <pre style="color: #000">
    <span class="script-color1">const</span> data =  {labels: ['a', 'b', 'c', 'd', 'e', 'f'],
            datasets: [{
                    label: '데이터 1',
                    data: [
                        { name: 'a', value: -10 },
                        { name: 'b', value: -29 },
                        { name: 'c', value: -32 },
                        { name: 'd', value: 25 },
                        { name: 'e', value: 23 },
                        { name: 'f', value: 15 }
                    ],
                },
                {
                    label: '데이터 2',
                    data: [1, 2, 3, 4, 5, 6],
                },
                {
                    label: '데이터 3',
                    data:
                        [
                            { name: 'a', value: 15 },
                            { name: 'b', value: 23 },
                            { name: 'c', value: 25 },
                            { name: 'd', value: -32 },
                            { name: 'e', value: -29 },
                            { name: 'f', value: -12 },
                        ],
                },
            ]
        };
    <span class="script-color1">const</span> config = {
            type: 'bar',
            width: 500,
            height: 500,
            margin: { top: 40, left: 40, bottom: 40, right: 40 },
            padding: 0.1,
            data: data,
            options: {
                responsive:  true,
                plugins: {
                    legend: {
                        position: 'left',
                        <span class="annotation"> // top bottom left right</span> 
                        fontSize: '10px',
                        fontWeight: 'normal',
                        fontFamily: 'comic sans ms',
                        legendType: 'rect', 
                        <span class="annotation"> // rect(default), circle,</span>
                    },
                    title: {
                        display:  true,
                        text: 'Bar Chart'
                    },
                    xTitle: {
                        display:  true,
                        text: 'name'
                    },
                    yTitle: {
                        display:  true,
                        text: 'value'
                    },
                    xGrid: {
                    },
                    yGrid: {
                    },
                    menu: {
                        grid: true,
                        xGrid: true,
                        yGrid: true,
                        background: true,
                        download: true,
                        legend: true,
                    },
                    axis: {
                        color: "rgb(255, 0, 0)", 
                    <span class="annotation">//"rgb(255, 0, 0)" "rgba(255, 0, 0, 0.3)",</span>
                        weight: 5,
                        opacity: .5,
                        dots: {
                            display: false,
                            color: "rgb(255, 0, 255)", 
                        <span class="annotation">//"rgb(255, 0, 0)" "rgba(255, 0, 0, 0.3)",</span>
                            weight: 5,
                            opacity: .5
                        },
                        xAxis: {
                            color: "rgb(0, 255, 0)", 
                        <span class="annotation">//"rgb(255, 0, 0)" "rgba(255, 0, 0, 0.3)",</span>
                            weight: 5,
                            opacity: 1,
                            dots: {
                                display: false,
                                color: "rgb(255, 0, 0)", 
                            <span class="annotation">//"rgb(255, 0, 0)" "rgba(255, 0, 0, 0.3)",</span>
                                weight: 5,
                                opacity: 1
                            }
                        },
                        yAxis: {
                            color: "rgb(255, 0, 255)", 
                        <span class="annotation">//"rgb(255, 0, 0)" "rgba(255, 0, 0, 0.3)",</span>
                            weight: 1,
                            opacity: .5,
                            dots: {
                                display: false,
                                color: "rgb(0, 0, 255)",
                            <span class="annotation">//"rgb(255, 0, 0)" "rgba(255, 0, 0, 0.3)",</span>
                                weight: 5,
                                opacity: .5
                            }
                        }
                    },
                },
                scales: {
                    yAxis: {
                        ticks: {
                            <span class="annotation"> // min: -20,</span>
                            max: 40
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
        Chart.Chart('#bar', config);      
    &lt;/script>
    </pre>
    <pre style="color: #000; ">
    &lt;div id="bar">&lt;/div><span class="annotation">// 해당 차트를 만드는 명령어</span>
    </pre>
            </details>
  </div>

</template>

<script>

export default {
    data() {
    return {
        Bar1img : Bar1img,
    }
  }    
}
import Bar1img from "@/img/IndexImg/1.Bar.png";

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