<template>
  <div>
    <h3 class="bold">Background</h3>
    <br>
    <p>background plugin은 차트 영역 내부의 배경 설정합니다.</p>
    <pre>
      <span class="script-color1">const</span> myconfig = {
        ...
        options: {
          plugins: {
            background: {
              display: true,
              color: "black",
              opacity: .1,
              rx: 20,
              ry: 20
            }
          }
        },
        ...
      }
    </pre>
    <hr>
    <p>background는 총 5개의 속성이 있습니다.</p>
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
        <td>적용 여부 결정</td>
        <td>false</td>
        <td>true</td>
        <td class="script-color1">true, false</td>
      </tr>
      <tr>
        <th>color</th>
        <td>배경 색</td>
        <td>false</td>
        <td>"rgb(241, 243, 245)"</td>
        <td>"black", "rgb(55, 55, 55)", "rgba(55, 55, 55, 0.5)"</td>
      </tr>
      <tr>
        <th>opacity</th>
        <td>배경 투명도</td>
        <td>false</td>
        <td>"0.8"</td>
        <td>"0"~"1"</td>
      </tr>
      <tr>
        <th>rx</th>
        <td>border-radius</td>
        <td>false</td>
        <td>0</td>
        <td class="script-color1">int</td>
      </tr>
      <tr>
        <th>ry</th>
        <td>border-radius</td>
        <td>false</td>
        <td>0</td>
        <td class="script-color1">int</td>
      </tr>
    </table>

    <br>
    <hr>
    <br>
    <h4 class="bold">notify</h4>
    <br>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>