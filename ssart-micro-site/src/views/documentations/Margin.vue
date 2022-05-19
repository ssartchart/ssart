<template>
  <div>
    <h3 class="bold">Margin</h3>
    <br>
    <p>margin 속성은 차트 영역 외부에 여유공간을 설정합니다.</p>
    <pre>
      <span class="script-color1">const</span> myconfig = {
        ...
        margin : {top: 40, left: 40, bottom: 40, right: 40},
        ...
      }
    </pre>
    <hr>
    <p>margin은 총 4개의 속성이 있습니다.</p>
    <table>
      <tr>
        <th style="width: 10%;">속성</th>
        <td style="width: 20%;">역할</td>
        <td style="width: 10%;">required</td>
        <td style="width: 10%;">default</td>
        <td style="width: 50%;">입력</td>
      </tr>
      <tr>
        <th>top</th>
        <td>top margin</td>
        <td>false</td>
        <td>40</td>
        <td class="script-color1">int(>=40)</td>
      </tr>
      <tr>
        <th>left</th>
        <td>left margin</td>
        <td>false</td>
        <td>40</td>
        <td class="script-color1">int(>=40)</td>
      </tr>
      <tr>
        <th>bottom</th>
        <td>bottom margin</td>
        <td>false</td>
        <td>40</td>
        <td class="script-color1">int(>=40)</td>
      </tr>
      <tr>
        <th>right</th>
        <td>right margin</td>
        <td>false</td>
        <td>40</td>
        <td class="script-color1">int(>=40)</td>
      </tr>
    </table>

    <br>
    <hr>
    <br>
    <h4 class="bold">notify</h4>
    <br>
    <p>margin을 입력하지 않거나, 40미만의 값을 입력할 경우 자동으로 40으로 지정됩니다.</p>
    <p>title, xTitle, yTitle이 위치할 충분한 margin을 입력해주세요.</p>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>