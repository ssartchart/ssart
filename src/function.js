import {BarChart} from './BarChart.js'
import {BarHChart} from './BarHChart.js'
import BarHClass from './BarHClass.js'
// import {BarChart} from './BarChartfunction.js'
import { xGrid, yGrid } from './Axis_helper.js';
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


};

function ChartH(type, id, data, color, width, height, margin) {

    const svg = d3.select(id).append('svg').style('width',width).style('height', height);

        
    if(type==="barH") {
        // BarHChart(svg, data, color, width, height, margin); //js export 사용
        
        const barHchart = new BarHClass(svg, data, color, width, height, margin); //클래스 사용

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
