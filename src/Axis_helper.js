export const Set_Axis = ({chart_area,x_domain,y_domain,width,height,margin,x_type="band"})=>{
    const x = Set_X(x_type,x_domain,margin,width);

    const y = d3.scaleLinear()
        .domain(y_domain).nice()
        .range([height - margin.bottom, margin.top]);

    const xAxis = g => g
        .attr("class", "xAxis")
        .attr('transform', `translate(0, ${height - margin.bottom})`)
        .call(d3.axisBottom(x)
            .tickSizeOuter(0))
        // .call(g => g.select('.domain').remove())
        // .call(g => g.selectAll('line').remove());

    const yAxis = g => g
        .attr("class", "yAxis")
        .attr('transform', `translate(${margin.left}, 0)`)
        .call(d3.axisLeft(y))
        // .call(g => g.select('.domain').remove())   
        // .call(g => g.selectAll('line').remove());

    chart_area.append('g').call(xAxis);
    chart_area.append('g').call(yAxis);
    
    return {
        x : x,
        y : y
    };
}

const Set_X = (x_type,x_domain,margin,width)=>{
    switch(x_type){
        case 'band':
            return d3.scaleBand()
            .domain(x_domain)
            .range([margin.left, width - margin.right]);
        case 'time':
            return d3.scaleTime()
            .domain(d3.extent(x_domain))
            .range([margin.left, width - margin.right]);
        case 'number':
            return d3.scaleLinear()
            .domain(d3.extent(x_domain))
            .range([margin.left, width - margin.right]);
        default:
            return d3.scaleBand()
            .domain(x_domain).nice()
            .range([margin.left, width - margin.right]);
    }
}

export const xGrid = (chart_area,length,options)=>{
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
    
    const xGridGroup = chart_area.select("g.xAxis")
    xGridGroup.property("visibleStatus", "visible")

    chart_area.selectAll(" g.xAxis g.tick")
        .append("line")
        .attr("class", "gridline")
        .style("stroke", color)
        .style("stroke-width", weight)
        .style("stroke-opacity", opacity)
        .style("stroke-dasharray", (dash))
        .attr("x1", 0)
        .attr("y1", -length)
        .attr("x2", 0)
        .attr("y2", 0);

    if (options.display === false) {
        xGridGroup.property("visibleStatus", "hidden")
        chart_area.selectAll("g.xAxis g.tick")
            .style("visibility", "hidden")
    }
}
export function yGrid (chart_area,length,options) {
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

    const yGridGroup = chart_area.select("g.yAxis")
    yGridGroup.property("visibleStatus", "visible")

    chart_area.selectAll("g.yAxis g.tick")
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


    if (options.display === false) {
        yGridGroup.property("visibleStatus", "hidden")
        chart_area.selectAll("g.yAxis g.tick")
            .style("visibility", "hidden")
    }
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

export function xGridShow(event) {
    // grid 보이기 이벤트 발생 시
    // console.log(event.target)
    // console.log(event.target.innerText)
    // console.log(event.target.id)
    // console.log(event.target.style.fill)
    if (event.target.style.fill=="steelblue") {
        event.target.style.fill = "black"
        d3.selectAll(event.target.innerText + " svg g.xAxis g.tick line.gridline")
            .style("visibility", "hidden")
    } else {
        event.target.style.fill = "steelblue"
        d3.selectAll(event.target.innerText + " svg g.xAxis g.tick line.gridline")
            .style("visibility", "visible")
    }
    
}

export function yGridShow(event) {
    // grid 보이기 이벤트 발생 시
    if (event.target.style.fill=="steelblue") {
        event.target.style.fill = "black"
        d3.selectAll(event.target.innerText + " svg g.yAxis g.tick line.gridline")
            .style("visibility", "hidden")
    } else {
        event.target.style.fill = "steelblue"
        d3.selectAll(event.target.innerText + " svg g.yAxis g.tick line.gridline")
            .style("visibility", "visible")
    }
}