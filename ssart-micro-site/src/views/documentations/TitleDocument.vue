<template>
  <div>
    <h3 class="bold">Title</h3>
    <br>
    <p>title은 총 3가지로 나뉘며 xTitle, yTitle, 그리고 차트 전체 title이 있습니다.</p>
    <pre>
      options: {
        plugins: {
          title: {
            display: true,
            text: 'This is Main Title',
            size: "5px",
            color: 'black',
            align: 'center'
          },
          xTitle: {
            display: true,
            text: 'name',
            size: "5px",
            color: 'black',
            align: 'center'
          },
          yTitle: {
            display: true,
            position: 'left'
            rotate: true,
            text: 'value',
            size: "5px",
            color: 'black',
            align: 'center'
          },
        }
      }
    </pre>
    <hr>
    <p>title과, xTitle의 속성은 동일합니다.</p>
    <table>
      <tr>
        <th style="width: 10%;">속성</th>
        <td style="width: 20%;">역할</td>
        <td style="width: 10%;">required</td>
        <td style="width: 10%;">default</td>
        <td style="width: 50%;">입력예시</td>
      </tr>
      <tr>
        <th>display</th>
        <td>표시 여부</td>
        <td>false</td>
        <td>true</td>
        <td class="script-color1">true, false</td>
      </tr>
      <tr>
        <th>text</th>
        <td>title 값</td>
        <td>false</td>
        <td></td>
        <td class="script-color1">str</td>
      </tr>
      <tr>
        <th>size</th>
        <td>font size</td>
        <td>false</td>
        <td>"16px"</td>
        <td>"5px"</td>
      </tr>
      <tr>
        <th>color</th>
        <td>title 값</td>
        <td>false</td>
        <td>"black"</td>
        <td>"black", "rgb(55, 55, 55)", "rgba(55, 55, 55, .5)"</td>
      </tr>
      <tr>
        <th>align</th>
        <td>title 값</td>
        <td>false</td>
        <td>"center"</td>
        <td class="script-color1">"start", "end", "center"</td>
      </tr>

    </table>
    <br>
    <p>yTitle에 추가 속성이 있습니다.</p>
    <table>
      <tr>
        <th style="width: 10%;">속성</th>
        <td style="width: 20%;">역할</td>
        <td style="width: 10%;">required</td>
        <td style="width: 10%;">default</td>
        <td style="width: 50%;">입력예시</td>
      </tr>
      <tr>
        <th>rotate</th>
        <td>가로, 세로 여부</td>
        <td>false</td>
        <td>true</td>
        <td class="script-color1">true, false</td>
      </tr>
      <tr>
        <th>position</th>
        <td>yTitle 위치</td>
        <td>false</td>
        <td>"left"</td>
        <td>"left", "right"</td>
      </tr>
    </table>
    <br>
    <hr>
    <br>
    <h4 class="bold">notify</h4>
    <br>
    <div>
      yTitle에 rotate여부를 지정하지 않으면 차트 margin과 yTitle길이에 따라 자동으로 결정됩니다.
    </div>
    <br>
    <div>
      title, xTitle, yTitle이 위치할 충분한 margin을 입력해주세요.
    </div>
  </div>
</template>

<script>
export default {
  name: "title"
}
</script>

<style>

</style>