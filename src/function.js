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


function Chart(id,{type,width,height,margin,padding=0,data,options,y_max, y_min=0}){
    const { position } = options.plugins.legend;
    const svg = d3.select(id).append('svg').style('width', width).style('height', height);
    
    console.log(`Hello, ${type}!`);
    const datasets = Data_pre_processing(data.labels,data.datasets);
    const labels = data.labels;
    const color = LabelColor(datasets);
    const chart_area = svg.append('g').style('width', width).style('height', height);
    
    checkMargin(margin);
    console.log(position)
    if (type==="bar"){
        // BarChart({svg,labels,datasets,width,height,margin,padding,y_max,y_min});       
        // width, height 조정 필요
        const chart = new BarChart({chart_area,labels,datasets:datasets,color,width,height,margin,padding,y_max,y_min});
        chart.tooltip();
        chart.animation();
        
    }
    // drawLegend(svg, labels, width, height, chart_area, position);

    // except circle
    if (type != "circle") {
      if (options.plugins.title.display) {
        drawTitle(svg, options.plugins.title.text, width, height, margin);
      }
        if (options.plugins.xTitle.display) {
          // width, height 조정 필요
        drawXTitle(chart_area, options.plugins.xTitle.text, width, height, margin);
      }
        if (options.plugins.yTitle.display) {
          // width, height 조정 필요
        drawYTitle(
          chart_area,
          options.plugins.yTitle.text,
          width,
          height,
          margin,
          options.plugins.yTitle.position
        );
      }
    }
    if (options.plugins.xGrid) {
        xGrid(chart_area,height - margin.top - margin.bottom,options.plugins.xGrid);  

        svg
            .append('foreignObject')
            .attr('x', margin.left + width/2)
            .attr('y', 0)
            .attr('height', 20)
            .attr('width', 20)
            .attr('id', id+"xGridHiddenButton")
            
        const xGridHiddenButton = document.getElementById(id+"xGridHiddenButton")
        xGridHiddenButton.innerText = id
        xGridHiddenButton.addEventListener("click", xGridHidden)
        
        svg
            .append('foreignObject')
            .attr('fill', "steelblue")
            .attr('x', margin.left + width/2 + 40)
            .attr('y', 0)
            .attr('height', 20)
            .attr('width', 20)
            .attr('id', id+"xGridShowButton")
        
        const xGridShowButton = document.getElementById(id+"xGridShowButton")
        xGridShowButton.innerText = id
        xGridShowButton.addEventListener("click", xGridShow)
        
    }
    if (options.plugins.yGrid) {
        yGrid(chart_area,width - margin.left - margin.right,options.plugins.yGrid);

        svg
            .append('foreignObject')
            .attr('x', margin.left + width/2 + 80)
            .attr('y', 0)
            .attr('height', 20)
            .attr('width', 20)
            .attr('id', id+"yGridHiddenButton")
            
        const yGridHiddenButton = document.getElementById(id+"yGridHiddenButton")
        yGridHiddenButton.innerText = id
        yGridHiddenButton.addEventListener("click", yGridHidden)
        
        svg
            .append('foreignObject')
            .attr('fill', "steelblue")
            .attr('x', margin.left + width/2 + 120)
            .attr('y', 0)
            .attr('height', 20)
            .attr('width', 20)
            .attr('id', id+"yGridShowButton")
        
        const yGridShowButton = document.getElementById(id+"yGridShowButton")
        yGridShowButton.innerText = id
        yGridShowButton.addEventListener("click", yGridShow)
    }
}

function ChartH(type, id, data, color, width, height, margin) {

    const svg = d3.select(id).append('svg').style('width',width).style('height', height);

        
    if(type==="barH") {
        // BarHChart(svg, data, color, width, height, margin); //js export 사용
        
        const barHchart = new BarHClass(svg, data, color, width, height, margin); //클래스 사용

    }
    
};




export {Chart, ChartH};
