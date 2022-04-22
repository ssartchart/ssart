export { drawChart, drawBarChart };
import * as d3 from "https://cdn.skypack.dev/d3@7";

function drawChart(ctx, results) {
  // let sum = 0;
  let totalNumberOfPeople = results.reduce((sum, { total }) => sum + total, 0);
  let currentAngle = 0;

  for (let moodValue of results) {
    //calculating the angle the slice (portion) will take in the chart
    let portionAngle = (moodValue.total / totalNumberOfPeople) * 2 * Math.PI;
    //drawing an arc and a line to the center to differentiate the slice from the rest
    ctx.beginPath();
    ctx.arc(100, 100, 100, currentAngle, currentAngle + portionAngle);
    currentAngle += portionAngle;
    ctx.lineTo(100, 100);
    //filling the slices with the corresponding mood's color
    ctx.fillStyle = moodValue.shade;
    ctx.fill();
  }
}

// 수직 막대바 차트 그리기(초간단)
function drawBarChart(data) {
  const MARGINS = { top: 20, bottom: 10 };
  const CHART_WIDTH = 600;
  const CHART_HEIGHT = 400 - MARGINS.top - MARGINS.bottom;

  let selectedData = data;

  // x축, y축의 범위 지정
  const x = d3.scaleBand().rangeRound([0, CHART_WIDTH]).padding(0.1);
  const y = d3.scaleLinear().range([CHART_HEIGHT, 0])

  const chartContainer = d3
    .select('svg')
    .attr('width', CHART_WIDTH)
    .attr('height', CHART_HEIGHT + MARGINS.top + MARGINS.bottom);
    
  // x축, y축 상에서 데이터 값에 따라 재정의되는 값 설정
  x.domain(data.map(d => d.Country));
  y.domain([0, d3.max(data, d => d.Value) + d3.max(data, d => d.Value)])

  const chart = chartContainer.append('g');

  // x축 그리기
  chart.append('g')
    .call(d3.axisBottom(x))
    .attr('color', '#4f009e')
    .attr('transform', `translate(0, ${CHART_HEIGHT})`);
  
  function renderChart() {
    // 직사각형 모양 그리기(랜덤 색깔, 너비 설정)
    chart
      .selectAll('.bar')
      .data(selectedData, d => d.id)
      .enter()
      .append('rect')
      .classed('bar', true)
      .attr('width', x.bandwidth())
      .attr('height', d => CHART_HEIGHT - y(d.Value))
      .attr('x', d => x(d.Country))
      .attr('y', d => y(d.Value))
      .attr('fill', "#4f009e");
    
    chart.selectAll('.bar').data(selectedData, d => d.id).exit().remove();
    // x축에 라벨 달기(위치 조정)
    chart.selectAll('.label')
      .data(selectedData, d => d.id)
      .enter()
      .append('text')
      .text(d => d.Value)
      .attr('x', d => x(d.Country) + x.bandwidth() / 2)
      .attr('y', d => y(d.Value) - 20)
      .attr('text-anchor', 'middle')
      .classed('label', true)
    chart.selectAll('.label').data(selectedData, d => d.id).exit().remove();
  } 
  
  renderChart();
  
  let unselectedIds = [];

  // legend 생성
  const listItems = d3
    .select('#data')
    // .select('ul')
    .selectAll('li')
    .data(data)
    .enter()
    .append('li');
  
  listItems.append('span').text(d => d.Country);
  
  
  // 체크한 legend는 그래프에서 사라지게 하기
  listItems.append('input')
    .attr('type', 'checkbox')
    .attr('checked', true)
    .on('change', (e, d) => {
      console.log(d.id)
      if (unselectedIds.indexOf(d.id) === -1) {
        unselectedIds.push(d.id);
      } else {
        unselectedIds = unselectedIds.filter(id => id !== d.id);
      }
      selectedData = data.filter(
        (d) => unselectedIds.indexOf(d.id) === -1);
      renderChart();
    });
}

// function draw(type, data) {  
  
//   if (type === 'bar') {

//     // set the dimensions and margins of the graph
//     // const margin = { top: 30, right: 30, bottom: 70, left: 60 };
//     const width = 500
//     // height = 400 - margin.top - margin.bottom;
//     const height = 500

//     // append the svg object to the body of the page
//     const svg = d3.select("#my_dataviz")
//       .append("svg")
//       .attr("width", 1000)
//       .attr("height", 1000)
//       .append("g")
//       .attr("transform", `translate(50, 10)`);   
     
//     // Parse the Data      
//       // X axis
//       const x = d3.scaleBand()
//       .range([0, width])
//       .domain(data.map(d => d.Country))
//       .padding(0.2);
//       svg.append("g")
//       .attr("transform", `translate(0, ${height})`)
//       .call(d3.axisBottom(x))
//       // .selectAll("text")
//       // .attr("transform", "translate(-10,0)rotate(-45)")
//       // .style("text-anchor", "end");
      
//       // Add Y axis
//       const y = d3.scaleLinear()
//       .domain([0, 13000])
//       .range([height, 0]);
//       svg.append("g")
//       .call(d3.axisLeft(y));
      
//       // Bars
//       svg.selectAll("mybar")
//       .data(data)
//       .join("rect")
//       .attr("x", d => x(d.Country))
//       .attr("y", d => y(d.Value))
//       .attr("width", x.bandwidth())
//       .attr("height", d => height - y(d.Value))
//       .attr("fill", '#666666')        
//   }
// }
  