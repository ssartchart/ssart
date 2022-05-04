// export class RadarChart {
//     constructor({type,svg,width,height}){

//     }


// }


function MakeRadar(){

    const data = [];
    const features = ["A","B","C","D"];
    for (var i = 0; i < 3; i++){
    var point = {}
    features.forEach(f => point[f] = 1 + Math.random() * 10);
    data.push(point);
    }

    const svg = d3.select("body").append("svg")
    .attr("width", 600)
    .attr("height", 600);

    const radialScale = d3.scaleLinear()
    .domain([0,30]) // 시각화 데이터 대상 데이터 min max
    .range([0,500]); // 출력 결과 min max

    
    const ticks = [2,4,6,8,10]; //그래프간 거리 .

    ticks.forEach(t =>
    svg.append("circle")
    .attr("cx", 300)
    .attr("cy", 300)
    .attr("fill", "none")
    .attr("stroke", "black")
    .attr("r", radialScale(t))
    );  // 원 축 그리는 기능.

    function angleToCoordinate(angle, value){ // 중간 좌표 return 함수.
        const x = Math.cos(angle) * radialScale(value);
        const y = Math.sin(angle) * radialScale(value);
        return {"x": 300 + x, "y": 300 - y};
    }

    for (var i = 0; i < features.length; i++) { // 축 갯수에 따른 세분화
    const ft_name = features[i]; 
    const angle = (Math.PI / 2) + (2 * Math.PI * i / features.length); //각도
    const line_coordinate = angleToCoordinate(angle, 10); // 라인
    const label_coordinate = angleToCoordinate(angle, 11); // 축 이름

    svg.append("line") // 십자선
    .attr("x1", 300)
    .attr("y1", 300) // 중점 
    .attr("x2", line_coordinate.x)
    .attr("y2", line_coordinate.y)
    .attr("stroke","black");

    svg.append("text") // 축 이름 라벨링
    .attr("x", label_coordinate.x)
    .attr("y", label_coordinate.y)
    .text(ft_name);
    }

    const line = d3.line()
    .x(d => d.x)
    .y(d => d.y);
    
    const colors = ["red", "blue", "green"]; // 폴리곤 색상.

    function getPathCoordinates(data_point){
        const coordinates = [];
        for (var i = 0; i < features.length; i++){
            const ft_name = features[i];
            const angle = (Math.PI / 2) + (2 * Math.PI * i / features.length);
            coordinates.push(angleToCoordinate(angle, data_point[ft_name]));
        }
        return coordinates;
    }
    
    for (var i = 0; i < data.length; i ++){
        
        const d = data[i];
        const color = colors[i];
        const coordinates = getPathCoordinates(d);

        //draw the path element
        svg.append("path")
        .datum(coordinates)
        .attr("d",line)
        .attr("stroke-width", 3)
        .attr("stroke", color)
        .attr("fill", color)
        .attr("stroke-opacity", 1)
        .attr("opacity", 0.5);
    }

console.log("레이더: " + data);

}