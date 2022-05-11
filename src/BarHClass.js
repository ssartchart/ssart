import {Axis_Option, Set_Axis, Set_Axis_reverse, xGrid, yGrid} from './Axis_helper.js';

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

        console.log(y_min)
        this.color = color;
        this.y_min = y_min;
        this.x0 = Axis.x.padding(padding);
        this.y = Axis.y;
        this.x1 = d3.scaleBand()
            .domain(datasets.map((d,index)=>{return index}))
            .range([0, this.x0.bandwidth()]);
        
        this.ChartBody = chart_area
            .append("g")
            .attr("class", "chartBody")

        this.slice = this.ChartBody.selectAll(".slice")
            .data(datasets)
            .enter().append("g")
            .attr("class", "slice")
            .attr("id", (d, i) => `${id}-chart-legend-${i}`)
            .attr("transform",(d,index)=>{ return "translate(0," + this.x1(index) +")"; });

        this.slice.selectAll("rect")
            .data(datasets=>{return datasets.data;})
            .enter().append("rect")
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
            console.log("툴팁 확인 BarHC");

            tooltop.style.opacity = "1.0";
        })
        .on("mousemove", function(d,index){
            const value = d.value;
            const name =  d.name;
            const key = d3.rgb(color(d.label_index));
            // const color = d;
            
            tooltop.innerText = "value : " + value +"\n" + "name : " + name +"\n" + "color : " +key ; // 값 + 데이터 
            tooltop.style.left = d3.event.pageX + 20 + "px";
            tooltop.style.top = d3.event.pageY + 20 + "px";
        })
        .on("mouseout", function(d){ 
            d3.select(this).style("fill", color(d.label_index));
            tooltop.style.opacity = "0";
        });

    }
    // 애니메이션 효과
    animation(delay=800, duration=800) {
        console.log()
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

    