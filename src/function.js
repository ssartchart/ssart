import {BarChart} from './BarChart.js'
import {BarHChart} from './BarHChart.js'


function Chart(type,id,labels,dataset,width,height,margin,padding,y_max = -1, y_min= 0){

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
        BarChart(svg,labels,dataset,width,height,margin,padding,y_max,y_min);
    }

    

};

function ChartH(type, id, data, color, width, height, margin) {

    const svg = d3.select(id).append('svg').style('width',width).style('height', height)
    .selectAll('rect').data(data).enter()
        .append('rect').attr('rx',10)
        .attr('height', 60)
        .attr('y', (d,i)=>i*70)
        .attr('class', (d,i)=>color[i])
        .attr('width', '10')
        .transition().duration(1000)
        .attr('width', d=>(d*500)/100);

        

    if(type==="barH") {
        BarHChart(svg, data, width, height, margin);

    }

};


export {Chart, ChartH};
