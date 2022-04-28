import {BarChart} from './BarChart.js'
import {BarHChart} from './BarHChart.js'
import BarHClass from './BarHClass.js'
// import {BarChart} from './BarChartfunction.js'
import { xGrid, yGrid } from './Axis_helper.js';
import { LabelColor } from './Color_helper.js';
import { Data_pre_processing } from './Dataset_helper.js';
import { drawTitle, drawXTitle, drawYTitle } from "./title.js";
import { checkMargin } from "./checkMargin.js";

function Chart(id,{type,width,height,margin,padding=0,data,options,y_max, y_min=0}){

    const svg = d3.select(id).append('svg').style('width', width).style('height', height);
    
    console.log(`Hello, ${type}!`);
    const datasets = Data_pre_processing(data.labels,data.datasets);
    const labels = data.labels;
    const color = LabelColor(datasets);
    const chart_area = svg.append('g').style('width', width).style('height', height);

    checkMargin(margin);

    if (type==="bar"){
        // BarChart({svg,labels,datasets,width,height,margin,padding,y_max,y_min});       
        const chart = new BarChart({chart_area,labels,datasets:datasets,color,width,height,margin,padding,y_max,y_min});
        chart.tooltip();
        chart.animation();
        
    }

    // except circle
    if (type != "circle") {
      if (options.plugins.title.display) {
        drawTitle(svg, options.plugins.title.text, width, height, margin);
      }
      if (options.plugins.xTitle.display) {
        drawXTitle(svg, options.plugins.xTitle.text, width, height, margin);
      }
      if (options.plugins.yTitle.display) {
        drawYTitle(
          svg,
          options.plugins.yTitle.text,
          width,
          height,
          margin,
          options.plugins.yTitle.position
        );
      }
    }

    xGrid(chart_area,height,options);
    yGrid(chart_area,width,options);


};

function ChartH(type, id, data, color, width, height, margin) {

    const svg = d3.select(id).append('svg').style('width',width).style('height', height);

        
    if(type==="barH") {
        // BarHChart(svg, data, color, width, height, margin); //js export 사용
        
        const barHchart = new BarHClass(svg, data, color, width, height, margin); //클래스 사용

    }
    

};


export {Chart, ChartH};
