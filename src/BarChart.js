import {Axis_Option, Set_Axis} from './Axis_helper.js';

export class BarChart{
    constructor({id,chart_area,labels,datasets,color,width,height,margin,padding,scales}){
        
        // chart_area.selectAll('*').remove();
        chart_area.selectAll('.chartBody').remove();
        chart_area.selectAll('.xAxis').remove();
        chart_area.selectAll('.yAxis').remove();

        
        const axis_option = Axis_Option(labels,datasets,scales,1);
        const x_domain = axis_option.x_domain;

        const y_min = axis_option.y_min;
        const y_max = axis_option.y_max;

        const fillopacity = axis_option.fillopacity;
        const y_domain = axis_option.y_domain
        
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
            .attr("class", "slice")
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
