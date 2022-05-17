
// import {BarChart} from './BarChartfunction.js'
import { axisOptions, xGrid as drawXGrid, yGrid as drawYGrid } from "./module/axis_helper.js";
import { LabelColor, LabelsColor } from "./module/color_helper.js";
import { Data_pre_processing } from "./module/dataset_helper.js";
import { drawTitle, drawXTitle, drawYTitle } from "./module/title.js";
import { checkMargin } from "./module/checkMargin.js";
import { createCircleChartLegend, createLegendToggle, drawLegend } from "./module/legend.js";
import { menu as drawMenu } from "./module/menu.js";
import { background as drawBackground } from "./module/background.js";

import { BarChart } from "./chart/barChart.js";
import { BarHClass } from "./chart/barHChart.js";
import { ScatterChart } from "./chart/scatterChart.js";
import { BubbleChart } from "./chart/bubbleChart.js";
import { CircleChart } from "./chart/circleChart.js";
import { RadarChart } from "./chart/radarChart.js";
import { LineChart } from "./chart/lineChart.js";
import { AreaChart } from "./chart/areaChart.js";
import { PolarChart } from "./chart/polarChart.js";

function Chart(
  id,
  { type, width, height, margin, padding = 0, data, options,depth,poly }
) {
  const { plugins, scales } = options;
  let { legend = {position: "left"}, title, xTitle, yTitle, xGrid, yGrid, background, menu } = plugins;
  const oid = id.slice(1, id.length);
  d3.select(id).selectAll('*').remove();
  const svg = d3
    .select(id)
    .append("svg")
    .style("width", width)
    .style("height", height);

  const labels = data.labels;
  let labelcolor;
  if(type == "donut"|| type == "pie" || type == "polar"){
    labelcolor = LabelsColor(data);
  }
  else{
    labelcolor = LabelColor({datasets: data.datasets});
  }
  
  const color = labelcolor.color;
  const legend_label = labelcolor.label;
  const chart_area = svg
    .append("g")
    .style("width", width - 100)
    .style("height", height - 100);  
  
  let legend_box = {
    width: width,
    height: height,
    legendList: []
  }
  if (legend) {
    if(type == "donut"|| type == "pie" || type == "polar"){
      legend_box = drawLegend(
        oid,
        svg,
        labelcolor,
        width,
        height,
        chart_area,
        options,
        margin,
        data.datasets,
        type
      );
    } else {
      legend_box = drawLegend(
        oid,
        svg,
        labelcolor,
        width,
        height,
        chart_area,
        options,
        margin,
        data.datasets,
        type
      );
    }    
  }
  const chart_width = width - legend_box.width;
  const chart_height = height - legend_box.height;
  checkMargin(margin);
  renderBackground();
  function renderBackground() {
    let backgroundOptions = {}
    if (background) {
      backgroundOptions = background
    }
    drawBackground(
      chart_area,
      margin,
      chart_width,
      chart_height,
      backgroundOptions
    );
  }
  if (type === "bar") {
    let datasets = Data_pre_processing(data.labels, data.datasets, "namevalue");
    // BarChart({svg,labels,datasets,width,height,margin,padding,y_max,y_min});
    // width, height 조정 필요
    drawBarChart(datasets); // datasets으로 바차트 그리기
    createLegendToggle(
      id,
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
        position: legend.position,
      });
      chart.tooltip();
      chart.animation();
      renderOptions();
    }
  }

  if (type === "scatter") {
    const datasets = Data_pre_processing(data.labels, data.datasets, "xy");
    drawScatterChart(datasets);
    createLegendToggle(
      id,
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
      id,
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
      id,
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
      id,
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
      id,
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
        scales: options.scales
      });
      barHchart.tooltip();
      barHchart.animation();
      renderOptions();
    }
  }

  if (type === "donut" || type === "pie") {
    const datasets = Data_pre_processing(
      data.labels,
      data.datasets,
      "namevaluedataone"
      );
    drawCircleChart(datasets);

    createLegendToggle(
      id,
      datasets,
      legend_box?.legendList,
      chart_area,
      drawCircleChart,
      {},
      renderBackground,
    );
    function drawCircleChart(chartData) {      
      const circleChart = new CircleChart({
        id: oid,
        type,
        chart_area,
        labels,
        color: labelcolor.color,
        width: chart_width,
        height: chart_height,
        margin,
        datasets: chartData,
        options,
      });
      circleChart.tooltip();
      circleChart.animation();
      renderOptions();
      
    }    
  }
  if (type === "radar" ) {
    const datasets = Data_pre_processing(
      data.labels,
      data.datasets,
      "namevalue"
    );
    drawRadarChart(datasets);
    createLegendToggle(
      id,
      datasets,
      legend_box?.legendList,
      chart_area,
      drawRadarChart,
      {},
      renderBackground
    );
    function drawRadarChart(datasets) {
      const radarChart = new RadarChart({
        type,
        chart_area: chart_area,
        width : chart_width,
        height : chart_height,
        margin,
        labels,
        color: labelcolor.color,
        datasets : datasets,
        scales,
        poly,
      });
      radarChart.tooltip();
      renderOptions();
    }
  }
  

  if (type === "polar") {
    const datasets = Data_pre_processing(
      data.labels,
      data.datasets,
      "namevaluedataone"
      );
    drawPolarChart(datasets);
    createLegendToggle(
      id,
      datasets,
      legend_box?.legendList,
      chart_area,
      drawPolarChart,
      {},
      renderBackground
    );
    function drawPolarChart(datasets) {
      const polarChart = new PolarChart({
        id: oid,
        type,
        chart_area: chart_area,
        width : chart_width,
        height : chart_height,
        margin,
        labels,
        color: labelcolor.color,
        datasets: datasets,
        options,
        scales,
      });
      polarChart.tooltip();
      polarChart.animation();
      renderOptions();
    }
  }


  function renderOptions() {
    if (title) {
      drawTitle(svg, options, width, chart_width, height, margin);      
    }
    // except circle
    if (type != "donut" && type != "pie") {
      if (xTitle) {
        // width, height 조정 필요
        if (xTitle) {
          drawXTitle(
            chart_area,
            xTitle,
            chart_width,
            chart_height,
            margin
          );
        }
      }
      if (yTitle) {
        // width, height 조정 필요
        if (yTitle) {
          drawYTitle(
            chart_area,
            yTitle,
            chart_width,
            chart_height,
            margin,
          );
        }
      }
    }
    if (options.plugins.axis) {
      axisOptions(chart_area, options)
    }

    if (xGrid) {
      drawXGrid(
        chart_area,
        chart_height - margin.top - margin.bottom,
        xGrid
      );
    }

    if (yGrid) {
      drawYGrid(
        chart_area,
        chart_width - margin.left - margin.right,
        yGrid
      );
    }

    if (menu) {
      // const param = {type, width, height, margin, padding, data, options, y_max, y_min, depth};
      const param = {type, width, height, margin, padding, data, options};
      drawMenu(chart_width, width, margin, svg, options, id, param);
    };
  }
}

export { Chart};
