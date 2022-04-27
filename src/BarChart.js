import { xGrid, xGridHidden, xGridShow } from "./function.js";
import { yGrid } from "./function.js";

export const BarChart = (id,svg,labels,dataset,width,height,margin,padding, options, y_max,y_min) => {
    

    const colors = ["steelblue","red","yellow","green"];

    const n = dataset.length;

    const x = d3.scaleBand()
        .domain(labels.map(d => d))
        .range([margin.left, width - margin.right])
        .padding(0.2);
    const y = d3.scaleLinear()
        .domain([y_min, y_max]).nice()
        .range([height - margin.bottom, margin.top]);


    const xAxis = g => g
        .attr("class", "xAxis")
        .attr('transform', `translate(0, ${height - margin.bottom})`)
        .call(d3.axisBottom(x)
            .tickSizeOuter(0))
        .call(g => g.select('.domain').remove())



    const yAxis = g => g
        .attr("class", "yAxis")
        .attr('transform', `translate(${margin.left}, 0)`)
        .call(d3.axisLeft(y))
        .call(g => g.select('.domain').remove())

    svg.append('g').call(yAxis);
    svg.append('g').call(xAxis);


    if (options.xGrid) {
        xGrid(
            id,
            -height + margin.top + margin.bottom,
            options.xGrid
        )
        svg
            .append('foreignObject')
            .attr('x', margin.left + width/2)
            .attr('y', 0)
            .attr('height', 100)
            .attr('width', 100)
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

    if (options.yGrid) {
        yGrid(
            id,
            width - margin.left - margin.right,
            options.yGrid
        )
    }
        
    dataset.forEach( (data,index) => {
        svg.append('g')
            .attr('fill', colors[index])
            .selectAll('rect').data(data.data).enter().append('rect')
            .attr('x', d => x(d.name) + (2/n*index)*(parseInt((x.bandwidth())/n))*(n/2)) 
            .attr('y', d => y(d.value))
            .attr('height', d => y(y_min) - y(d.value))
            .attr('width', parseInt((x.bandwidth())/n)- padding)
            .attr('data-x', d => d.name)
            .attr('data-y', d => d.value);
    });



    svg.node();
    
    
    const rectEl = document.getElementsByTagName('rect');


    const tooltop = document.getElementById('tooltip');

    for(const el of rectEl) {
        el.addEventListener('mouseover', (event) => {
            const target = event.target;
            const positionLeft = Number(target.getAttribute('x')) + Number(x.bandwidth()/2) - tooltop.clientWidth/2;
            const positionTop = height - margin.top - target.getAttribute('height') - tooltop.clientHeight - 5;
            // const color = target.dataset.color;
            const value = target.dataset.y;

            tooltop.innerText = value;
            tooltop.style.background = '#ddd';
            tooltop.style.top = positionTop + 'px';
            tooltop.style.left = positionLeft + 'px';
            tooltop.style.opacity = 1;
        });
    }
        
};
