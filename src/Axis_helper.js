export const Set_Axis = ({chart_area,x_domain,y_domain,width,height,margin,scales,x_type="band"})=>{
    const x = Set_X(x_type,x_domain,margin,width);

    const y = d3.scaleLinear()
        .domain(y_domain).nice()
        .range([height - margin.bottom, margin.top]);

    const x_axis = d3.axisBottom(x)
                    .tickSizeOuter(0);
    if (scales !=null && scales.xAxis && scales.xAxis.ticks && scales.xAxis.ticks.tick != null){
        x_axis.ticks(scales.xAxis.ticks.tick);
    }
    const xAxis = g => g
        .attr("class", "xAxis")
        .attr('transform', `translate(0, ${height - margin.bottom})`)
        .call(x_axis)
        // .call(g => g.select('.domain').remove())
        // .call(g => g.selectAll('line').remove());

    const y_axis = d3.axisLeft(y);
    if (scales !=null && scales.yAxis && scales.yAxis.ticks && scales.yAxis.ticks.tick != null){
        y_axis.ticks(scales.yAxis.ticks.tick);
    }
    const yAxis = g => g
        .attr("class", "yAxis")
        .attr('transform', `translate(${margin.left}, 0)`)
        .call(y_axis)
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

export const Axis_Option = (labels, datasets, scales, f = 1) =>{
    let x_domain = labels.map(d => d);     
    let x_type = "band";
    
    let y_min = 0;
    let y_max = null;
    let r_min = 0;
    let r_max = null;
    let r_size_min = 10;
    let r_size_max = 50;
    let fillopacity = f;
    let line_width = 0.5;
    let line_opacity = 1;
    let line_color = "red";
    let dot_opacity = 0.7;
    let dot_size = 3;
    if (scales){
        if (scales.xAxis){
            if (scales.xAxis.type){
                x_type = scales.xAxis.type;
                if(scales.xAxis.ticks.max != null && scales.xAxis.ticks.min != null){
                    x_domain = [scales.xAxis.ticks.min,scales.xAxis.ticks.max];
                    console.log(x_domain);
                }
            }
        }
        if (scales.yAxis){                
            if(scales.yAxis.ticks){
                if(scales.yAxis.ticks.max){
                    y_max = scales.yAxis.ticks.max;
                }
                if(scales.yAxis.ticks.min){
                    y_min = scales.yAxis.ticks.min;
                }
            }
            if(scales.r){
                if(scales.r.value){
                    if(scales.r.value.max){
                        r_max = scales.r.value.max;
                    }
                    if(scales.r.value.min){
                        r_min = scales.r.value.min;
                    }
                }
                if(scales.r.size){
                    if(scales.r.size.max){
                        r_size_max = scales.r.size.max;
                    }
                    if(scales.r.size.min){
                        r_size_min = scales.r.size.min;
                    }
                }                    
            }
        }
        if (scales.fillopacity){
            fillopacity = scales.fillopacity;
        }
        if (scales.line){
            if (scales.line.width){
                line_width = scales.line.width
                dot_size = line_width/2
            }
            if (scales.line.opacity){
                line_opacity = scales.line.opacity
            }
            if (scales.line.color) {
                line_color = scales.line.color;
            }
        }
        if (scales.dot){
            if (scales.dot.opacity){
                dot_opacity = scales.dot.opacity
            }
            if (scales.dot.visible != null && scales.dot.visible == false){
                dot_opacity = 0;
                // line_opacity = 0;
            }
            if (scales.dot.size){
                dot_size = scales.dot.size
            }

        }

        
        
    }       
    const y_domain = [y_min,  (y_max != null) ? y_max : d3.max(datasets, label=>{
            return d3.max(label.data, d=>{
                return d.y;});            
    })];

    return {
        x_domain: x_domain,
        y_domain: y_domain,
        x_type: x_type,    
        y_min: y_min,
        y_max: y_max,
        r_min: r_min,
        r_max: r_max ,
        r_size_min: r_size_min ,
        r_size_max: r_size_max ,
        fillopacity: fillopacity,
        line_width: line_width,
        line_opacity: line_opacity,
        line_color: line_color,
        dot_opacity: dot_opacity,
        dot_size: dot_size,
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

    let opacity = .5
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

    let opacity = .5
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

    // 맨 아래 x축과 겹치는 grid는 삭제
    chart_area.select("g.yAxis g.tick line.gridline").remove()
}


export const Set_Axis_reverse = ({chart_area,x_domain,y_domain,width,height,margin,scales})=>{
    const x = d3.scaleBand()
        .domain(x_domain)
        .range([height - margin.bottom, margin.top]);

    const y = d3.scaleLinear()
        .domain(y_domain).nice()
        .range([margin.left, width - margin.right]);
        
    const x_axis = d3.axisLeft(x)
                    .tickSizeOuter(0);
    if (scales !=null && scales.xAxis && scales.xAxis.ticks && scales.xAxis.ticks.tick != null){
        x_axis.ticks(scales.xAxis.ticks.tick);
    }

    const yAxis = g => g
        .attr("class", "yAxis")
        .attr('transform', `translate(${margin.left}, 0)`)
        .call(x_axis)
        // .call(g => g.select('.domain').remove())
        // .call(g => g.selectAll('line').remove());   

    const y_axis = d3.axisBottom(y);
        if (scales !=null && scales.yAxis && scales.yAxis.ticks && scales.yAxis.ticks.tick != null){
            y_axis.ticks(scales.yAxis.ticks.tick);
        }    
    const xAxis = g => g
        .attr("class", "xAxis")
        .attr('transform', `translate(0, ${height - margin.bottom})`)
        .call(y_axis)
        // .call(g => g.select('.domain').remove())
        // .call(g => g.selectAll('line')
        //     .attr('x2', width)
        //     .style('stroke', '#f5f5f5'));
            
    chart_area.append('g').call(xAxis);
    chart_area.append('g').call(yAxis);
    
    return {
        x : x,
        y : y
    };
}

function xAxisOptions(chart_area, color, weight, opacity, dots) {
    const xAxisDots = chart_area.selectAll("g.xAxis g.tick line")
    const xAxis = chart_area.select("g.xAxis path.domain")

    let dotsColor = "black"
    if (dots.color) {
        dotsColor = dots.color
    }

    let dotsWeight = 1
    if (dots.weight) {
        dotsWeight = dots.weight
    }

    let dotsOpacity = 1
    if (dots.opacity) {
        dotsOpacity = dots.opacity
    }

    xAxis
        .attr("stroke", color)
        .attr("stroke-width", weight)
        .style("opacity", opacity)
    
    xAxisDots
        .attr("stroke", dotsColor)
        .attr("stroke-width", dotsWeight)
        .style("opacity", dotsOpacity)

    if (dots.display===false) {
        xAxisDots
            .attr("stroke", "none")
            .style("opacity", 0)
    }
}

function yAxisOptions(chart_area, color, weight, opacity, dots) {
    const yAxisDots = chart_area.selectAll("g.yAxis g.tick line")
    const yAxis = chart_area.select("g.yAxis path.domain")

    let dotsColor = "black"
    if (dots.color) {
        dotsColor = dots.color
    }

    let dotsWeight = 1
    if (dots.weight) {
        dotsWeight = dots.weight
    }

    let dotsOpacity = 1
    if (dots.opacity) {
        dotsOpacity = dots.opacity
    }

    yAxis
        .attr("stroke", color)
        .attr("stroke-width", weight)
        .style("opacity", opacity)
    
    yAxisDots
        .attr("stroke", dotsColor)
        .attr("stroke-width", dotsWeight)
        .style("opacity", dotsOpacity)

    if (dots.display===false) {
        yAxisDots
            .attr("stroke", "none")
    }
}

export function axisOptions(chart_area, options) {
    let color = "black"
    if (options.plugins.axis.color) {
        color = options.plugins.axis.color
    }

    let weight = 1
    if (options.plugins.axis.weight) {
        weight = options.plugins.axis.weight
    }

    let opacity = 1
    if (options.plugins.axis.opacity) {
        opacity = options.plugins.axis.opacity
    }

    let dots = {
        display: true,
        color: "black",
        weight: 1,
        opacity: 1
    }
    
    if (options.plugins.axis.dots) {
        dots = options.plugins.axis.dots
    }

    xAxisOptions(chart_area, color, weight, opacity, dots)
    yAxisOptions(chart_area, color, weight, opacity, dots)

    if (options.plugins.axis.xAxis) {
        let xAxisColor = color
        if (options.plugins.axis.xAxis.color) {
            xAxisColor = options.plugins.axis.xAxis.color
        }
    
        let xAxisWeight = weight
        if (options.plugins.axis.xAxis.weight) {
            xAxisWeight = options.plugins.axis.xAxis.weight
        }
    
        let xAxisOpacity = opacity
        if (options.plugins.axis.xAxis.opacity) {
            xAxisOpacity = options.plugins.axis.xAxis.opacity
        }
    
        let xAxisDots = dots
        if (options.plugins.axis.xAxis.dots) {
            xAxisDots = options.plugins.axis.xAxis.dots
        }

        xAxisOptions(chart_area, xAxisColor, xAxisWeight, xAxisOpacity, xAxisDots)
    }

    if (options.plugins.axis.yAxis) {
        let yAxisColor = color
        if (options.plugins.axis.yAxis.color) {
            yAxisColor = options.plugins.axis.yAxis.color
        }
    
        let yAxisWeight = weight
        if (options.plugins.axis.yAxis.weight) {
            yAxisWeight = options.plugins.axis.yAxis.weight
        }
    
        let yAxisOpacity = opacity
        if (options.plugins.axis.yAxis.opacity) {
            yAxisOpacity = options.plugins.axis.yAxis.opacity
        }
    
        let yAxisDots = dots
        if (options.plugins.axis.yAxis.dots) {
            yAxisDots = options.plugins.axis.yAxis.dots
        }

        yAxisOptions(chart_area, yAxisColor, yAxisWeight, yAxisOpacity, yAxisDots)
    }
}
