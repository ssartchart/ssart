// export class Radarchart{
//     constructor({chart_area,labels,datasets,color,width,height,margin,padding,y_max,y_min}){
//         const x_domain = labels.map(d => d);        
//         const y_domain = [y_min,  (y_max != null) ? y_max : d3.max(datasets, label=>{
//                 return d3.max(label.data, d=>{
//                     return d.y;});            
//                 })];        
//         const Axis = Set_Axis({chart_area,x_domain,y_domain,width,height,margin,padding,x_type:"number"});


//         this.color = color;
//         this.y_min = y_min;
//         this.x = Axis.x;
//         this.y = Axis.y;

//         console.log(datasets);

//         this.ChartBody = chart_area.selectAll(".slice")
//             .data(datasets)
//             .enter().append("g")
//             .attr("class", "chartBody")
//             .attr("transform", "translate(" + 0 + "," + 0 + ")")



//         this.ChartBody.selectAll(".data")
//             .data(datasets=>{return datasets.data;})
//             .enter().append("circle")
//             .filter(d=>{return this.x(d.x)>= 0 && this.x(d.x) <= width - margin.left && this.y(d.y)>= 0 && this.y(d.y) <= height - margin.top;})
//             .attr("class","data")
//             .attr("x",  d=> { return this.x(d.x); } )
//             .attr("y", d=> { return this.y(d.y); } )
//             .attr("transform", (d)=>{
//                 return "translate(" + this.x(d.x) + "," + this.y(d.y) + ")";
//             })
//             .attr("r", 5)
//             .style("fill",d=>{return this.color(d.label_index);})
//             .style("fill-opacity", 1)

//         chart_area.node();
        
//     }

// }

function MakeRadar(){
    const svgDimensions = {
        width: 300, height: 300,
    };
    // const radius = Math.min(svgDimensions.width, svgDimensions.height) / 2; // 반지름.
    const data = [1,2,3,4,5];
    // const num = 5;
    // const points = [
    //     -130,-40 ,
    //     0,-150 ,
    //     130,-40 ,
    //     80,140 ,
    //     -80,140 ,
    //    ]

    const svg = d3 // body
        .select("body")
        .append("svg")
        .attr("width", svgDimensions.width)
        .attr("height", svgDimensions.height)
        .style("border", "3px solid rgba(0,0,0,0.1)")

    const g = svg
        .append("g")
        .attr(
        "transform",
        `translate(${svgDimensions.width /2}, ${svgDimensions.height / 2})`
        );

    // const color = d3.scaleOrdinal([ //  색상코드
    //     "#64a0ff",
    // ]);

    // const arc = d3.arc().innerRadius(40).outerRadius(radius); // 파이 모양 결정 (내구 반지름 /외부 반지름)
    const poly = g
        .selectAll("path")
        .data(data)
        .enter()
        .append('path')
        .attr('d',"M -130,-40 0,-150 130,-40 80,140 -80,140 Z M -105,-30 ,0,-125 105,-30 , 65,115 , -65,115 Z M -80,-20 ,0,-100 80,-20 , 52,95 , -52,95 Z M -55,-10 ,0,-70 55,-10 , 37,70 , -37,70 Z  M -30,0 ,0,-40 30,0 , 18,40 , -18,40 Z     M 0,10 0,-150 , 0,10 , -130,-40 , 0 ,10 , 130,-40 ,0,10 , 80,140,0,10,-80,140")
        .attr("fill", "none")
        .style('stroke',"black")
        .style('stroke-width', '0.1px')
        

}
// export{PieChart} 