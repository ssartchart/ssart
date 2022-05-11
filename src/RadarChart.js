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
        console.log(poly)
        this.color = color
        const datas = [];
        this.datasets = datasets;
        this.coordinates = [];


        let defaultpoly = false;
        
        if (poly != null){
            defaultpoly = poly;
        }
        

        // for(var i = 0 ; i < datasets.length ; i++){
        //     this.datanames.push(datasets[i]);
        // }
        let max = 0;
        var sum = [] ;
        for (var i = 0; i < this.datasets.length; i++){
            var point = {};
            var sumtemp = 0;
            var tmp = this.datasets[i].data;
            for(var j = 0; j < features.length; j++){
                point[features[j]] = tmp[j].value; 
                if(tmp[j].value > max){
                    max = tmp[j].value
                }
                // console.log(tmp[j])
                sumtemp = sumtemp + tmp[j].value;
                // console.log("sum")
                // console.log(sumtemp)
            }
            sum.push(sumtemp);
            datas.push(point);
        }
        
        // console.log("datas")
        // console.log(sum)

        // console.log(datas)
        // console.log("MX : " +max)

        chart_area.attr("width", width).attr("height", height);
        // console.log(width,height);
        
        let key = Math.min(width, height)

        const radialScale = d3.scaleLinear()
        .domain([0,max]) // 시각화 데이터 대상 데이터 min max
        .range([0,key/2.5]); // 출력 결과 min max
    
        // console.log("radar chart")
        const ticks = [];
        for(var i = 0 ; i < depth ; i++){
            ticks.push(max / depth * (i+1));
        }
        // console.log(ticks)
        // console.log(data.datasets)


        this.ChartBody = chart_area
        .append("g")
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

            console.log(radialScale(value)) // 반지름

            if(defaultpoly == false){
                this.ChartBody.append("circle")
                .attr("cx", 0)
                .attr("cy", 0)
                .attr("fill", "none")
                .attr("stroke", "black")
                .attr("r", radialScale(value))
                .attr("opacity" , 1)
            }

       
            this.ChartBody.append("text")
            .attr("x" , -10)
            .attr("y", -radialScale(value))
            .attr("font-size" , 12)
            .text(Math.round(value))

            var tmp = {"x": 0, "y": 0 };
            var start = {"x": 0, "y": 0 };
            

            if(defaultpoly == true){
                for(var j = 0 ; j < features.length ; j++){
                    const angle = (Math.PI / 2) + (2 * Math.PI * j / features.length); //각도
                    const poly_coordinates = angleToCoordinate(angle , ticks[i]);
                    // console.log(poly_coordinates)
                    

                    if(j > 0){
                        this.ChartBody.append("line")
                        .attr("x1",  tmp.x)
                        .attr("y1", tmp.y) // 중점 
                        .attr("x2",   poly_coordinates.x)
                        .attr("y2",   poly_coordinates.y)
                        .attr("stroke","black")
                    }

                    if(j == features.length-1 ){

                        this.ChartBody.append("line")
                        .attr("x1",  poly_coordinates.x)
                        .attr("y1", poly_coordinates.y) // 중점 
                        .attr("x2",  start.x )
                        .attr("y2",  start.y )
                        .attr("stroke","black")

                    }

                    tmp = poly_coordinates;

                    if(j == 0){
                        start = tmp;
                        console.log("start")
                        console.log(start)
                    } 
                }
            }
        };


        for (var i = 0; i < features.length; i++) { // 축 갯수에 따른 세분화
            if(datas.length == 0 ){
                break;
            }
            // console.log("datas length")
            // console.log(datas.length)
            
            const ft_name = features[i]; 

            const angle = (Math.PI / 2) + (2 * Math.PI * i / features.length); //각도
            const line_coordinate = angleToCoordinate(angle, max); // 라인
            const label_coordinate = angleToCoordinate(angle, max*1.1); // 축 이름
            // console.log(features[i]);

            this.ChartBody.append("line") // 십자선
            .attr("x1", 0)
            .attr("y1", 0) // 중점 
            .attr("x2", line_coordinate.x)
            .attr("y2", line_coordinate.y)
            .attr("stroke","black")
            .attr("opacity" , 1)
    
            this.ChartBody.append("text") // 축 이름 라벨링
            .attr("x", label_coordinate.x)
            .attr("y", label_coordinate.y)
            .text(ft_name);
        }
    

        

        const line = d3.line()
        .x(d => d.x)
        .y(d => d.y);
        
        // const colors = ["red", "blue", "green","yellow" ,"purple"]; // 폴리곤 색상.
        // console.log(colors)
        // const rcolor = [];
        // for (var i = 0; i < data.datasets.length; i++){
        //     var tmp = data.datasets.color
        //     rcolor.push(tmp)
        // }
        // console.log("radarchart!")
        // console.log(rcolor)
        // console.log(data.datasets);
        // console.log(datas)
        // console.log("radarchart feature chk!")
        // console.log(features)
        // console.log("name")
        // console.log(datanames)


        function getPathCoordinates(data_point){
            const coordinates = [];
            for(var i = 0 ; i < features.length ; i++){
                const ft_name = features[i];
                const angle = (Math.PI / 2) + (2 * Math.PI * i / features.length);
                coordinates.push(angleToCoordinate(angle, data_point[ft_name]));
                }
            return coordinates;
        }
        

        for(var i = 0 ; i < datas.length ; i++){
            const d = datas[i];
            // console.log("Hi")
            
            // const color = colors[i];
            // console.log(datas[i]);
            this.coordinates[i] = getPathCoordinates(d);
            // console.log(color)
            let name = this.datasets[i].label;
            // console.log(coordinates)
            // console.log(datanames[i])
            // console.log(name)
            // console.log("bye")
            let avg =   Math.round(sum[i]/features.length); // 반올림한 평균값.
            // console.log(avg)


            this.ChartBody.append("path")
            .datum(this.coordinates[i])
            .attr("d",line)
            .attr("class","data")
            .attr("stroke-width", 3)
            .attr("stroke",color(this.datasets[i].data[0].label_index))
            .attr("fill", color(this.datasets[i].data[0].label_index))
            .attr("class", "data")
            .attr("stroke-opacity", 1)
            .attr("opacity", 0.4)
            // .attr("name" , name)
            // .attr("avg" , avg)
            // .on("mouseover", this.mouseover.bind(this))
            // .on("mousemove", this.mousemove.bind(this))
            // .on("mouseout", this.mouseout.bind(this))

            this.coordinates[i].push(avg)
            this.coordinates[i].push(color)
            this.coordinates[i].push(name)
            // console.log(coordinates);
            // console.log("레이더 차트 : ??" );
        }

        chart_area.node();

        // this.tooltip = d3
        // .select("#circle")
        // .append("div")
        // .attr("class", "tooltip2")
        // .style("display", "none");

        
    }
    tooltip(){
        const tooltop = document.getElementById('ssart-tooltip');
        const color = this.color;
        const datasets = this.datasets;
        const coordinates = this.coordinates;

        this.ChartBody.selectAll(".data")
        .on("mouseover", function(d,index){ 
            const label_index = datasets[index].data[0].label_index;
            // const color = data[data.length-2];
            d3.select(this).style("fill", d3.rgb(color(label_index)).darker(2));
            console.log("툴팁 확인 : radar");
    
            tooltop.style.opacity = "1.0";
        })
        .on("mousemove", function(d,index){
            const data = coordinates[index];
            const name = data[data.length-1];
            // const color = data[data.length-2];
            const avg = data[data.length-3];
    
          tooltop.innerText = "name : " + name +"\n" + "avg : " + avg +"\n" +"color : " + color(index); // 값 + 데이터 
          tooltop.style.left = d3.event.pageX + 20 + "px";
          tooltop.style.top = d3.event.pageY + 20 + "px";
        })
        .on("mouseout", function(d,index){ 
            const label_index = datasets[index].data[0].label_index;
            // const color = data[data.length-2];
            d3.select(this).style("fill", color(label_index));
            tooltop.style.opacity = "0";
        });
      }
    // mouseover(data) {
    //     const color = data[data.length-2]
    //     this.tooltip.style("display", "inline-block").style("position", "absolute");
    //     // d3.select(this).style('fill' , 'black');
    //     }
    

    // mousemove(data) {
    //     // console.log("radar tooltip")
    //     // console.log(data)
    //     const name = data[data.length-1];
    //     const color = data[data.length-2];
    //     const avg = data[data.length-3];
    //     this.tooltip
    //     .text(
    //         [name,avg,color ].join(" | ")
    //     )
    //     .style("left", d3.event.pageX + 20 + "px")
    //     .style("top", d3.event.pageY + 20 + "px");
    // }
    // mouseout() {
    //     this.tooltip.style("display", "none");
    // }
}