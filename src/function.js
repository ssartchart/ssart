import {BarChart} from './BarChart.js'
import {BarHChart} from './BarHChart.js'
import BarHClass from './BarHClass.js'
// import {BarChart} from './BarChartfunction.js'
import { xGrid, yGrid } from './Axis_helper.js';
import { LabelColor } from './Color_helper.js';
import { Data_pre_processing } from './Dataset_helper.js';
import { drawTitle, drawXTitle, drawYTitle } from "./title.js";
import { checkMargin } from "./checkMargin.js";
import { drawLegend } from "./legend.js";
import { xGridHidden, yGridHidden, xGridShow, yGridShow } from "./Axis_helper.js"
import { printColorBar } from './background.js';
import { ScatterChart } from './ScatterChar.js';


function Chart(id,{type,width,height,margin,padding=0,data,options,y_max, y_min=0}){
    const legend = options.plugins.legend;
    const svg = d3.select(id).append('svg').style('width', width).style('height', height);
    
    console.log(`Hello, ${type}!`);
    
    const labels = data.labels;
    const labelcolor = LabelColor(data.datasets);
    const color = labelcolor.color;
    const legend_label = labelcolor.label;
    const chart_area = svg.append('g').style('width', width-100).style('height', height-100);

    const legend_box = drawLegend(id, svg, labelcolor, width, height, chart_area, legend, margin);

    const chart_width = width - legend_box.width;
    const chart_height = height - legend_box.height;
    checkMargin(margin);
    if (type==="bar"){
        const datasets = Data_pre_processing(data.labels,data.datasets,"namevalue");
        // BarChart({svg,labels,datasets,width,height,margin,padding,y_max,y_min});       
        // width, height 조정 필요
        const chart = new BarChart({chart_area,labels,datasets:datasets,color,width:chart_width,height:chart_height,margin,padding,y_max,y_min});
        chart.tooltip();
        chart.animation();
        
    }

    if (type==="scatter"){
      const datasets = Data_pre_processing(data.labels,data.datasets,"xy");
      const chart = new ScatterChart({chart_area,labels,datasets:datasets,color,width:chart_width,height:chart_height,margin,padding,y_max,y_min});
      chart.tooltip();

    }
    
    

    // except circle
    if (type != "circle") {
      if (options.plugins.title.display) {
        drawTitle(svg, options.plugins.title.text, width, height, margin);
      }
        if (options.plugins.xTitle.display) {
          // width, height 조정 필요
        drawXTitle(chart_area, options.plugins.xTitle.text, chart_width, chart_height, margin);
      }
        if (options.plugins.yTitle.display) {
          // width, height 조정 필요
        drawYTitle(
          chart_area,
          options.plugins.yTitle.text,
          chart_width,
          chart_height,
          margin,
          options.plugins.yTitle.position
        );
      }
    }

    if (options.plugins.xGrid) {
        xGrid(chart_area,chart_height - margin.top - margin.bottom,options.plugins.xGrid);  

        svg
            .append('rect')
            .attr('x', width - 20)
            .attr('y', margin.top)
            .attr('height', 20)
            .attr('width', 20)
            .attr('id', id+"xGridHiddenButton")
            
        const xGridHiddenButton = document.getElementById(id+"xGridHiddenButton")
        xGridHiddenButton.innerText = id
        xGridHiddenButton.addEventListener("click", xGridHidden)
        
        svg
            .append('rect')
            .attr('fill', "steelblue")
            .attr('x', width - 20)
            .attr('y', margin.top + 30)
            .attr('height', 20)
            .attr('width', 20)
            .attr('id', id+"xGridShowButton")
        
        const xGridShowButton = document.getElementById(id+"xGridShowButton")
        xGridShowButton.innerText = id
        xGridShowButton.addEventListener("click", xGridShow)
        
    }

    if (options.plugins.yGrid) {
        yGrid(chart_area,chart_width - margin.left - margin.right,options.plugins.yGrid);

        svg
            .append('rect')
            .attr('x', width - 20)
            .attr('y', margin.top + 60)
            .attr('height', 20)
            .attr('width', 20)
            .attr('id', id+"yGridHiddenButton")
            
        const yGridHiddenButton = document.getElementById(id+"yGridHiddenButton")
        yGridHiddenButton.innerText = id
        yGridHiddenButton.addEventListener("click", yGridHidden)
        
        svg
            .append('rect')
            .attr('fill', "steelblue")
            .attr('x', width - 20)
            .attr('y', margin.top + 90)
            .attr('height', 20)
            .attr('width', 20)
            .attr('id', id+"yGridShowButton")
        
        const yGridShowButton = document.getElementById(id+"yGridShowButton")
        yGridShowButton.innerText = id
        yGridShowButton.addEventListener("click", yGridShow)
    }

    svg
        .append('rect')
        .attr('fill', "red")
        .attr('x', width - 20)
        .attr('y', margin.top + 120)
        .attr('height', 20)
        .attr('width', 20)
        .attr('id', id+"changeBackgroundColorButton")

    const changeBackgroundColorButton = document.getElementById(id+"changeBackgroundColorButton")
    changeBackgroundColorButton.innerText = id
    changeBackgroundColorButton.addEventListener("click", printColorBar)

}

function ChartH(type, id, data, color, width, height, margin) {

    const svg = d3.select(id).append('svg').style('width',width).style('height', height);

        
    if(type==="barH") {
        // BarHChart(svg, data, color, width, height, margin); //js export 사용
        
        const barHchart = new BarHClass(svg, data, color, width, height, margin); //클래스 사용

    }
    
};




export {Chart, ChartH};
