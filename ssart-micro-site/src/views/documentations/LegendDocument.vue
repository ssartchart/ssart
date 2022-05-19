<template>
  <div>
    <h3 class="bold">Legend</h3>
    <br>
    <p>Legend 옵션은 차트의 범례를 설정합니다.</p>
    <pre>
      options: {
        plugins: {
          legend: {
            position: 'bottom',
            fontSize: '10px',
            fontWeight: 'normal',
            fontFamily: 'comic sans ms',
            legendType: 'rect'
          },
        }
      }
    </pre>
    <hr>
    <p>Legend에는 5개의 속성이 있습니다.</p>
    <table>
      <tr>
        <th style="width: 10%;">속성</th>
        <td style="width: 20%;">역할</td>
        <td style="width: 10%;">required</td>
        <td style="width: 10%;">default</td>
        <td style="width: 50%;">입력예시</td>
      </tr>
      <tr>
        <th>position</th>
        <td>legend 위치</td>
        <td>false</td>
        <td>"bottom"</td>
        <td>"top", "bottom", "left", "right"</td>
      </tr>
      <tr>
        <th>fontSize</th>
        <td>글자 크기</td>
        <td>false</td>
        <td>12</td>
        <td class="script-color1">int</td>
      </tr>
      <tr>
        <th>fontWeight</th>
        <td>글자 굵기</td>
        <td>false</td>
        <td>"normal"</td>
        <td>"normal", "bold", "bolder", "lighter", "number", "initial", "inherit"</td>
      </tr>
      <tr>
        <th>fontFamily</th>
        <td>글꼴</td>
        <td>false</td>
        <td>"Helvetica Neue"</td>
        <td>ex) 'comic sans ms'</td>
      </tr>
      <tr>
        <th>legendType</th>
        <td>legend 모양 결정</td>
        <td>false</td>
        <td>"rect"</td>
        <td>"rect", "circle"</td>
      </tr>

    </table>
    
    <br>
    <h4 class="bold">notify</h4>
    <br>
    <div>
      legend 옵션을 지정하지 않아도 자동으로 생성됩니다.
    </div>
    <br>
    <div>
      legend의 각 label을 클릭하면 해당 데이터를 토글 형식으로 제외/포함이 가능합니다.
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>