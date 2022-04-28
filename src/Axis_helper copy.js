export const Set_Axis = ({chart_area,x_domain,y_domain,width,height,margin,padding})=>{
    const x = d3.scaleBand()
        .domain(x_domain)
        .range([margin.left, width - margin.right])
        .padding(padding);

    const y = d3.scaleLinear()
        .domain(y_domain).nice()
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

    chart_area.append('g').call(xAxis);
    chart_area.append('g').call(yAxis);
    
    return {
        x : x,
        y : y
    };
}


export const Set_Axis_reverse = ({chart_area,x_domain,y_domain,width,height,margin,padding})=>{
    const x = d3.scaleBand()
        .domain(x_domain)
        .range([height - margin.bottom, margin.top])
        .padding(padding);

    const y = d3.scaleLinear()
        .domain(y_domain).nice()
        .range([margin.left, width - margin.right]);
        
    const yAxis = g => g
        .attr('transform', `translate(${margin.left}, 0)`)
        .call(d3.axisLeft(x).tickSizeOuter(0))
        .call(g => g.select('.domain').remove())
        .call(g => g.selectAll('line').remove());   

    const xAxis = g => g
        .attr('transform', `translate(0, ${height - margin.bottom})`)
        .call(d3.axisBottom(y))
        .call(g => g.select('.domain').remove())
        .call(g => g.selectAll('line')
            .attr('x2', width)
            .style('stroke', '#f5f5f5'));
            
    chart_area.append('g').call(xAxis);
    chart_area.append('g').call(yAxis);
    
    return {
        x : x,
        y : y
    };
}