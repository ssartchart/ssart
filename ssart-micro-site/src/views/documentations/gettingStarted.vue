<template>
  <div>
    <h3>Getting started</h3>
      <br>
      <p>ssart는 npm 라이브러리 입니다.</p>
      <p>아래 명령어를 통해 설치해주세요.</p>
      <pre>
        $ npm install ssart
      </pre>
      <hr>
      <p>설치가 완료되면, 차트 생성을 원하는 페이지(html, vue, react 등.)에 id를 포함한 태그를 생성합니다.</p>
      <pre>
        ...
        <span class="tag"><xmp><</xmp></span><span class="tag">div</span> id="my-chart"<span class="tag">></span>

        <span class="tag"><xmp><</xmp></span><span class="tag">/div</span><span class="tag">></span>
        ...
      </pre>
      <hr>
      <p>ssart를 import합니다</p>
      <pre>
      <span class="script-color1">import</span> ssart
      </pre>
      <hr>
      <p>java script로 차트로 나타낼 data를 준비하고 data config를 작성합니다.</p>
      <pre>
        ...
        <span class="tag"><xmp><</xmp></span><span class="tag">script</span><span class="tag">></span>


        <span class="script-color1">const</span> data = {
          labels: ['a', 'b', 'c', 'd', 'e', 'f'],
          datasets: [
            {
              label: 'Fully Rounded',
              data: [
                { name: 'a', value: -10 },
                { name: 'b', value: 29 },
                { name: 'c', value: 32 },
                { name: 'd', value: 25 },
                { name: 'e', value: 23 },
                { name: 'f', value: 15 }
              ],
          },
          {
            label: 'Small Radius',
            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
            ,
          },
          {
            label: 'Small Radius',
            data:
              [
                { name: 'a', value: 15 },
                { name: 'b', value: 23 },
                { name: 'c', value: 25 },
                { name: 'd', value: 32 },
                { name: 'e', value: 29 },
                { name: 'f', value: 12 },
                { name: 'g', value: 15 },
                { name: 'ㅎ', value: 1 },
                { name: 't', value: 12 }
              ],
            },
          ]
        };
        <span class="script-color1">const</span> config = {
          type: 'bar',
          width: 500,
          height: 500,
          margin: { top: 40, left: 40, bottom: 40, right: 40 },
          data: data,
          options: {
            responsive: true,
            plugins: {
              legend: {
                position: 'left',// top bottom left right
              },
              title: {
                display: true,
                text: 'Chart.js Bar Chart'
              },
              xTitle: {
                display: true,
                text: 'name'
              },
              yTitle: {
                display: true,
                text: 'value'
              },
            }
          }
        };

        
        <span class="tag"><xmp><</xmp></span><span class="tag">/script</span><span class="tag">></span>
        ...
      </pre>
      <p>ssart를 실행합니다.</p>
      <pre>
        ssart.Chart('#my-chart', config);
      </pre>
      <p>차트를 감상합니다.</p>
      <div id="my-chart"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  xmp {
    margin: 0;
    display: inline;
    font-family: "Fira Mono", Consolas, Menlo, Monaco, "Courier New", Courier, monospace;
    font-variant-ligatures: no-common-ligatures;
  }
</style>