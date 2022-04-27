import {BarChart} from './BarChart.js'


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

    // svg.attr.on("mouseover", onMouseOver)
    //         .on("mouseout", onMouseOut);
    const Type = document.getElementsByTagName('rect'); // 타입으로 받아서 처리해야할것같아요


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

    



export {Chart};
