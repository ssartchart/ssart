<p align="center">
  <a href="our micro sites" target="_blank">
    <img src="https://www.chartjs.org/media/logo-title.svg" alt="https://www.chartjs.org/"><br/>
  </a>
   use our team logo ssart
</p>

 <img src= src\img\sample.jpg width = "100%" height = "300px">

![npm](https://img.shields.io/npm/v/ssart) <!-- 배포하면 버전이 찍힘  -->
![dependencies](https://img.shields.io/badge/dependencies-d3-brightengreen)


<br>

# Open Source Project SSART

**SSART** is the best library to apply chart in your Product !<br>
You can freely use ssart in various frameworks such as Vue and React.<br>
Using the vector image-based svg as a basic, it has clearer resolution and can be easily modified.<br>
It also provides reactive charts, svg image storage, and data color change functions.<br>
Use [**SSart**]() and apply various charts in your project 📊 <br><br> 


<details>
  <summary>한국어</summary>
  <br>
   ssart는 다양한 차트를 프로젝트에 적용할 수 있는 최고의 라이브러리입니다<br>
    Vue 와 React 같은 다양한 프레임 워크에서 자유롭게 사용할 수 있습니다.<br>
    vector 이미지 기반의 svg를 사용하여 선명한 해상도를 가진 차트를 자유롭게 수정할 수 있습니다.<br>
    또한, 반응형 차트, svg 이미지 저장 기능, 데이터 색상 변경 기능 등을 제공합니다.<br>
    ssart를 이용하여 다양한 차트를 여러분의 프로젝트에 적용해 보세요    <br>
  </details>
<br>

## Installing
<br>

If you use npm, ```npm install SSart``` You can also download the latest release on [GitLab](https://lab.ssafy.com/s06-final/S06P31S201.git).

``` bash
$ npm install ssart
```

If you want to import the whole chart bundle, just add this in your code:

``` vue
import "ssart" ; 
```
<br>

## Environment

All contents of the library were created using JavaScript.

<br>

## Examples

각 차트별 이미지 or gif 파일 추가 (개발 완료 후) + 간략한 사용 코드.

<details>
  <summary>BarChart</summary>
  <br>
    <img src= src\img\barchart.jpg width = "300px" height = "300px">

    barchart

<br>
  </details>
 <br>
 <details>
  <summary>CircleChart</summary>
  <br>
    <img src= src\img\circlechart.jpg width = "300px" height = "300px">

    circlechart

<br>
  </details>
  <br>
  <details>
  <summary>LineChart</summary>
  <br>
    <img src= src\img\linechart.jpg width = "300px" height = "300px">

    linechart

<br>
  </details>
  <br>
  <details>
  <summary>RadarChart</summary>
  <br>
    <img src= src\img\radarchart.jpg width = "300px" height = "300px">

    radarchart

<br>
  </details>
  <br>
  
  <details>
  <summary>ScatterChart</summary>
  <br>
    <img src= src\img\scatterchart.jpg width = "300px" height = "300px">

    scatterchart

<br>
  </details>

<br>

if you want to see more Examples , plz visit our sites and see more chart [SSART](ssart).

<br>

## How to Use

<details>
  <summary>Bar / Line / Area Chart</summary>
  <br>

```js

const data = {
  labels: ['a','b','c','d','e','f'],
  datasets: [
    {
      label: 'Fully Rounded',
      data: [
              {name: 'a', value: 10},
              {name: 'b', value: 29},
              {name: 'c', value: 32},
              {name: 'd', value: 25},
              {name: 'e', value: 23},
              {name: 'f', value: 15}
            ],
      borderColor: red, // 추후 추가
      backgroundColor: red,
      borderWidth: 2,  // 추후 추가
      borderRadius: Number.MAX_VALUE,// 추후 추가
      borderSkipped: false, // 추후 추가
    },
    {
      label: 'Small Radius',
			data : [
              {name: 'a', value: 10},
              {name: 'b', value: 29},
              {name: 'c', value: 32},
              {name: 'd', value: 25},
              {name: 'e', value: 23},
              {name: 'f', value: 15}
            ],
      borderColor: blue,// 추후 추가
      backgroundColor: blue,
      borderWidth: 2,// 추후 추가
      borderRadius: 5,// 추후 추가
      borderSkipped: false,// 추후 추가
    }
  ]
};


```

<br>
  </details>
 <br>
 <details>
  <summary>Scatter chart (x, y)</summary>
  <br>

``` js
const data = {
		labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
		datasets: [
			{
				label: 'Fully Rounded',
				data: [
					{ name: 1, value: 10 },
					{ name: 2, value: 29 },
					{ name: 3, value: 32 },
					{ name: 4, value: 25 },
					{ name: 5, value: 23 },
					{ name: 10, value: 15 }
				],
				backgroundColor: "red",

			},
			{
				label: 'Small Radius',
				data: [1, 3, 3, 4, 5, 6, 7, 8, 9, 10]
				,
				backgroundColor: "blue",
			},
			{
				label: 'Small Radius',
				data:
				[
					[1, 1], [2, 2], [3, 2], [4, 2], [5, 2], [6, 2]
				],
			},
			{
				label: 'Small Radius',
				data: [
					{ x: 1, y: 15 },
					{ x: 2, y: 23 },
					{ x: 3, y: 25 },
					{ x: 4, y: 32 },
					{ x: 5, y: 29 },
					{ x: 6, y: 13 },
					{ x: 7, y: 15 },
				],
			}
		]
};
```

<br>
  </details>
  <br>
  <details>
  <summary>Bubble chart (x,y,r)</summary>
  <br>
    
```js
const data = {
    labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    datasets: [
        {
            label: 'Small Radius',
            data:
                [
                    [1, 1, 1], [2, 2, 2], [3, 2, 3], [4, 2, 4], [5, 2, 5], [6, 2, 6]
                ],
        },
        {
            label: 'Small Radius',
            data: [
                { x: 1, y: 15, r: 10 },
                { x: 2, y: 23, r: 20 },
                { x: 3, y: 25, r: 30 },
                { x: 4, y: 32, r: 30 },
                { x: 5, y: 29, r: 100 },
                { x: 6, y: 13, r: 20 },
                { x: 7, y: 15, r: 50 },
            ],
        }
    ]
};
```

<br>
  </details>
  <br>
  <details>
  <summary>Circle chart(pie, donut)</summary>
  <br>

```js
const data = {
   labels: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
   datasets: [
      { name: 'AAAAAAAAAAA', value: 1000, color: '#efa86b' },
      { name: 'BBBBBBBBBBB', value: 1500, color: '#c1484f' },
      { name: 'C', value: 1300, color: '#d35d50' },
      { name: 'D', value: 900, color: '#f4c17c' },
      { name: 'E', value: 300, color: '#fae8a4' },
      { name: 'F', value: 1200, color: '#df7454' },
      { name: 'G', value: 1100, color: '#e88d5d' },
      { name: 'H', value: 600, color: '#f8d690' }
   ]
};
```

<br>
  </details>
  <br>
  
  <details>
  <summary>Radar chart</summary>
  <br>
    
```js
const data = {
            labels: ['A', 'B', 'C', 'D' ,'E' ,'F'], // 각 축 이름
            datasets: [ // 각 데이터 이름
                { name: 'AAA' },
                { name: 'BBB' },
                { name: 'CC' },
                { name : 'DDDDD'}
            ],
            data:[ // 각 데이터 value
                [2700,2700,1200,13,1400,1700],
                [1400,100,2800,2500,1200,2100],
                [1200,1900,1400,12,2700,1600],
                [20,2200,2000,520,2300,200],
            ]            
        };
```

<br>
  </details>

<br>

npm 배포 후 사용방법 간략히 정리.

<br>

<details>
  <summary>function</summary>
  A collection of frequently used function

  주요 사용하는 기능 추려서 정리 예정.
  </details>

<br>

## Developers

[Our microsites](https://naver.com) <br>

* [Lee JungHun]()<br>
* [Kim YoungJin]()<br>
* [Bae YongHan]()<br>
* [Ahn JaeYoung]()<br>
* [Jeong HaeYun]()<br>
* [Jo wonbin]()<br>

개인 깃헙 링크 혹은 마이크로 사이트에서 정리

<br>

## License

<br>

**Ssart** is available under the [MIT license](LICENSE).

<br>
<!-- MIT 라이센스 링크 -->
