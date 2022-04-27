import {BarChart} from './BarChart.js'


function Chart(type,id,labels,dataset,width,height,margin,padding, grid={}, y_max = -1, y_min= 0){

    const svg = d3.select(id).append('svg').style('width', width).style('height', height);
    // const tooltip = d3.select(id).append('div').attr('id', 'tooltip');
    console.log(`Hello, ${type}!`);
    if (y_min == -1){
        y_min = dataset[0].data[0].value;
        dataset.forEach( data => {
            data.data.forEach(d => {
                if (d.value < y_min){
                    y_min = d.value;
                }
            });
        });
    }
    if (y_max == -1){
        y_max = dataset[0].data[0].value;
        dataset.forEach( data => {
            data.data.forEach(d => {
                if (d.value > y_max){
                    y_max = d.value;
                }
            });
        });
    }

    if (type==="bar"){
        BarChart(id,svg,labels,dataset,width,height,margin,padding, grid, y_max,y_min);
    }

};

function xGrid(id,length,options) {
    let color = "black"
    if (options.color) {
        console.log(color)
        console.log(options.color)
        color = options.color
        console.log(color)
    }

    let weight = 1
    if (options.weight) {
        weight = options.weight
    }

    let opacity = 1
    if (options.opacity) {
        opacity = options.opacity
    }

    let dash = "1,0"
    if (options.dash) {
        dash = options.dash
    }

    d3.selectAll(id + " svg g.xAxis g.tick")
        .append("line")
        .attr("class", "gridline")
        .style("stroke", color)
        .style("stroke-width", weight)
        .style("stroke-opacity", opacity)
        .style("stroke-dasharray", (dash))
        .attr("x1", 0)
        .attr("y1", length)
        .attr("x2", 0)
        .attr("y2", 0);

    if (options.display===false) {
        xGridHidden(id)
    }
}

function yGrid(id,length,options) {
    let color = "black"
    if (options.color) {
        color = options.color
    }

    let weight = 1
    if (options.weight) {
        weight = options.weight
    }

    let opacity = 1
    if (options.opacity) {
        opacity = options.opacity
    }

    let dash = "1,0"
    if (options.dash) {
        dash = options.dash
    }

    d3.selectAll(id + " svg g.yAxis g.tick")
        .append("line")
        .attr("class", "gridline")
        .style("stroke", color)
        .style("stroke-width", weight)
        .style("stroke-opacity", opacity)
        .style("stroke-dasharray", (dash))
        .attr("x1", 0)
        .attr("y1", 0)
        .attr("x2", length)
        .attr("y2", 0);

    if (options.display===false) {
        yGridHidden(id)
    }
}

function xGridShow(id) {
    // grid 보이기 이벤트 발생 시
    d3.selectAll(id + " svg g.xAxis g.tick")
        .style("visibility", "visible")
}

function yGridShow(id) {
    // grid 보이기 이벤트 발생 시
    d3.selectAll(id + " svg g.yAxis g.tick")
        .style("visibility", "visible")
}

function xGridHidden(id) {
    // grid 없애기 이벤트 발생 시 
    d3.selectAll(id + " svg g.xAxis g.tick line.gridline")
        .style("visibility", "hidden")
}

function yGridHidden(id) {
    // grid 없애기 이벤트 발생 시 
    d3.selectAll(id + " svg g.yAxis g.tick line.gridline")
        .style("visibility", "hidden")
}


export {Chart, xGrid, yGrid, xGridHidden, yGridHidden, xGridShow, yGridShow};
