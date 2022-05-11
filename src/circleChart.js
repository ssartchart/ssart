export class CircleChart {
  constructor({ id, type,labels, chart_area, width, height, margin, datasets,color, options }) {
    chart_area.selectAll('.chartBody').remove();
    
    const nowWidth = width - margin.left - margin.right;
    const nowHeight = height - margin.top - margin.bottom;
    // console.log(datasets)
    let sum = 0;
    datasets.forEach(function (currentElement) {
      sum += currentElement.value;
      // if (!currentElement.color) {
      //   currentElement.color =
      //     "#" + parseInt(Math.random() * 0xffffff).toString(16);
      // }
    });
    this.sum = sum;
    this.color = color;

    chart_area
      .attr("text-anchor", "middle").style("12px sans-serif");
    // 원의 넓이 결정
    const arc = d3.arc();
    if (type === "donut") {
      arc
        .innerRadius(Math.min(nowWidth, nowHeight) / 2 / 2)
        .outerRadius(Math.min(nowWidth, nowHeight) / 2);
    } else if (type === "pie") {
      arc.innerRadius(0).outerRadius(Math.min(nowWidth, nowHeight) / 2);
    }

    // 각각의 이름과 내용이 원의 중심에서 얼마나 떨어져서 나타낼지 표현하는 함수
    const arcLabel = (() => {
      const radius = (Math.min(nowWidth, nowHeight) / 2) * 0.8;
      return d3.arc().innerRadius(radius).outerRadius(radius);
    })();

    // 새로운 기본값의 파이 모양의 생성
    const pie = d3.pie();
    if (options.plugins.sort) {
      // 내림차순
      pie.sort((a, b) => b.value - a.value).value((d) => d.value);
    } else {
      // 오름차순
      pie.sort((a, b) => a.value - b.value).value((d) => d.value);
    }

    const arcs = pie(datasets);
    const position = options.plugins.legend.position;
    let xPos, yPos;
    xPos = width / 2
    yPos = height / 2
    // if (position === "top") {
    //   xPos = width / 2
    //   yPos = height - nowHeight + height / 2
    // } else if (position === "bottom") {
    //   xPos = width / 2
    //   yPos = height / 2
    // } else if (position === "left") {
    //   xPos = width - nowWidth + (nowWidth / 2) + nowWidth / datasets.length
    //   yPos = height / 2
    // } else if (position === "right") {
    //   xPos = width - nowWidth + (nowWidth / 2) - nowWidth / datasets.length
    //   yPos = height / 2
    // }
    // g 추가
    this.ChartBody = chart_area
      .append("g")
      .attr("class", 'chartBody')
      // 중앙에 차트 그리기
      .attr("transform", `translate(${xPos}, ${yPos})`);
    // 색상 랜덤

    // 툴팁 추가
    // this.tooltip = document.getElementById('tooltip');

    //각각의 파이 그리기
    this.ChartBody.selectAll("path")
      .data(arcs)
      .enter()
      .append("path")
      .attr("class", "data")
      .attr("fill", (d,index) => {
        // console.log(d.data.color)
        return color(d.data.label_index)
      })
      // .on("mouseover", this.mouseover.bind(this))
      // .on("mousemove", this.mousemove.bind(this))
      // .on("mouseout", this.mouseout.bind(this))
      .attr("stroke", "white")
      .attr("d", arc)
      // 애니메이션 효과
      .transition()
      .duration(1500)
      .attrTween("d", function (d) {
        let i = d3.interpolate(d.startAngle, d.endAngle);
        return function (t) {
          d.endAngle = i(t);
          return arc(d);
        };
      });

    // 라벨 추가
    const text = this.ChartBody
      .selectAll("text")
      .data(arcs)
      .enter()
      .append("text")
      .attr("transform", (d) => `translate(${arcLabel.centroid(d)})`)
      .attr("dy", "0.35em");

    // 데이터 표시 부분
    if (options.plugins.view) {
      text
        .filter((d) => d.endAngle - d.startAngle > 0.25)
        .append("tspan")
        .attr("x", 0)
        .attr("y", "-0.7em")
        .attr("class", "name")
        .text((d) => labels[d.data.label_index]);
      text
        // 각이 좁으면 수치 나타내지 않음.
        .filter((d) => d.endAngle - d.startAngle > 0.25)
        .append("tspan")
        .attr("x", 0)
        .attr("y", "0.7em")
        .attr("class", "value")
        .text((d) => d.value);
    }
    // const l = svg
    //   .append("g")
    //   .attr("class", "chart-legend")
    //   .attr("transform", `translate(0,${height - 20})`);

    // const xl = d3
    //   .scaleBand()
    //   .range([0, width])
    //   .padding(0.3)
    //   .domain(data.datasets.map((d) => d.name));

    // const legend = l
    //   .selectAll(".chart-legend")
    //   .data(data.datasets)
    //   .enter()
    //   .append("g")
    //   .attr("class", (d, i) => `chart-legend-${i}`)
    //   .attr("transform", (d, i) => `translate(${xl(d.name)},0)`);
    // legend
    //   .append("rect")
    //   .attr("width", 12)
    //   .attr("height", 12)
    //   .style("fill", (d) => d.color);

    // legend
    //   .append("text")
    //   .attr("x", 30)
    //   .attr("y", 10)
    //   .style("font-size", 10)
    //   .style("padding", 10)
    //   // attr("text-anchor", "middle")
    //   //   .style("font-size", "12px sans-serif")
    //   .text((d) => d.name);

    // svg.node();
  }

  // mouseover(d,index) {
  //   // console.log(d,index)
  //   // console.log(this)
  //   // this.selectAll(".data").style("fill", d3.rgb(this.color(index)).darker(2));
  //   // console.log("222")
  //   this.tooltip.style("display", "inline-block").style("position", "absolute");
  // }

  // mousemove(data) {
  //   const name = data.data.name;
  //   const value = data.value;
  //   const sum = this.sum;
  //   this.tooltip
  //     // .text(
  //     //   [name, value, Math.round((value / sum) * 100, -3) + "%"].join(" | ")
  //     // )
  //     .style("left", d3.event.pageX + 20 + "px")
  //     .style("top", d3.event.pageY + 20 + "px");
  //   this.tooltip.innerHTML = "test"
  // }
  // mouseout() {
  //   this.tooltip.style("display", "none");
  // }

  tooltip(){
    console.log("22233");
    const tooltop = document.getElementById('ssart-tooltip');
    const color = this.color;
    const sum = this.sum;
    this.ChartBody.selectAll(".data")
    .on("mouseover", function(d,index){ 
        // console.log(d.data)
        d3.select(this).style("fill", d3.rgb(color(d.data.label_index)).darker(2));
        console.log("툴팁 확인 : circle");

        tooltop.style.opacity = "1.0";
    })
    .on("mousemove", function(d,index){
      const name = d.data.name;
      const value = d.value;

      tooltop.innerText = "name : " + name +"\n" + "value : " + value +"\n" + Math.round((value / sum) * 100, -3) + "%"; // 값 + 데이터 
      tooltop.style.left = d3.event.pageX + 20 + "px";
      tooltop.style.top = d3.event.pageY + 20 + "px";
    })
    .on("mouseout", function(d,index){ 
        d3.select(this).style("fill", color(d.data.label_index));
        tooltop.style.opacity = "0";
    });
  }
}
