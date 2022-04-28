// import {BarChart} from './BarChartfunction.js'
import { xGrid, yGrid } from './Axis_helper.js';
import { BarChart } from './BarChart.js'
import { LabelColor } from './Color_helper.js';
import { Data_pre_processing } from './Dataset_helper.js';


function Chart(id,{type,width,height,margin,padding=0,data,options,y_max, y_min=0}){

    const svg = d3.select(id).append('svg').style('width', width).style('height', height);
    
    console.log(`Hello, ${type}!`);
    const datasets = Data_pre_processing(data.labels,data.datasets);
    const labels = data.labels;
    const color = LabelColor(datasets);
    const chart_area = svg.append('g').style('width', width).style('height', height);
    if (type==="bar"){
        // BarChart({svg,labels,datasets,width,height,margin,padding,y_max,y_min});       
        const chart = new BarChart({chart_area,labels,datasets:datasets,color,width,height,margin,padding,y_max,y_min});
        chart.tooltip();
        chart.animation();
        
    }

    xGrid(chart_area,height,options);
    yGrid(chart_area,width,options);

    

    console.log(datasets);

};


export {Chart};
