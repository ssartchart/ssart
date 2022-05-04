export class CircleChart {
  constructor({ type, svg, width, height, margin, data, options }) {
    const nowWidth = width - margin.left - margin.right;
    const nowHeight = height - margin.top - margin.bottom;
    // let color = d3.scaleOrdinal(d3.schemeCategory10);

    let sum = 0;
    data.datasets.forEach(function (currentElement) {
      sum += currentElement.value;
      if (!currentElement.color) {
        currentElement.color =
          "#" + parseInt(Math.random() * 0xffffff).toString(16);
      }
    });
    this.sum = sum;

    svg.attr("text-anchor", "middle").style("12px sans-serif");
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

    const arcs = pie(data.datasets);

    // g 추가
    const g = svg
      .append("g")
      // 중앙에 차트 그리기
      .attr("transform", `translate(${width / 2}, ${height / 2})`);
    // 색상 랜덤

    // 툴팁 추가
    this.tooltip = d3
      .select("#circle")
      .append("div")
      .attr("class", "tooltip2")
      .style("display", "none");

    //각각의 파이 그리기
    g.selectAll("path")
      .data(arcs)
      .enter()
      .append("path")
      .attr("class", "data")
      .attr("fill", (d) => d.data.color)
      .on("mouseover", this.mouseover.bind(this))
      .on("mousemove", this.mousemove.bind(this))
      .on("mouseout", this.mouseout.bind(this))
      // 다른 그래프와 다르게 .data 라는 객체가 추가되어 있는데, 위에 arcs 변수를 선언할때
      // .pie(data)가 {data, value, index, startAngle, endAngle, padAngle} 의 값을 가지고 있습니다.
      .attr("stroke", "white")
      .attr("d", arc);
    // .append("title")
    // .text((d) => `${d.data.name}: ${d.value}`)
    // 라벨 추가
    const text = g
      .selectAll("text")
      .data(arcs)
      .enter()
      .append("text")
      .attr("transform", (d) => `translate(${arcLabel.centroid(d)})`)
      .attr("dy", "0.35em");

    // 해당 데이터 항목의 이름을 두꺼운 글씨로 출력합니다. ex. A
    if (options.plugins.view) {
      text
        .filter((d) => d.endAngle - d.startAngle > 0.25)
        .append("tspan")
        .attr("x", 0)
        .attr("y", "-0.7em")
        // .style("font-weight", "bold")
        .attr("class", "name")
        .text((d) => d.data.name);

      // 해당 데이터의 수치값을 투명도를 주어 출력합니다. ex. 1000
      text
        // 각이 좁으면 수치 나타내지 않음.
        .filter((d) => d.endAngle - d.startAngle > 0.25)
        .append("tspan")
        .attr("x", 0)
        .attr("y", "0.7em")
        // .attr("fill-opacity", 0.7)
        .attr("class", "value")
        .text((d) => d.value);
    }

    svg.node();
  }

  mouseover() {
    // console.log("mouseover");
    this.tooltip.style("display", "inline-block").style("position", "absolute");
  }

  mousemove(data) {
    // console.log("mousemove");
    const name = data.data.name;
    const value = data.value;
    const sum = this.sum;
    this.tooltip
      // .text([d3.event.pageX, d3.event.pageY].join(","))
      .text(
        [name, value, Math.round((value / sum) * 100, -3) + "%"].join(" | ")
      )
      // .text([Math.round((value / sum) * 100, -3) + "%"])
      .style("left", d3.event.pageX + 20 + "px")
      .style("top", d3.event.pageY + 20 + "px");
  }
  mouseout() {
    // console.log("mouseout");
    this.tooltip.style("display", "none");
  }
}
