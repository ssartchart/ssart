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


export {Chart};
