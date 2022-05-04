import {Set_Axis} from './Axis_helper.js';

export class BubbleChart{
    constructor({chart_area,labels,datasets,color,width,height,margin,padding,scales}){

        chart_area.selectAll('*').remove();

        let x_domain = labels.map(d => d);     
        let x_type = "band";
        
        let y_min = 0;
        let y_max = null;
        let r_min = 0;
        let r_max = null;
        let r_size_min = 10;
        let r_size_max = 50;
        let fillopacity = 0.2;
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
            
        }       
        const y_domain = [y_min,  (y_max != null) ? y_max : d3.max(datasets, label=>{
                return d3.max(label.data, d=>{
                    return d.y;});            
                })];        
        const Axis = Set_Axis({chart_area,x_domain,y_domain,width,height,margin,padding,scales,x_type});

        const r_domain = [0,(r_max != null) ? r_max : d3.max(datasets, label=>{
            return d3.max(label.data, d=>{
                return d.r;});            
            })];        
        
        this.color = color;
        this.y_min = y_min;
        this.x = Axis.x;
        this.y = Axis.y;

        this.r = d3.scaleLinear()
            .domain(r_domain).nice()
            .range([r_size_min, r_size_max]);

        console.log(datasets);

        this.ChartBody = chart_area
            .append("g")
            .attr("class", "chartBody")
        
        this.slice = this.ChartBody.selectAll(".slice")
            .data(datasets)
            .enter().append("g")
            .attr("class", "slice")
        if (x_type == "band"){
            this.slice.attr("transform", "translate(" + this.x.bandwidth()/2 + "," + 0 + ")")
        }
        else{
            this.slice.attr("transform", "translate(" + 0 + "," + 0 + ")")
        }


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
            .attr("r", (d)=>{return this.r(d.r)})
            .style("fill",d=>{return this.color(d.label_index);})
            .style("fill-opacity", fillopacity)
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
            console.log("툴팁 확인 : bubble");
            const value = d.x;
            const name =  d.y;
            const key = d.r;
            // const color = d;
            
            tooltop.innerText = "x : " + value +"\n" + "y : " + name +"\n" + "r : " +key ; // 값 + 데이터 
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




