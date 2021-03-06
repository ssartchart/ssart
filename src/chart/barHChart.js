import {Axis_Option, Set_Axis, Set_Axis_reverse, xGrid, yGrid} from '../module/axis_helper.js';

export class BarHClass{
    constructor({id,chart_area,labels,datasets,color,width,height,margin,padding,scales}){
        
        chart_area.selectAll('.chartBody').remove();
        chart_area.selectAll('.xAxis').remove();
        chart_area.selectAll('.yAxis').remove();


        const axis_option = Axis_Option(labels,datasets,scales,1);
        const x_domain = axis_option.x_domain;

        const y_min = axis_option.y_min;
        const y_max = axis_option.y_max;

        const fillopacity = axis_option.fillopacity;
        const y_domain = axis_option.y_domain

        const Axis = Set_Axis_reverse({chart_area,x_domain,y_domain,width,height,margin,padding,scales});

        this.color = color;
        this.y_min = y_min;
        this.y_max = y_max;
        this.x0 = Axis.x.padding(padding);
        this.y = Axis.y;
        this.x1 = d3.scaleBand()
            .domain(datasets.map((d,index)=>{return index}))
            .range([0, this.x0.bandwidth()]);
        
        this.ChartBody = chart_area
            .append("g")
            .attr("class", "ssart")
            .attr("class", "chartBody")

        this.slice = this.ChartBody.selectAll(".slice")
            .data(datasets)
            .enter().append("g")
            .attr("class", "ssart")
            .attr("class", "slice")
            .attr("id", (d, i) => `${id}-chart-legend-${i}`)
            .attr("transform",(d,index)=>{ return "translate(0," + this.x1(index) +")"; });

        this.slice.selectAll("rect")
            .data(datasets=>{return datasets.data;})
            .enter().append("rect")
            .attr("class", "ssart")
            .attr("class","data")
            .filter(d=>{return labels.includes(d.name);})   //labels에 없는값 필터링
            .attr("y",d=>{ return this.x0(d.name);})
            .attr("height", this.x0.bandwidth()/datasets.length)
            .style("fill",d=>{return this.color(d.label_index);})
            .style("fill-opacity", fillopacity)            
            .attr("x", d=>{
                if (d.value > 0)
                    return this.y(Math.max(this.y_min,0)) 
                else{
                    return (this.y(d.value));
                }
            })
            .attr("width", d=>{ 
                if (d.value > 0)
                    return this.y(d.value) - this.y(Math.max(this.y_min,0));
                else{
                    return this.y(Math.max(this.y_min,0)) - this.y(d.value);
                }
            })
            

        chart_area.node();
            
    };
    // 툴팁 효과 + 하이라이트
    tooltip(){
        const tooltop = document.getElementById('ssart-tooltip');
        const color = this.color;
        this.slice.selectAll("rect")
        .on("mouseover", function(d){ 
            d3.select(this).style("fill", d3.rgb(color(d.label_index)).darker(2));

            tooltop.style.opacity = "1.0";
        })
        .on("mousemove", function(d){
            const value = d.value;
            const name =  d.name;
            const key = d3.rgb(color(d.label_index));
            // const color = d;
            
            // tooltop.innerText = "value : " + value +"\n" + "name : " + name +"\n" + "color : " +key ; // 값 + 데이터 
            tooltop.innerHTML = `
                <text style="display: block; font-size: 15px; font-weight: 600">${name}</text>
                <div>
                    <svg style="width: 10px; height: 10px">
                        <rect width="10px" height="10px" fill="${key}" stroke="white" stroke-width="10%"></rect>
                    </svg>
                    <text style="font-size: 14px; font-weight: 500;">${d.label} : ${value}</text>
                </div>
                `
            tooltop.style.left = event.pageX + 20 + "px";
            tooltop.style.top = event.pageY + 20 + "px";
        })
        .on("mouseout", function(d){ 
            d3.select(this).style("fill", color(d.label_index));
            tooltop.style.opacity = "0";
        });

    }
    // 애니메이션 효과
    animation(delay=800, duration=800) {
        this.slice.selectAll("rect")
            .attr("x", d=>{ return this.y(0); })
            .attr('width', '1')
            .transition()
            .delay(d=>{return Math.random()*delay;})
            .duration(duration)
            .attr("x", d=>{
                if (d.value > 0)
                    return this.y(Math.max(this.y_min,0)) 
                else{
                    return (this.y(d.value));
                }
            })
            .attr("width", d=>{ 
                if (d.value > 0)
                    return this.y(d.value) - this.y(Math.max(this.y_min,0));
                else{
                    return this.y(Math.max(this.y_min,0)) - this.y(d.value);
                }
            })
    }

}
