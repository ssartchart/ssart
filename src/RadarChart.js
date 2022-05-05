export class RadarChart {
    constructor({type,svg,width,height,data}){

        const features = []; // 축 저장.
        for(var i = 0 ; i < data.labels.length ; i++){
            features.push(data.labels[i])
        }
        // console.log(features)
        // console.log("feature")

        const datas = [];

        console.log(data)
        let max = 0;

        for (var i = 0; i < data.data.length; i++){
            var point = {};
            var tmp = data.data[i];
            for(var j = 0; j < features.length; j++){
                point[features[j]] = tmp[j]; 
                if(tmp[j] > max){
                    max = tmp[j]
                }
                
            }
            datas.push(point);
        }
        
        console.log(datas)
        console.log("datas")
        console.log("MX : " +max)

        svg.attr("width", width).attr("height", height);
        // console.log(width,height);
        
        let key = Math.min(width, height)

        const radialScale = d3.scaleLinear()
        .domain([0,max]) // 시각화 데이터 대상 데이터 min max
        .range([0,key/2.5]); // 출력 결과 min max
    
        // console.log("radar chart")
        const ticks = [];
        for(var i = 0 ; i < 5 ; i++){
            ticks.push(max / 5 * (i+1));
        }
        console.log(ticks)
    
    
        const g = svg
        .append("g")
        .attr("transform", `translate(${width / 2}, ${(height/2)+10})`);
        
        ticks.forEach(t =>
            g.append("circle")
            .attr("cx", 0)
            .attr("cy", 0)
            .attr("fill", "none")
            .attr("stroke", "black")
            .attr("r", radialScale(t))
        );  // 원 축 그리는 기능.
    
        function angleToCoordinate(angle, value){ // 중간 좌표 return 함수.
            const x = Math.cos(angle) * radialScale(value);
            const y = Math.sin(angle) * radialScale(value);
            return {"x":  + x, "y": 0 - y};
        }
    
        for (var i = 0; i < features.length; i++) { // 축 갯수에 따른 세분화
            const ft_name = features[i]; 
            const angle = (Math.PI / 2) + (2 * Math.PI * i / features.length); //각도
            const line_coordinate = angleToCoordinate(angle, max); // 라인
            const label_coordinate = angleToCoordinate(angle, max*1.1); // 축 이름
            // console.log(features[i]);

            g.append("line") // 십자선
            .attr("x1", 0)
            .attr("y1", 0) // 중점 
            .attr("x2", line_coordinate.x)
            .attr("y2", line_coordinate.y)
            .attr("stroke","black");
    
            g.append("text") // 축 이름 라벨링
            .attr("x", label_coordinate.x)
            .attr("y", label_coordinate.y)
            .text(ft_name);
        }
    

        

        const line = d3.line()
        .x(d => d.x)
        .y(d => d.y);
        const colors = ["red", "blue", "green","yellow" ,"purple"]; // 폴리곤 색상.
        // console.log(colors)
        // const rcolor = [];
        // for (var i = 0; i < data.datasets.length; i++){
        //     var tmp = data.datasets.color
        //     rcolor.push(tmp)
        // }
        console.log("radarchart!")
        // console.log(rcolor)
        console.log(data.datasets);
        console.log(datas)
        console.log(features)
        console.log("radarchart chk!")


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
            const color = colors[i];
            console.log("Hi")
            console.log(datas[i]);
            console.log(color)

            let coordinates = getPathCoordinates(d);

            g.append("path")
            .datum(coordinates)
            .attr("d",line)
            .attr("stroke-width", 3)
            .attr("stroke", color)
            .attr("fill", color)
            .attr("stroke-opacity", 1)
            .attr("opacity", 0.5);
            console.log("radar check")

           
            
        }
        
        
    
        console.log("레이더 차트 : ??" );
        svg.node();
        }
    }