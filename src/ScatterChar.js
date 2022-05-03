import {Set_Axis} from './Axis_helper.js';

export class ScatterChart{
    constructor({chart_area,labels,datasets,color,width,height,margin,padding,y_max,y_min}){
        const x_domain = labels.map(d => d);        
        const y_domain = [y_min,  (y_max != null) ? y_max : d3.max(datasets, label=>{
                return d3.max(label.data, d=>{
                    return d.y;});            
                })];        
        const Axis = Set_Axis({chart_area,x_domain,y_domain,width,height,margin,padding,x_type:"number"});


        this.color = color;
        this.y_min = y_min;
        this.x = Axis.x;
        this.y = Axis.y;

        console.log(datasets);

        this.ChartBody = chart_area.selectAll(".slice")
            .data(datasets)
            .enter().append("g")
            .attr("class", "chartBody")
            .attr("transform", "translate(" + 0 + "," + 0 + ")")


        console.log(this.x('a'));
        console.log(this.x(80));
        this.ChartBody.selectAll(".data")
            .data(datasets=>{return datasets.data;})
            .enter().append("circle")
            .filter(d=>{return this.x(d.x)>= 0 && this.x(d.x) <= width - margin.left && this.y(d.y)>= 0 && this.y(d.y) <= height - margin.top;})
            .attr("class","data")
            .attr("x",  d=> { return this.x(d.x); } )
            .attr("y", d=> { return this.y(d.y); } )
            .attr("transform", (d)=>{
                return "translate(" + this.x(d.x) + "," + this.y(d.y) + ")";
            })
            .attr("r", 5)
            .style("fill",d=>{return this.color(d.label_index);})
            .style("fill-opacity", 1)
            // .on("mouseover", onMouseOver)
            // .on("mouseout", onMouseOut);

        chart_area.node();
        
    }

    // 툴팁 효과
tooltip(){
            const tooltop = document.getElementById('tooltip');
            const color = this.color;
            this.ChartBody.selectAll(".data")
            .on("mouseover", function(d){ 
                const x = event.pageX;
                const y = event.pageY;
                // const target = event.target;
                const positionLeft =x;
                const positionTop = y;
                d3.select(this).style("fill", d3.rgb(color(d.label_index)).darker(2));
                console.log("툴팁 확인 : scatter");
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
}




