export class CircleChart {
  constructor({ type, svg, width, height, margin, data, options }) {
    const nowWidth = width - margin.left - margin.right;
    const nowHeight = height - margin.top - margin.bottom;

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
    const text = g
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
        .text((d) => d.data.name);
      text
        // 각이 좁으면 수치 나타내지 않음.
        .filter((d) => d.endAngle - d.startAngle > 0.25)
        .append("tspan")
        .attr("x", 0)
        .attr("y", "0.7em")
        .attr("class", "value")
        .text((d) => d.value);
    }
    const l = svg
      .append("g")
      .attr("class", "chart-legend")
      .attr("transform", `translate(0,${height - 20})`);

    const xl = d3
      .scaleBand()
      .range([0, width])
      .padding(0.3)
      .domain(data.datasets.map((d) => d.name));

    const legend = l
      .selectAll(".chart-legend")
      .data(data.datasets)
      .enter()
      .append("g")
      .attr("class", (d, i) => `chart-legend-${i}`)
      .attr("transform", (d, i) => `translate(${xl(d.name)},0)`);
    legend
      .append("rect")
      .attr("width", 12)
      .attr("height", 12)
      .style("fill", (d) => d.color);

    legend
      .append("text")
      .attr("x", 30)
      .attr("y", 10)
      .style("font-size", 10)
      .style("padding", 10)
      // attr("text-anchor", "middle")
      //   .style("font-size", "12px sans-serif")
      .text((d) => d.name);

    svg.node();
  }

  mouseover() {
    this.tooltip.style("display", "inline-block").style("position", "absolute");
  }

  mousemove(data) {
    const name = data.data.name;
    const value = data.value;
    const sum = this.sum;
    this.tooltip
      .text(
        [name, value, Math.round((value / sum) * 100, -3) + "%"].join(" | ")
      )
      .style("left", d3.event.pageX + 20 + "px")
      .style("top", d3.event.pageY + 20 + "px");
  }
  mouseout() {
    this.tooltip.style("display", "none");
  }
}
