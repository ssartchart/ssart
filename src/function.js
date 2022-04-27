import {BarChart} from './BarChart.js'
// import { legend } from './legend.js';


function Chart(type, id, labels, datasets, width, height, margin, padding, y_max = -1, y_min = 0 ){ 
  
  const svg = d3.select(id).classed("svg-container", false) //container class to make it responsive
    .append("svg")
    //responsive SVG needs these 2 attributes and no width and height attr
    // .attr("preserveAspectRatio", "xMinYMin meet")
    .style("width", width)
    .style("height", height)
    // .attr("viewBox", `0 0 ${width} ${height}`)
    // class to make it responsive
    // .classed("svg-content-responsive", true);
    // const tooltip = d3.select(id).append('div').attr('id', 'tooltip');
    console.log(`Hello, ${type}!`);    
    if (y_min == -1){
        y_min = datasets[0].data[0].value;
        datasets.forEach( data => {
            data.data.forEach(d => {
                if (d.value < y_min){
                    y_min = d.value;
                }
            });
        });
    }
    if (y_max == -1){
        y_max = datasets[0].data[0].value;
        datasets.forEach( data => {
            data.data.forEach(d => {
                if (d.value > y_max){
                    y_max = d.value;
                }
            });
        });
    }

    if (type==="bar"){
        BarChart(svg,labels,datasets,width,height,margin,padding,y_max,y_min);
    }

};


export {Chart};
