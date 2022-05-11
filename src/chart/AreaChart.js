import {Axis_Option, Set_Axis} from '../module/Axis_helper.js';

export class AreaChart{
    constructor({id,chart_area,labels,datasets,color,width,height,margin,padding,scales}){

        // chart_area.selectAll('*').remove();
        chart_area.selectAll('.chartBody').remove();
        chart_area.selectAll('.xAxis').remove();
        chart_area.selectAll('.yAxis').remove();

        
        const axis_option = Axis_Option(labels,datasets,scales,1);
        const x_domain = axis_option.x_domain;
        const x_type = axis_option.x_type;
        const y_min = axis_option.y_min;
        const y_max = axis_option.y_max;

        const y_domain = axis_option.y_domain

        const line_width = axis_option.line_width;
        const line_opacity = axis_option.line_opacity;
        const dot_opacity = axis_option.dot_opacity;
        const dot_size = axis_option.dot_size;


        const Axis = Set_Axis({chart_area,x_domain,y_domain,width,height,margin,padding,scales,x_type});


        this.color = color;
        this.y_min = y_min;
        this.x = Axis.x;
        this.y = Axis.y;

        const line = d3.line()
            .defined(d => !isNaN(d.y))
            .defined(d=>{return this.x(d.x)>= 0 && this.x(d.x) <= width - margin.left && this.y(d.y)>= 0 && this.y(d.y) <= height - margin.top;})
            .x(d => this.x(d.x))
            .y(d => this.y(d.y));

        const area = d3.area()
            .defined(d => !isNaN(d.y))
            .defined(d=>{return this.x(d.x)>= 0 && this.x(d.x) <= width - margin.left && this.y(d.y)>= 0 && this.y(d.y) <= height - margin.top;})
            .x(d => this.x(d.x))
            .y0(this.y(0))
            .y1(d => this.y(d.y));


        this.ChartBody = chart_area
            .data(datasets)
            .append("g")
            .attr("class", "chartBody")
        
        this.slice = this.ChartBody.selectAll(".slice")
            .data(datasets)
            .enter().append("g")
            .attr("class", "slice")
            .attr("id", (d, i) => `${id}-chart-legend-${i}`)
            
            
        if (x_type == "band"){
            this.slice.attr("transform", "translate(" + this.x.bandwidth()/2 + "," + 0 + ")")
        }
        
        this.path = this.slice
            .append("path")    
            .datum(datasets=>{
                return datasets.data;})
            .attr("class","line")        
            .attr("fill", "none")
            .attr("stroke", (d)=>{return this.color(d[0].label_index)})
            .attr("stroke-width", line_width)
            .attr("stroke-opacity", 1)
            .attr("d", line)

        this.pathLength = this.path.node().getTotalLength();

        this.area_path = this.slice
            .append("path")    
            .datum(datasets=>{
                console.log(datasets.data);
                return datasets.data;})
            .attr("class","area")        
            .attr("fill", (d)=>{return this.color(d[0].label_index)})
            .attr("fill-opacity", 0.5)
            .attr("stroke-width", 0)
            .attr("stroke-opacity", 0)
            .attr("pointer-events", "none")
            .attr("d", area)

        this.slice.selectAll(".data")
            .data(datasets=>{return datasets.data;})
            .enter().append("circle")
            .filter(d => !isNaN(d.y))
            .filter(d=>{return this.x(d.x)>= 0 && this.x(d.x) <= width - margin.left && this.y(d.y)>= 0 && this.y(d.y) <= height - margin.top;})
            .attr("class","data")
            .attr("x",  d=> { return this.x(d.x); } )
            .attr("y", d=> { return this.y(d.y); } )
            .attr("transform", (d)=>{
                return "translate(" + this.x(d.x) + "," + this.y(d.y) + ")";
            })
            .attr("r", dot_size)
            .style("fill","white")
            .style("fill-opacity", dot_opacity)
            .attr("stroke", (d)=>{return this.color(d.label_index)})
            .attr("stroke-width", 0.2)
            .attr("stroke-opacity", 1)

        chart_area.node();
        
    }

    // 툴팁 효과
    tooltip(){
            const tooltop = document.getElementById('ssart-tooltip');
            const color = this.color;
            this.ChartBody.selectAll(".data")
            .on("mouseover", function(d){ 
                d3.select(this).style("fill", d3.rgb(color(d.label_index)).darker(2));
                console.log("툴팁 확인 : area");
                tooltop.style.opacity = "1.0";
            })
            .on("mousemove", function(d,index){
                const value = d.x;
                const name =  d.y;
                const key = d3.rgb(color(d.label_index));
                // const color = d;
                
                tooltop.innerText = "x : " + value +"\n" + "y : " + name +"\n" + "label : " +key ; // 값 + 데이터 
                tooltop.style.left = d3.event.pageX + 20 + "px";
                tooltop.style.top = d3.event.pageY + 20 + "px";
            })
            .on("mouseout", function(d){ 
                d3.select(this).style("fill", "white");
                tooltop.style.opacity = "0";
            });
    }

    animation(delay=1000,duration=1000){
        const transitionPath = d3
            .transition()
            .ease(d3.easeSin)
            .delay(d=>{return Math.random()*delay;})
            .duration(duration);

        this.slice.selectAll("path")
            .attr("stroke-dashoffset", function(d){
                return this.getTotalLength()
            })
            .attr("stroke-dasharray", function(d){
                return this.getTotalLength()
            })
            .transition(transitionPath)     
            .attr("stroke-dashoffset",0)

        this.area_path
        .attr("fill-opacity", 0)
        .transition(transitionPath)
        .attr("fill-opacity", 0.5)
        
    }
}