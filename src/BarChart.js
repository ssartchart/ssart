import {Set_Axis} from './Axis_helper.js';

export class BarChart{
    constructor({id,chart_area,labels,datasets,color,width,height,margin,padding,scales}){
        
        // chart_area.selectAll('*').remove();

        let y_min = 0;
        let y_max = null;
        let fillopacity = 1;
        if (scales != null){
            console.log(scales)
            if (scales.yAxis){
                if(scales.yAxis.ticks){
                    if(scales.yAxis.ticks.max){
                        y_max = scales.yAxis.ticks.max;
                    }
                    if(scales.yAxis.ticks.min){
                        y_min = scales.yAxis.ticks.min;
                    }
                }
            }
            if (scales.fillopacity){
                fillopacity = scales.fillopacity;
            }
            
        }

        const x_domain = labels.map(d => d);        
        const y_domain = [y_min,  (y_max != null) ? y_max : d3.max(datasets, label=>{
                return d3.max(label.data, d=>{
                    return d.value;});            
                })];        
        const Axis = Set_Axis({chart_area,x_domain,y_domain,width,height,margin,padding,scales});


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
            .attr("class", "g")
            .attr("id", (d, i) => `${id}-chart-legend-${i}`)
            .attr("transform",(d,index)=>{ return "translate(" + this.x1(index) + ",0)"; });

        this.slice.selectAll("rect")
            .data(datasets=>{return datasets.data;})
            .enter().append("rect")
            .attr("class","data")
            .filter(d=>{return labels.includes(d.name);})   //labels에 없는값 필터링
            .attr("width", this.x0.bandwidth()/datasets.length)
            .attr("x",d=>{ return this.x0(d.name);})
            .style("fill",d=>{return this.color(d.label_index);})
            .style("fill-opacity", fillopacity)
            .attr("y", d=>{ return this.y(d.value); })
            .attr("height", d=>{ return this.y(this.y_min) - this.y(d.value); })
            

        chart_area.node();
            
    };

    // 툴팁 효과 + 하이라이트
    tooltip(){
        const tooltop = document.getElementById('tooltip');
        const color = this.color;
        this.slice.selectAll(".data")
        .on("mouseover", function(d){ 
            const x = event.pageX;
            const y = event.pageY;
            // const target = event.target;
            const positionLeft =x;
            const positionTop = y;
            d3.select(this).style("fill", d3.rgb(color(d.label_index)).darker(2));
            console.log("툴팁 확인 : BAR");
            const value = d.value;
            const name =  d.name;
            const key = d3.rgb(color(d.label_index));
            // const color = d;
            
            tooltop.innerText = "value : " + value +"\n" + "name : " + name +"\n" + "color : " +key ; // 값 + 데이터 
            // tooltop.style.background = '#ddd';
            tooltop.style.top = positionTop -100+ 'px';
            tooltop.style.left = positionLeft -80 + 'px';
            // tooltip.style("left", (d3.event.pageX+10)+"px");
            // tooltip.style("top",  (d3.event.pageY-10)+"px");
            tooltop.style.opacity = "1.0";
        })
        .on("mouseout", function(d){ 
            d3.select(this).style("fill", color(d.label_index));
            tooltop.style.opacity = "0";
        });

    }
    // 애니메이션 효과
    animation(delay=1000,duration=1000){
        this.slice.selectAll("rect")
            .attr("y", d=>{ return this.y(0); })
            .attr("height", d=>{ return this.y(this.y_min) - this.y(0); })
            .transition()
            .delay(d=>{return Math.random()*delay;})
            .duration(duration)
            .attr("y", d=>{ return this.y(d.value); })
            .attr("height", d=>{ return this.y(this.y_min) - this.y(d.value); });
    }
}
