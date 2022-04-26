export const BarChart = (id,svg,labels,dataset,width,height,margin,padding, grid, y_max,y_min) => {
    

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

    // config에 grid 값이 있다면 grid 그려주기
    if (grid.x) {
        d3.selectAll("div" + id + " svg g.xAxis g.tick")
            .append("line")
            .attr("class", "gridline")
            .attr("stroke", "blue")
            .attr("stroke-width", 1)
            .attr("stroke-opacity", 1)
            // .attr("shape-rendering", "crispEdges")
            .attr("x1", 0)
            .attr("y1", -height + margin.top + margin.bottom)
            .attr("x2", 0)
            .attr("y2", 0);
    }

    d3.selectAll("div" + id + " svg g.yAxis g.tick")
        .append("line")
        .attr("class", "gridline")
        .style("stroke", "rgba(255, 0, 0, 1)")      // 색
        .style("stroke-width", 1)                   // 두께
        .style("stroke-opacity", 1)                 // 투명도
        .style("shape-rendering", "crispEdges")      // 렌더링, 안써도 될듯
        .style("stroke-dasharray", ("10,3"))         // 점선
        .attr("x1", 0)
        .attr("y1", 0)
        .attr("x2", width - margin.left - margin.right) // 길이
        .attr("y2", 0);


    
    // grid 없애기 이벤트 발생 시 
    // d3.selectAll("g.xAxis g.tick line.gridline")
    //     .style("visibility", "hidden")
    
    // grid 보이기 이벤트 발생 시
    // d3.selectAll("g.xAxis g.tick line.gridline")
    //     .style("visibility", "visible")
    
    
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
