import {Axis_Option, Set_Axis} from '../module/Axis_helper.js';

export class ScatterChart{
    constructor({id, chart_area,labels,datasets,color,width,height,margin,padding,scales}){

        // chart_area.selectAll('*').remove();
        chart_area.selectAll('.chartBody').remove();
        chart_area.selectAll('.xAxis').remove();
        chart_area.selectAll('.yAxis').remove();

        
        const axis_option = Axis_Option(labels,datasets,scales,1);
        const x_domain = axis_option.x_domain;
        const x_type = axis_option.x_type;
        const y_min = axis_option.y_min;
        const y_max = axis_option.y_max;

        
        const { fillopacity, y_domain, dot_opacity, dot_size, line_opacity, line_width, line_color } = axis_option;
        const Axis = Set_Axis({chart_area,x_domain,y_domain,width,height,margin,padding,scales,x_type});        

        this.color = color;
        this.y_min = y_min;
        this.x = Axis.x;
        this.y = Axis.y;
        this.dot_size = dot_size;

        this.ChartBody = chart_area
            .append("g")
            .attr("class", "chartBody")
        
        this.slice = this.ChartBody.selectAll(".slice")
            .data(datasets)
            .enter().append("g")
            .attr("class", "slice")
            .attr("id", (d, i) => `${id}-chart-legend-${i}`)
        // if (x_type == "band"){
        //     this.slice.attr("transform", "translate(" + this.x.bandwidth()/2 + "," + 0 + ")")
        // }
        // else{
        //     this.slice.attr("transform", "translate(" + 0 + "," + 0 + ")")
        // }
        this.slice.attr("transform", "translate(" + 0 + "," + 0 + ")")

        this.slice.selectAll(".data")
            .data(datasets=>{return datasets.data;})
            .enter().append("circle")
            .filter(d=>{return this.x(d.x)>= 0 && this.x(d.x) <= width - margin.left && this.y(d.y)>= 0 && this.y(d.y) <= height - margin.top;})
            .attr("class","data")
            .attr("x",  d=> { return this.x(d.x); } )
            .attr("y", d=> { return this.y(d.y); } )
            .attr("transform", (d)=>{
                return "translate(" + this.x(d.x) + "," + this.y(d.y) + ")";
            })
            .attr("r", this.dot_size)
            .style("fill",d=>{return this.color(d.label_index);})
            .style("fill-opacity", dot_opacity)
            .attr("stroke", line_color)
            .attr("stroke-width", line_width)
            .style("stroke-opacity", line_opacity)
            // .on("mouseover", onMouseOver)
            // .on("mouseout", onMouseOut);

        chart_area.node();
        
    }

    // 툴팁 효과
    tooltip(){
            const tooltop = document.getElementById('ssart-tooltip');
            const color = this.color;
            this.ChartBody.selectAll(".data")
            .on("mouseover", function(d){ 

                d3.select(this).style("fill", d3.rgb(color(d.label_index)).darker(2));
                console.log("툴팁 확인 : scatter");

                tooltop.style.opacity = "1.0";
            }).on("mousemove", function(d,index){
                const x = d.x;
                const y =  d.y;
                const key = d3.rgb(color(d.label_index));
                const name = d.label;
                
                // tooltop.innerText = "x : " + value +"\n" + "y : " + name +"\n" + "label : " +key ; // 값 + 데이터 
                tooltop.innerHTML = `
                    <svg style="width: 16px; height: 16px">
                        <rect width="10px" height="10px" x="1" y="5" fill="${key}" stroke="white" stroke-width="10%"></rect>
                    </svg>
                    <text style="font-size: 15px; font-weight: 700; margin-bottom: 3px;">(${x}, ${y})</text>
                    `
                tooltop.style.left = d3.event.pageX + 20 + "px";
                tooltop.style.top = d3.event.pageY + 20 + "px";
            })
            .on("mouseout", function(d){ 
                d3.select(this).style("fill", color(d.label_index));
                tooltop.style.opacity = "0";
            });
    }

    animation(delay=1000,duration=1000){
        this.slice.selectAll(".data")
            .attr("r", 0)
            .transition()
            .delay(d=>{return Math.random()*delay;})
            .duration(duration)
            .attr("r", d=>{ return this.dot_size; })
    }
}




