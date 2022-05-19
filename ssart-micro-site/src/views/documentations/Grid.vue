<template>
  <div>
    <h3 class="bold">Grid</h3>
    <br>
    <p>grid 속성은 차트의 격자를 설정합니다.</p>
    <pre>
      options: {
        plugins: {
          xGrid: {
            display: true,
            color: "#323233",
            dash: "10,3",
            weight: 1,
            opacity: .5
          },
          yGrid: {
            display: true,
            color: "#323233",
            dash: "10,3",
            weight: 1,
            opacity: .5
          }
        }
      }
    </pre>
    <hr>
    <p>xGrid, yGrid에는 총 5개의 속성이 있습니다.</p>
    <table>
      <tr>
        <th style="width: 10%;">속성</th>
        <td style="width: 20%;">역할</td>
        <td style="width: 10%;">required</td>
        <td style="width: 10%;">default</td>
        <td style="width: 50%;">입력</td>
      </tr>
      <tr>
        <th>display</th>
        <td>표시 여부</td>
        <td>false</td>
        <td class="script-color1">true</td>
        <td class="script-color1">true, false</td>
      </tr>
      <tr>
        <th>color</th>
        <td>grid 색깔</td>
        <td>false</td>
        <td>"black"</td>
        <td>"#226262", "rgb(10, 50, 70)"</td>
      </tr>
      <tr>
        <th>dash</th>
        <td>grid 점선 설정</td>
        <td>false</td>
        <td>"1,0"</td>
        <td>"int, int"   ex)"10,3"</td>
      </tr>
      <tr>
        <th>weight</th>
        <td>grid 두께</td>
        <td>false</td>
        <td>1</td>
        <td>0보다 큰 숫자</td>
      </tr>
      <tr>
        <th>opacity</th>
        <td>right margin</td>
        <td>false</td>
        <td>1</td>
        <td>0~1</td>
      </tr>
    </table>

    <br>
    <hr>
    <br>
    <h4 class="bold">notify</h4>
    <br>
    <h5 class="bold">
      display
    </h5>
    <p>display를 false로 설정하여 grid값만 설정해 놓고 차트에 표시하지 않을 수 있습니다.</p>
    <p>설정된 grid값으로 menu 기능으로 사용자에게 grid를 그려줄 수 있습니다.</p>
    <br>
    <h5 class="bold">
      dash
    </h5>
    <p>점선의 "int1,int2"는 int1만큼 선을 그려주고, int2만큼 비워두는 것을 반복합니다.</p>
    <p>예를 들어 입력값이 "10,3"일 경우 10,3,10,3,10,3과 같이 선 중간중간에 3의 공백이 들어갑니다.</p>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>