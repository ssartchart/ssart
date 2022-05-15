import * as d3 from "https://cdn.skypack.dev/d3@7";
export class RadarChart {
    constructor({ id, type, chart_area, width, height, margin, datasets, labels,color, scales,poly}){
        chart_area.selectAll('.chartBody').remove();
        let depth = 5;
        if (scales != null){
            if (scales.depth != null){
                depth = scales.depth
            }
        }
        const features = []; // 축 저장.
        for(var i = 0 ; i < labels.length ; i++){
            features.push(labels[i])
        }
        
        this.color = color
        const datas = [];
        this.datasets = datasets;
        this.coordinates = [];
        this.dot_idx = d3.local();
        this.data_idx = {};
        this.dot_data = [];
        this.labels = labels;
        let defaultpoly = false;
        
        if (poly != null){
            defaultpoly = poly;
        }
        
        let max = 0;
        var sum = [];
        for (var i = 0; i < this.datasets.length; i++){
            var point = {};
            var sumtemp = 0;
            var tmp = this.datasets[i].data;
            for(var j = 0; j < features.length; j++){
                point[features[j]] = tmp[j].value; 
                if(tmp[j].value > max){
                    max = tmp[j].value
                }
                sumtemp = sumtemp + tmp[j].value;
            }
            sum.push(sumtemp);
            datas.push(point);
            this.data_idx[datasets[i].label] = i;
        }
        chart_area.attr("width", width).attr("height", height);
        
        let key = Math.min(width, height)

        const radialScale = d3.scaleLinear()
        .domain([0,max]) // 시각화 데이터 대상 데이터 min max
        .range([0,key/2.5]); // 출력 결과 min max
    
        const ticks = [];
        for(var i = 0 ; i < depth ; i++){
            ticks.push(max / depth * (i+1));
        }

        this.ChartBody = chart_area
        .append("g")
        .attr("class", "ssart")
        .attr("class", "chartBody")

        .attr("transform", `translate(${width / 2}, ${(height/2)+10})`);
        
        if(datas.length == 0){
            chart_area.attr("opacity" , 0)
        }else{
            chart_area.attr("opacity" , 1)
        }


        function angleToCoordinate(angle, value){ // 중간 좌표 return 함수.
            const x = Math.cos(angle) * radialScale(value);
            const y = Math.sin(angle) * radialScale(value);
            return {"x": + x, "y": 0 - y};
        }

        for(var i = 0 ; i < depth ; i++){

            const value = ticks[i];

            if(defaultpoly == false){
                this.ChartBody.append("circle")
                .attr("cx", 0)
                .attr("cy", 0)
                .attr("fill", "none")
                .attr("stroke", "#e2e2e2")
                .attr("r", radialScale(value))
                .attr("opacity" , 1)
            }

            this.ChartBody.append("text")
                .attr("x" , 0)
                .attr("y", -radialScale(value))
                .attr("font-size", 12)
                .attr("text-anchor", "middle")
                .text(Math.round(value))

            var tmp = {"x": 0, "y": 0 };
            var start = {"x": 0, "y": 0 };
            

            if (defaultpoly == true) {
                
                for(var j = 0 ; j < features.length ; j++){
                    const angle = (Math.PI / 2) + (2 * Math.PI * j / features.length); //각도
                    const poly_coordinates = angleToCoordinate(angle , ticks[i]);

                    if(j > 0){
                        this.ChartBody.append("line")
                        .attr("x1",  tmp.x)
                        .attr("y1", tmp.y) // 중점 
                        .attr("x2",   poly_coordinates.x)
                        .attr("y2",   poly_coordinates.y)
                        .attr("stroke","#e2e2e2")
                    }

                    if(j == features.length-1 ){

                        this.ChartBody.append("line")
                        .attr("x1",  poly_coordinates.x)
                        .attr("y1", poly_coordinates.y) // 중점 
                        .attr("x2",  start.x )
                        .attr("y2",  start.y )
                        .attr("stroke","#e2e2e2")

                    }
                    tmp = poly_coordinates;

                    if(j == 0){
                        start = tmp;
                    } 
                }
            }
        };

        for (var i = 0; i < features.length; i++) { // 축 갯수에 따른 세분화
            if(datas.length == 0 ){
                break;
            }
            
            const ft_name = features[i]; 
            const angle = (Math.PI / 2) + (2 * Math.PI * i / features.length); //각도
            const line_coordinate = angleToCoordinate(angle, max); // 라인
            const label_coordinate = angleToCoordinate(angle, max*1.1); // 축 이름

            this.ChartBody.append("line") // 십자선
                .attr("x1", 0)
                .attr("y1", 0) // 중점 
                .attr("x2", line_coordinate.x)
                .attr("y2", line_coordinate.y)
                .attr("stroke","#e2e2e2")
                .attr("opacity" , 1)
                .attr("class", "ssart")
                .attr("class", "line")

    
            this.ChartBody.append("text") // 축 이름 라벨링
                .attr("x", label_coordinate.x)
                .attr("y", label_coordinate.y)
                .attr("text-anchor", "middle")                
                .text(ft_name);
        }
    

        
        this.ChartBody.attr("pointer-events", "none");
        const line = d3.line()
            .x(d => d.x)
            .y(d => d.y);

        function getPathCoordinates(data_point){
            const coordinates = [];
            for(var i = 0 ; i < features.length ; i++){
                const ft_name = features[i];
                const angle = (Math.PI / 2) + (2 * Math.PI * i / features.length);
                coordinates.push(angleToCoordinate(angle, data_point[ft_name]));
            }
            coordinates.push(coordinates[0]);
            return coordinates;
        }
        
        for(var i = 0 ; i < datas.length ; i++){
            const d = datas[i];
            this.coordinates[i] = getPathCoordinates(d);
            let name = this.datasets[i].label;
            let avg = Math.round(sum[i]/features.length); // 반올림한 평균값.
            this.ChartBody.append("path")
                .datum(this.coordinates[i])
                .attr("d", line)
                .attr("class", "ssart")
                .attr("class", "data")
                .attr("stroke-width", 2.5)
                .attr("stroke", color(this.datasets[i].data[0].label_index))
                .attr("fill", color(this.datasets[i].data[0].label_index))
                .attr("class", "data")
                .attr("stroke-opacity", 1)
                .attr("fill-opacity", 0.4)
                .attr("pointer-events", "all");
            
            this.coordinates[i].push(avg)
            this.coordinates[i].push(color)
            this.coordinates[i].push(name)
            const pos_list = this.coordinates[i];
            let dotInstance;
            for (let j = 0; j < labels.length; j++) {                
                dotInstance = this.ChartBody.append("circle")
                    .data(this.coordinates[i])
                    .attr("r", 3)
                    .attr("cx", pos_list[j].x)
                    .attr("cy", pos_list[j].y)
                    .attr("fill", "white")
                    .attr("stroke", color(this.datasets[i].data[0].label_index))
                    .attr("stroke-width", 2)
                    .attr("class", "dot")
                    .attr("pointer-events", "all");
                // dot_idx.push(labels.length * i + j)
                this.dot_idx.set(dotInstance.node(), i * labels.length + j);                
            }
            const chartColor = color(this.datasets[i].data[0].label_index);
            const object = datas[i];
            
            
            for (const property in object) {
                this.dot_data.push([object[property], this.coordinates[i][this.coordinates[i].length - 1], chartColor])
            }
        }        
        chart_area.node();       
    }
    
    tooltip() {        
        const tooltop = document.getElementById('ssart-tooltip');
        const color = this.color;
        const datasets = this.datasets;
        const coordinates = this.coordinates;
        const labels = this.labels;
        const data_idx = this.data_idx;
        const dot_idx = this.dot_idx;
        const dot_data = this.dot_data;
        let index;
        // 레이더 너비
        this.ChartBody.selectAll(".data")
            .on("mouseover", function (event, d) {                
                index = data_idx[d[d.length - 1]];                
                const label_index = datasets[index].data[0].label_index;
                d3.select(this).style("fill", d3.rgb(color(label_index)).darker(2));        
                tooltop.style.opacity = "1.0";
            })
            .on("mousemove", function (event, d, index) {
                index = data_idx[d[d.length - 1]];
                const label_index = datasets[index].data[0].label_index;
                const fill = d3.rgb(color(label_index));
                const data = coordinates[index];
                const name = data[data.length-1];
                const avg = data[data.length-3];
        
                // tooltop.innerText = "name : " + name +"\n" + "avg : " + avg +"\n" +"color : " + color(index); // 값 + 데이터 
                tooltop.innerHTML = `
                    <div>
                        <svg style="width: 10px; height: 10px">
                            <rect width="10px" height="10px" fill="${fill}" stroke="white" stroke-width="10%"></rect>
                        </svg>
                        <text style="font-size: 15px; font-weight: 600">${name}</text>
                    </div>
                    <text style="font-size: 14px; font-weight: 500;">AVG : ${avg}</text>
                `
                tooltop.style.left = event.pageX + 20 + "px";
                tooltop.style.top = event.pageY + 20 + "px";
            })
            .on("mouseout", function (event, d, index) {
                index = data_idx[d[d.length - 1]];
                const label_index = datasets[index].data[0].label_index;
                d3.select(this).style("fill", color(label_index));  
                tooltop.style.opacity = "0";
            })
        // 레이더 꼭지점
        this.ChartBody.selectAll(".dot")
            .on("mouseover", function (event, d) {
                let index = dot_idx.get(this);
                d3.select(this).attr("r", 4 );
                const dot_value = dot_data[index][0];              
                const name = dot_data[index][1];
                const labelName = labels[index % labels.length];
                const color = dot_data[index][2]
            // tooltop.innerText = "name : " + name +"\n" + "data: " + dot_data  + "\n" + "avg : " + avg +"\n" +"color : " + color(index); // 값 + 데이터 
                tooltop.innerHTML = `
                    <text style="display: block; font-size: 15px; font-weight: 600">${labelName}</text>
                    <div>
                        <svg style="width: 10px; height: 10px">
                            <rect width="10px" height="10px" fill="${color}" stroke="white" stroke-width="10%"></rect>
                        </svg>
                        <text style="font-size: 14px; font-weight: 500;">${name} : ${dot_value}</text>
                    </div>
                `
                // tooltop.innerText = `name : ${name}\n` + `data: ${dot_data}`; // 값 + 데이터 
                tooltop.style.left = event.pageX + 20 + "px";
                tooltop.style.top = event.pageY + 20 + "px";
                tooltop.style.opacity = "1.0";
                const tooltipSvg = d3.select('#tooltip span').append('svg')
                    tooltipSvg
                        .append('rect')
                        .attr('x', 0)
                        .attr('y', 0)
                        .attr('width', '2px')
                        .attr('height', '2px')
                        .attr('stroke', 'red')
                        .attr('fill', 'red');
        })
        .on("mouseout", function(event, d, index){ 
            d3.select(this).attr("r", 3);
            tooltop.style.opacity = "0";
        });
    }
}