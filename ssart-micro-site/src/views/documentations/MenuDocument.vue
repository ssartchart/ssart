<template>
    <div>
    <h3 class="bold">Menu</h3>
    <br>
    <p>Menu 옵션을 지정하여 사용자가 차트에 변화를 줄 수 있습니다.</p>
    <pre>
      options: {
        plugins: {
          menu: {
            grid: true,
            xGrid: true,
            yGrid: true,
            background: true,
            download: true,
            legend: true,
            color: true
          }
        }
      }
    </pre>
    <hr>
    <p>menu에는 7개의 속성이 있습니다.</p>
    <table>
      <tr>
        <th style="width: 10%;">속성</th>
        <td style="width: 20%;">역할</td>
        <td style="width: 10%;">required</td>
        <td style="width: 10%;">default</td>
        <td style="width: 50%;">입력예시</td>
      </tr>
      <tr>
        <th>grid</th>
        <td>차트 눈금</td>
        <td>false</td>
        <td>false</td>
        <td class="script-color1">true, false</td>
      </tr>
      <tr>
        <th>xGrid</th>
        <td>차트 세로 눈금</td>
        <td>false</td>
        <td>false</td>
        <td class="script-color1">true, false</td>
      </tr>
      <tr>
        <th>yGrid</th>
        <td>차트 가로 눈금</td>
        <td>false</td>
        <td>false</td>
        <td class="script-color1">true, false</td>
      </tr>
      <tr>
        <th>background</th>
        <td>차트 배경 색</td>
        <td>false</td>
        <td>false</td>
        <td class="script-color1">true, false</td>
      </tr>
      <tr>
        <th>download</th>
        <td>차트 다운로드</td>
        <td>false</td>
        <td>false</td>
        <td class="script-color1">true, false</td>
      </tr>
      <tr>
        <th>legend</th>
        <td>차트 범례 위치</td>
        <td>false</td>
        <td>false</td>
        <td class="script-color1">true, false</td>
      </tr>
      <tr>
        <th>color</th>
        <td>데이터 색상 변경</td>
        <td>false</td>
        <td>false</td>
        <td class="script-color1">true, false</td>
      </tr>
    </table>
    
    <br>
    <h4 class="bold">notify</h4>
    <br>
    <div>
      굳이 false로 입력할 필요없이 원하는 속성만 true로 입력할 수 있습니다.
    </div>
    <div>
      ex) download 기능만 이용할 경우
    </div>
    <pre>
      options: {
        plugins: {
          menu: {
            download: true
          }
        }
      }
    </pre>

    <br>
    <div>
      plugins에 menu가 있으면, 차트 우측 상단에 menu 아이콘이 자동으로 생성됩니다.
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>