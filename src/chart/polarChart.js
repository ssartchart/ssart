
export class PolarChart {
    constructor({ id, type, chart_area, width, height, margin, datasets, options, labels, color, scales }) {
        chart_area.selectAll('.chartBody').remove();
        let depth = 5;
        if (scales != null){
            if (scales.depth != null){
                depth = scales.depth
            }
        }        
        this.color = color
        this.curr_data_set = {};
        this.datasets = datasets;
        this.data_idx = d3.local();
        this.coordinates = [];
        
        let point = {};
        let max_value = 0;
        for (let i = 0; i < datasets.length; i++){
            let tmp = datasets[i];
            point[tmp.name] = tmp.value;
            max_value = Math.max(max_value, tmp.value);
            this.curr_data_set[tmp.label_index] = datasets[i];
        }        
        chart_area.attr("width", width).attr("height", height);
       
        let key = Math.min(width, height)

        const radialScale = d3.scaleLinear()
        .domain([0,max_value]) // 시각화 데이터 대상 데이터 min max
        .range([0,key/2.5]); // 출력 결과 min max
    
        const ticks = [];
        for(var i = 0 ; i < depth ; i++){
            ticks.push(max_value / depth * (i+1));
        }

        this.ChartBody = chart_area
            .append("g")
            .attr("class", "ssart")
            .attr("class", "chartBody")
            .attr("transform", `translate(${width / 2}, ${(height/2)+10})`);
        
        
        if(Object.keys(this.curr_data_set).length == 0){
            this.ChartBody.attr("opacity" , 0)
        }else{
            this.ChartBody.attr("opacity" , 1)
        }

        function angleToCoordinate(angle, value){ // 중간 좌표 return 함수.
            const x = Math.cos(angle) * radialScale(value);
            const y = Math.sin(angle) * radialScale(value);
            return {"x": + x, "y": 0 - y};
        }
        for(var i = 0 ; i < depth ; i++){

            const value = ticks[i];
            
            this.ChartBody.append("circle")
                .attr("cx", 0)
                .attr("cy", 0)
                .attr("fill", "none")
                .attr("stroke", "#e2e2e2")
                .attr("r", radialScale(value))
                .attr("opacity" , 1)          

       
            this.ChartBody.append("text")
                .attr("x" , 0)
                .attr("y", -radialScale(value))
                .attr("font-size", 12)
                .attr("text-anchor", "middle")
                .text(Math.round(value))       
        };

        const line = d3.line()
            .x(d => d.x)
            .y(d => d.y);

        for (var i = 0; i < datasets.length; i++) { // 축 갯수에 따른 세분화
            const angle = (Math.PI / 2) - (2 * Math.PI / datasets.length) * (i + 0.5)
            const label_coordinate = angleToCoordinate(angle, max_value*1.1); // 축 이름
         
            this.ChartBody.append("text") // 축 이름 라벨링
                .attr("x", label_coordinate.x)
                .attr("y", label_coordinate.y)
                .attr("text-anchor", "middle")                
                .text(labels[datasets[i].label_index]);
        }

        chart_area.node();
         
        const nowWidth = width - margin.left - margin.right;
        const nowHeight = height - margin.top - margin.bottom;
        let sum_value = 0;
        datasets.forEach(function (currentElement) {
            sum_value += currentElement.value;
        });
        this.sum_value = sum_value;
        this.color = color;
        this.fillopacity;

        this.arc = d3.arc();
        this.arc
            .outerRadius(function (d) {
                return radialScale(d.data.value) ;
            })
            .innerRadius(0);

        const arcLabel = (() => {
            const radius = (Math.min(nowWidth, nowHeight) / 2) * 0.8;
            return d3.arc().innerRadius(radius).outerRadius(radius);
        })();
        // 새로운 기본값의 파이 모양의 생성
        const pie = d3.pie();
        pie.sort((a, b) => 0).value(d => 1)

        const arcs = pie(datasets);
        let xPos, yPos;
        xPos = width / 2
        yPos = height / 2
        // 각각의 파이 그리기
        const path = this.ChartBody.append("g");
        path.selectAll("path")
            .data(arcs)
            .enter()
            .append("path")
            .attr("class","ssart")
            .attr("class", "data")
            .attr("fill", (d, index) => {                
                return color(d.data.label_index);
            })
            .attr("stroke", "#e2e2e2")
            .attr("d", this.arc)
            .style("fill-opacity", .5)
                
        for (let i = 0; i < datasets.length; i++) {
            this.data_idx.set(d3.selectAll(`#${id} .chartBody g`).node().children[i],
                datasets[i].label_index
            );
        }
    }
    
    tooltip(){
        const tooltop = document.getElementById('ssart-tooltip');
        const color = this.color;
        const datasets = this.datasets;
        const coordinates = this.coordinates;
        const data_idx = this.data_idx;
        const curr_data_set = this.curr_data_set;
        let index;
        this.ChartBody.selectAll(".data")
        .on("mouseover", function(d){            
            index = d.data.label_index;           
            const label_index = curr_data_set[index].label_index;            
            d3.select(this).style("fill", d3.rgb(color(label_index)).darker(2));    
            tooltop.style.opacity = "1.0";
            const labelName = d.data.name;
            const value = d.data.value;
            tooltop.innerHTML = `
                    <text style="display: block; font-size: 15px; font-weight: 600">${labelName}</text>
                    <div>
                        <svg style="width: 10px; height: 10px">
                            <rect width="10px" height="10px" fill="${d3.rgb(color(label_index))}" stroke="white" stroke-width="10%"></rect>
                        </svg>
                        <text style="font-size: 14px; font-weight: 500;">${labelName} : ${value}</text>
                    </div>
                `
        })
        .on("mousemove", function(d){
            tooltop.style.left = event.pageX + 20 + "px";
            tooltop.style.top = event.pageY + 20 + "px";        
        })
        .on("mouseout", function (d, index) { 
            index = data_idx.get(this); 
            const label_index = curr_data_set[index].label_index;
            // const color = data[data.length-2];
            d3.select(this).style("fill", color(label_index));
            tooltop.style.opacity = "0";
        });
    }
    // 애니메이션 효과
    animation(delay=1000,duration=1000){
        const arc = this.arc;
        this.ChartBody.selectAll(".data")

        .attr("stroke", "white")    
        .style("fill-opacity", .5)
        .transition()
        .duration(1500)
        .attrTween("d", function (d) {
            let i = d3.interpolate(d.startAngle, d.endAngle);
            return function (t) {
                d.endAngle = i(t);
                return arc(d);
            };
        });
    }
}