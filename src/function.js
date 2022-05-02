import {BarChart} from './BarChart.js'
import {BarHChart} from './BarHChart.js'
import {BarHClass} from './BarHClass.js'
// import {BarChart} from './BarChartfunction.js'
import { xGrid, yGrid } from './Axis_helper.js';
import { LabelColor } from './Color_helper.js';
import { Data_pre_processing } from './Dataset_helper.js';
import { drawTitle, drawXTitle, drawYTitle } from "./title.js";
import { checkMargin } from "./checkMargin.js";
import { drawLegend } from "./legend.js";
import { xGridHidden, yGridHidden, xGridShow, yGridShow } from "./Axis_helper.js"
import { printColorBar } from './background.js';


function Chart(id,{type,width,height,margin,padding=0,data,options,y_max, y_min=0}){
    const { position } = options.plugins.legend;
    const svg = d3.select(id).append('svg').style('width', width).style('height', height);
    
    console.log(`Hello, ${type}!`);
    const datasets = Data_pre_processing(data.labels,data.datasets);
    const labels = data.labels;
    const labelcolor = LabelColor(datasets);
    const color = labelcolor.color;
    const legend_label = labelcolor.label;

    const chart_area = svg.append('g').style('width', width-100).style('height', height-100);

    const legend_box = drawLegend(svg, legend_label, width, height, chart_area, position, margin);

    const chart_width = width - legend_box.width;
    const chart_height = height - legend_box.height;
    checkMargin(margin);
    console.log(position)
    if (type==="bar"){
        // BarChart({svg,labels,datasets,width,height,margin,padding,y_max,y_min});       
        // width, height 조정 필요
        const chart = new BarChart({chart_area,labels,datasets:datasets,color,width:chart_width,height:chart_height,margin,padding,y_max,y_min});
        chart.tooltip();
        chart.animation();
        
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

function ChartH(id, {type,width,height,margin,padding=0,data,options,y_max, y_min=0} ) {

    const { position } = options.plugins.legend;
    const svg = d3.select(id).append('svg').style('width',width).style('height', height);

    const datasets = Data_pre_processing(data.labels,data.datasets);

    const labels = data.labels;
    const color = LabelColor(datasets);
    const chart_area = svg.append('g').style('width', width).style('height', height);

    console.log("chartH function");
    
    
    console.log(labels);
    console.log(datasets);

        
    if(type==="barH") {
        // BarHChart(svg, data, color, width, height, margin); //js export 사용
        
        // const barHchart = new BarHClass(chart_area, data, width, height, margin); //클래스 사용
        const barHchart = new BarHClass({chart_area, labels, datasets, color, width, height, margin, padding, y_max, y_min});

    }
    

    // svg.attr.on("mouseover", onMouseOver)
    //         .on("mouseout", onMouseOut);
    const Type = document.getElementsByTagName('rect'); // 타입으로 받아서 처리해야할것같아요
    svg.node();

    const tooltop = document.getElementById('tooltip');

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
};


export {Chart, ChartH};
