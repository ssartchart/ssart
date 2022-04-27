export const BarChart = (svg,labels,dataset,width,height,margin,padding,y_max,y_min) => {
    

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
        .attr('transform', `translate(0, ${height - margin.bottom})`)
        .call(d3.axisBottom(x)
            .tickSizeOuter(0))
        .call(g => g.select('.domain').remove())
        .call(g => g.selectAll('line').remove());

    const yAxis = g => g
        .attr('transform', `translate(${margin.left}, 0)`)
        .call(d3.axisLeft(y))
        .call(g => g.select('.domain').remove())   
        .call(g => g.selectAll('line')
            .attr('x2', width)
            .style('stroke', '#f5f5f5'));

    svg.append('g').call(xAxis);
    svg.append('g').call(yAxis);

    
    dataset.forEach( (data,index) => {
        svg.append('g')
            .attr('fill', colors[index])
            .selectAll('rect').data(data.data).enter().append('rect')
            .attr('x', d => x(d.name) + (2/n*index)*(parseInt((x.bandwidth())/n))*(n/2)) 
            .attr('y', d => y(d.value))
            .attr('height', d => y(y_min) - y(d.value))
            .attr('width', parseInt((x.bandwidth())/n)- padding)
            .attr('data-x', d => d.name)
            .attr('data-y', d => d.value)
            .on("mouseover", onMouseOver)
            .on("mouseout", onMouseOut);
    });



    svg.node();
    
    

    const tooltop = document.getElementById('tooltip');
    
    function onMouseOut(d, i) { 
        d3.select(this).transition().duration(600).style("opacity" , "1.0");
        d3.select(".val")
          .selectAll("text")
          .filter((d, index) => index === i)
          .attr("display", "none");
          tooltop.style.opacity = 0; // 마우스가 target을 벗어나면 tooltip 안보이게
    }
    
      function onMouseOver(d, i) { // 마우스 커서가 위에 있으면 색상 변환 (가시성)
        d3.select(this).transition().duration(600).style("opacity", "0.5");  // 일단 임의로 하늘색
        d3.select(".val")
          .selectAll("text")
          .filter((d, index) => index === i)
          .attr("display", "block") 
          
    }
    
};

