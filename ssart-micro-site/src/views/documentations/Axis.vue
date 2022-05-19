<template>
  <div>
    <h3 class="bold">Axis</h3>
    <br>
    <p>axis는 scales에서 각 axis의 최대, 최소, tick분할을 설정하고,</p>
    <p>plugins에서 design요소를 설정합니다.</p>
    <p>axis plugin은 차트 영역 내부의 배경 설정합니다.</p>
    <pre>
      <span class="script-color1">const</span> myconfig = {
        ...
        options: {
          plugins: {
            axis: 				
              color: "#323233", // "rgb(255, 0, 0)" "rgba(255, 0, 0, 0.3)",
              weight: 1,
              opacity: .5,
              dots: {
                display: true,
                color: "#323233", // "rgb(255, 0, 0)" "rgba(255, 0, 0, 0.3)",
                weight: 1,
                opacity: .5
              },
              xAxis: {
                color: "#323233", // "rgb(255, 0, 0)" "rgba(255, 0, 0, 0.3)",
                weight: 1,
                opacity: .5,
                dots: {
                  display: true,
                  color: "#323233", // "rgb(255, 0, 0)" "rgba(255, 0, 0, 0.3)",
                  weight: 1,
                  opacity: .5
                }
              },
              yAxis: {
                color: "#323233", // "rgb(255, 0, 0)" "rgba(255, 0, 0, 0.3)",
                weight: 1,
                opacity: .5,
                dots: {
                  display: true,
                  color: "#323233", // "rgb(255, 0, 0)" "rgba(255, 0, 0, 0.3)",
                  weight: 1,
                  opacity: .5
                }
              }
            }
          },
          scales: {
            xAxis: {
              ticks: {
                min: -20,
                max: 40
              }
            },
            yAxis: {
              ticks: {
                min: -20,
                max: 40
              }
            }
          }
        },
        ...
      }
    </pre>
    <hr>
    <p>plugins.axis는 총 6개의 속성이 있습니다.</p>
    <table>
      <tr>
        <th style="width: 10%;">속성</th>
        <td style="width: 20%;">역할</td>
        <td style="width: 10%;">required</td>
        <td style="width: 10%;">default</td>
        <td style="width: 50%;">입력</td>
      </tr>
      <tr>
        <th>color</th>
        <td>x,y축 색깔</td>
        <td>false</td>
        <td>"black"</td>
        <td>"black", "rgb(55, 55, 55)", "rgba(55, 55, 55, 0.5)"</td>
      </tr>
      <tr>
        <th>weight</th>
        <td>x,y축 두께</td>
        <td>false</td>
        <td>1</td>
        <td class="script-color1">int</td>
      </tr>
      <tr>
        <th>opacity</th>
        <td>x,y축 투명도</td>
        <td>false</td>
        <td>1</td>
        <td>0~1</td>
      </tr>
      <tr>
        <th>dots</th>
        <td>x,y축의 tick 설정</td>
        <td>false</td>
        <td>-</td>
        <td>아래 dots 표 참고</td>
      </tr>
      <tr>
        <th>xAxis</th>
        <td>x축 설정</td>
        <td>false</td>
        <td>-</td>
        <td>아래 xAxis 표 참고</td>
      </tr>
      <tr>
        <th>yAxis</th>
        <td>y축 설정</td>
        <td>false</td>
        <td>-</td>
        <td>아래 yAxis 표 참고</td>
      </tr>
    </table>

    <br>
    <hr>
    <p>axis.dots, xAxis.dots, yAxis.dots에는 총 4개의 속성이 있습니다.</p>
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
        <td>dots 색깔</td>
        <td>false</td>
        <td>"black"</td>
        <td>"black", "rgb(55, 55, 55)", "rgba(55, 55, 55, 0.5)"</td>
      </tr>
      <tr>
        <th>weight</th>
        <td>dots 두께</td>
        <td>false</td>
        <td>1</td>
        <td class="script-color1">int</td>
      </tr>
      <tr>
        <th>opacity</th>
        <td>dots 투명도</td>
        <td>false</td>
        <td>1</td>
        <td>0~1</td>
      </tr>
    </table>
    <br>
    <hr>
    <p>axis.xAxis에는 총 4개의 속성이 있습니다.</p>
    <table>
      <tr>
        <th style="width: 10%;">속성</th>
        <td style="width: 20%;">역할</td>
        <td style="width: 10%;">required</td>
        <td style="width: 10%;">default</td>
        <td style="width: 50%;">입력</td>
      </tr>
      <tr>
        <th>color</th>
        <td>x축 색깔</td>
        <td>false</td>
        <td>"black"</td>
        <td>"black", "rgb(55, 55, 55)", "rgba(55, 55, 55, 0.5)"</td>
      </tr>
      <tr>
        <th>weight</th>
        <td>x축 두께</td>
        <td>false</td>
        <td>1</td>
        <td class="script-color1">int</td>
      </tr>
      <tr>
        <th>opacity</th>
        <td>x축 투명도</td>
        <td>false</td>
        <td>1</td>
        <td>0~1</td>
      </tr>
      <tr>
        <th>dots</th>
        <td>x축의 tick 설정</td>
        <td>false</td>
        <td>-</td>
        <td>위 dots 표 참고</td>
      </tr>
    </table>
    <br>
    <hr>
    <p>axis.yAxis에는 총 4개의 속성이 있습니다.</p>
    <table>
      <tr>
        <th style="width: 10%;">속성</th>
        <td style="width: 20%;">역할</td>
        <td style="width: 10%;">required</td>
        <td style="width: 10%;">default</td>
        <td style="width: 50%;">입력</td>
      </tr>
      <tr>
        <th>color</th>
        <td>y축 색깔</td>
        <td>false</td>
        <td>"black"</td>
        <td>"black", "rgb(55, 55, 55)", "rgba(55, 55, 55, 0.5)"</td>
      </tr>
      <tr>
        <th>weight</th>
        <td>y축 두께</td>
        <td>false</td>
        <td>1</td>
        <td class="script-color1">int</td>
      </tr>
      <tr>
        <th>opacity</th>
        <td>y축 투명도</td>
        <td>false</td>
        <td>1</td>
        <td>0~1</td>
      </tr>
      <tr>
        <th>dots</th>
        <td>y축의 tick 설정</td>
        <td>false</td>
        <td>-</td>
        <td>위 dots 표 참고</td>
      </tr>
    </table>
    <br>
    <hr>
    <br>
    <h4 class="bold">notify</h4>
    <br>
    <p>axis에서 x, y축을 동시에 설정한 값보다 xAxis, yAxis의 개별 설정 값이 우선 적용됩니다.</p>

    <br>
    <hr>
    <br>
    <p>scales.xAxis, scales.yAxis에서는 x, y축의 범위를 설정합니다.</p>
    <p>아래와 같이 ticks에 min, max 값을 입력합니다.</p>
    <pre>
      scales: {
        xAxis: {
          ticks: {
            min: -20,
            max: 40
          }
        },
        yAxis: {
          ticks: {
            min: -20,
            max: 40
          }
        }
      }
    </pre>
  </div>
</template>

<script>
export default {

}
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

table {
  border: 1px solid gray;
  border-collapse: collapse;
  vertical-align: middle;
  width: 800px;
}

table td, table th {
  border: 1px solid gray;
  padding: 0.5rem 0.75rem;
  vertical-align: middle;
}

table th {
  background: #f0f0f0;
  font-weight: var(--font-body-strong-weight);
  line-height: 1.5;
  text-align: left;
}
</style>