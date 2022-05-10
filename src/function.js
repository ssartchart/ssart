import { BarChart } from "./BarChart.js";
import { BarHChart } from "./BarHChart.js";
import { BarHClass } from "./BarHClass.js";
// import {BarChart} from './BarChartfunction.js'
import { xGrid, yGrid } from "./Axis_helper.js";
import { LabelColor, LabelsColor } from "./Color_helper.js";
import { Data_pre_processing } from "./Dataset_helper.js";
import { drawTitle, drawXTitle, drawYTitle } from "./Title.js";
import { checkMargin } from "./checkMargin.js";
import { createCircleChartLegend, createLegendToggle, drawLegend } from "./legend.js";
import { menu } from "./menu.js";
import { background } from "./background.js";
import { ScatterChart } from "./ScatterChart.js";
import { BubbleChart } from "./BubbleChart.js";
import { CircleChart } from "./CircleChart.js";
import { RadarChart } from "./RadarChart.js";
import { LineChart } from "./LineChart.js";
import { AreaChart } from "./AreaChart.js";

function Chart(
  id,
  { type, width, height, margin, padding = 0, data, options, y_max, y_min = 0,depth }
) {
  const legend = options.plugins.legend;
  const oid = id.slice(1, id.length);
  const svg = d3
    .select(id)
    .append("svg")
    .style("width", width)
    .style("height", height);

  console.log(`Hello, ${type}!`);

  const labels = data.labels;
  const labelcolor = LabelColor(data.datasets);
  const labelscolor = LabelsColor(data);
  const color = labelcolor.color;
  const legend_label = labelcolor.label;
  const chart_area = svg
    .append("g")
    .style("width", width - 100)
    .style("height", height - 100);
    
  let legend_box = {
    width: width,
    height: height,
  }
  if (options.plugins?.legend) {
    if(type == "donut"|| type == "donut" || type == "radar"){
      legend_box = drawLegend(
        oid,
        svg,
        labelscolor,
        width,
        height,
        chart_area,
        legend,
        margin,
        data.datasets,
        type
      );
    }
    else{
      legend_box = drawLegend(
        oid,
        svg,
        labelcolor,
        width,
        height,
        chart_area,
        legend,
        margin,
        data.datasets,
        type
      );
    }
    
  }
  const scales = options.scales;
  const chart_width = width - legend_box.width;
  const chart_height = height - legend_box.height;
  checkMargin(margin);
  renderBackground();
  function renderBackground() {
    if (options.plugins.background) {
      background(
        chart_area,
        margin,
        chart_width,
        chart_height,
        options.plugins.background
      );
    }
  }
  if (type === "bar") {
    let datasets = Data_pre_processing(data.labels, data.datasets, "namevalue");
    // BarChart({svg,labels,datasets,width,height,margin,padding,y_max,y_min});
    // width, height 조정 필요
    drawBarChart(datasets); // datasets으로 바차트 그리기
    createLegendToggle(
      datasets,
      legend_box?.legendList,
      chart_area,
      drawBarChart,
      {},
      renderBackground
    );
    function drawBarChart(chartDatasets) {
      let chart = new BarChart({
        id: oid,
        chart_area,
        labels,
        datasets: chartDatasets,
        color,
        width: chart_width,
        height: chart_height,
        margin,
        padding,
        scales,
      });
      chart.animation();
      renderOptions();
    }
  }

  if (type === "scatter") {
    const datasets = Data_pre_processing(data.labels, data.datasets, "xy");
    drawScatterChart(datasets);
    createLegendToggle(
      datasets,
      legend_box?.legendList,
      chart_area,
      drawScatterChart,
      {},
      renderBackground
    );
    function drawScatterChart(chartData) {
      const chart = new ScatterChart({
        id: oid,
        chart_area,
        labels,
        datasets: chartData,
        color,
        width: chart_width,
        height: chart_height,
        margin,
        padding,
        scales,
      });
      chart.tooltip();
      chart.animation();
      renderOptions();
    }
  }

  if (type === "bubble") {
    const datasets = Data_pre_processing(data.labels, data.datasets, "xyr");
    drawBubbleChart(datasets);
    createLegendToggle(
      datasets,
      legend_box?.legendList,
      chart_area,
      drawBubbleChart,
      {},
      renderBackground
    );
    function drawBubbleChart(chartData) {
      const chart = new BubbleChart({
        id: oid,
        chart_area,
        labels,
        datasets: chartData,
        color,
        width: chart_width,
        height: chart_height,
        margin,
        padding,
        scales,
      });
      chart.tooltip();
      chart.animation();
      renderOptions();
    }
  }

  if (type === "line") {
    const datasets = Data_pre_processing(data.labels, data.datasets, "xy");
    drawLineChart(datasets);
    createLegendToggle(
      datasets,
      legend_box?.legendList,
      chart_area,
      drawLineChart,
      {},
      renderBackground
    );
    function drawLineChart(chartData) {
      const chart = new LineChart({
        id: oid,
        chart_area,
        labels,
        datasets: chartData,
        color,
        width: chart_width,
        height: chart_height,
        margin,
        padding,
        scales,
      });
      chart.tooltip();
      chart.animation();
      renderOptions();
    }
  }

  if (type === "area") {
    const datasets = Data_pre_processing(data.labels, data.datasets, "xy");
    drawAreaChart(datasets);
    createLegendToggle(
      datasets,
      legend_box?.legendList,
      chart_area,
      drawAreaChart,
      {},
      renderBackground
    );
    function drawAreaChart(chartData) {
      const chart = new AreaChart({
        id: oid,
        chart_area,
        labels,
        datasets: chartData,
        color,
        width: chart_width,
        height: chart_height,
        margin,
        padding,
        scales,
      });
      chart.tooltip();
      chart.animation();
      renderOptions();
    }
  }

  if (type === "barH") {
    const datasets = Data_pre_processing(
      data.labels,
      data.datasets,
      "namevalue"
    );
    drawbarHChart(datasets);
    createLegendToggle(
      datasets,
      legend_box?.legendList,
      chart_area,
      drawbarHChart,
      {},
      renderBackground
    );
    function drawbarHChart(chartData) {
      const barHchart = new BarHClass({
        id: oid,
        chart_area,
        labels,
        datasets: chartData,
        color,
        width: chart_width,
        height: chart_height,
        margin,
        padding,
        y_max,
        y_min,
      });
      barHchart.tooltip();
      barHchart.animation();
      renderOptions();
    }
  }

  if (type === "donut" || type === "pie") {
    // console.log(datasets)
    drawCicleChart(data.datasets);
    for (let i = 0; i < data.datasets.length; i++) {
      const item = d3.select(`${id}-legend-${i} rect`);
      item.attr("fill", data.datasets[i].color);
    }
    // createCircleChartLegend(
    //   id,
    //   data.datasets,
    //   legend_box?.legendList,
    //   drawCicleChart,
    //   {},
    //   renderBackground,
    // );
    createLegendToggle(
      data.datasets,
      legend_box?.legendList,
      chart_area,
      drawCicleChart,
      {},
      renderBackground
    );
    function drawCicleChart(chartData) {      
      const circleChart = new CircleChart({
        id: oid,
        type,
        chart_area,
        color,
        width: chart_width,
        height: chart_height,
        margin,
        datasets: chartData,
        options,
      });
      circleChart.tooltip();
      renderOptions();
      
    }    
  }
  if (type === "radar" ) {
    const chart = new RadarChart({
      type,
      svg,
      width,
      height,
      margin,
      data,
      depth,
      options,
    });
    // chart.tooltip();
    renderOptions();
  }
  function renderOptions() {
    if (options.plugins.title) {
      drawTitle(svg, options, width, chart_width, height, margin);      
    }
    // except circle
    if (type != "donut" && type != "pie") {
      if (options.plugins.xTitle) {
        // width, height 조정 필요
        if (options.plugins.xTitle) {
          drawXTitle(
            chart_area,
            options.plugins.xTitle,
            chart_width,
            chart_height,
            margin
          );
        }
      }
      if (options.plugins.yTitle) {
        // width, height 조정 필요
        if (options.plugins.yTitle) {
          drawYTitle(
            chart_area,
            options.plugins.yTitle,
            chart_width,
            chart_height,
            margin,
          );
        }
      }
    }
    if (options.plugins.xGrid) {
      xGrid(
        chart_area,
        chart_height - margin.top - margin.bottom,
        options.plugins.xGrid
      );
    }

    if (options.plugins.yGrid) {
      yGrid(
        chart_area,
        chart_width - margin.left - margin.right,
        options.plugins.yGrid
      );
    }

    if (options.plugins.menu) {
      menu(chart_width, width, margin, svg, options, id);
    }
  }
}

function ChartH(
  id,
  { type, width, height, margin, padding = 0, data, options, y_max, y_min = 0 }
) {
  const { position } = options.plugins.legend;
  const legend = options.plugins.legend;
  const svg = d3
    .select(id)
    .append("svg")
    .style("width", width)
    .style("height", height);

  const datasets = Data_pre_processing(data.labels, data.datasets);

  const labelcolor = LabelColor(datasets);
  const oid = id.slice(1, id.length);
  const color = labelcolor.color;
  const legend_label = labelcolor.label;

  const labels = data.labels;
  const chart_area = svg
    .append("g")
    .style("width", width)
    .style("height", height);

  const legend_box = drawLegend(
    oid,
    svg,
    labelcolor,
    width,
    height,
    chart_area,
    legend,
    margin
  );
  const chart_width = width - legend_box.width;
  const chart_height = height - legend_box.height;

  if (type === "barH") {
    const barHchart = new BarHClass({
      chart_area,
      labels,
      datasets,
      color,
      width: chart_width,
      height: chart_height,
      margin,
      padding,
      y_max,
      y_min,
    });
    barHchart.tooltip();
    barHchart.animation();
  }

  drawTitle(svg, options.plugins.title.text, width, height, margin);
  drawXTitle(
    chart_area,
    options.plugins.xTitle.text,
    chart_width,
    chart_height,
    margin
  );
  drawYTitle(
    chart_area,
    options.plugins.yTitle.text,
    chart_width,
    chart_height,
    margin,
    options.plugins.yTitle.position
  );

  if (options.plugins.xGrid) {
    xGrid(
      chart_area,
      chart_height - margin.top - margin.bottom,
      options.plugins.xGrid
    );
  }

  if (options.plugins.yGrid) {
    yGrid(
      chart_area,
      chart_width - margin.left - margin.right,
      options.plugins.yGrid
    );
  }

  if (options.plugins.background) {
    background(
      chart_area,
      margin,
      chart_width,
      chart_height,
      options.plugins.background
    );
  }

  if (options.plugins.menu) {
    menu(chart_width, width, margin, chart_area, options, id);
  }

  /*
    const Type = document.getElementsByTagName('rect'); // 타입으로 받아서 처리해야할것같아요
    svg.node();

  for (const el of Type) {
    // 마우스 커서 기준 위치를 받아서 마우스 근처에 데이터 표시
    el.addEventListener("mousemove", (event) => {
      const x = event.pageX;
      const y = event.pageY;
      const target = event.target;
      const positionLeft = x;
      const positionTop = y;
      // const color = target.dataset.color;
      const value = target.dataset.y;
      const name = target.dataset.x;
      tooltop.innerText =
        "\u00a0" +
        " val : " +
        value +
        "\u00a0" +
        "\n" +
        "\u00a0" +
        "data : " +
        name +
        "\u00a0" +
        "\n" +
        "\u00a0" +
        "add : " +
        "\u00a0" +
        "" +
        "\u00a0"; // 값 + 데이터 set
      tooltop.style.background = "#ddd";
      tooltop.style.top = positionTop - 30 + "px";
      tooltop.style.left = positionLeft - 80 + "px";
      // tooltip.style("left", (d3.event.pageX+10)+"px");
      // tooltip.style("top",  (d3.event.pageY-10)+"px");
      tooltop.style.opacity = "1.0";
    });
  }
}

    for(const el of Type) { // 마우스 커서 기준 위치를 받아서 마우스 근처에 데이터 표시     
        el.addEventListener('mousemove', (event) => {
            const x = event.pageX;
            const y = event.pageY;
            const target = event.target;
            const positionLeft =x;
            const positionTop = y;
            // const color = target.dataset.color;
            const value = target.dataset.y;
            const name = target.dataset.x;
            tooltop.innerText = "\u00a0"+" val : "+value+"\u00a0"+"\n" +"\u00a0"+"data : "+name +"\u00a0" +"\n" +"\u00a0"+"add : " + "\u00a0" + ""  +"\u00a0"; // 값 + 데이터 set
            tooltop.style.background = '#ddd';
            tooltop.style.top = positionTop -30+ 'px';
            tooltop.style.left = positionLeft -80 + 'px';
            // tooltip.style("left", (d3.event.pageX+10)+"px");
            // tooltip.style("top",  (d3.event.pageY-10)+"px");
            tooltop.style.opacity = "1.0";
        });
    }
    */
}

export { Chart, ChartH };
