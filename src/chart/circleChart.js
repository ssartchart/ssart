export class CircleChart {
  constructor({
    id,
    type,
    labels,
    chart_area,
    width,
    height,
    margin,
    datasets,
    color,
    options,
  }) {
    chart_area.selectAll(".chartBody").remove();

    const nowWidth = width - margin.left - margin.right;
    const nowHeight = height - margin.top - margin.bottom;
    let sum = 0;
    datasets.forEach(function (currentElement) {
      sum += currentElement.value;
    });
    this.sum = sum;
    this.color = color;
    this.fillopacity;
    if (options.scales) {
      if (options.scales.fillopacity) {
        this.fillopacity = options.scales.fillopacity;
      }
    }

    chart_area.attr("text-anchor", "middle").style("12px sans-serif");
    // 원의 넓이 결정
    this.arc = d3.arc();
    if (type === "donut") {
      this.arc
        .innerRadius(Math.min(nowWidth, nowHeight) / 2 / 2)
        .outerRadius(Math.min(nowWidth, nowHeight) / 2);
    } else if (type === "pie") {
      this.arc.innerRadius(0).outerRadius(Math.min(nowWidth, nowHeight) / 2);
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
    xPos = width / 2;
    yPos = height / 2;

    this.ChartBody = chart_area
      .append("g")
      .attr("id", id + "-circle-chartBody")
      .attr("class", "ssart")
      .attr("class", "chartBody")
      // 중앙에 차트 그리기
      .attr("transform", `translate(${xPos}, ${yPos})`);
    // 색상 랜덤

    //각각의 파이 그리기
    this.ChartBody.selectAll("path")
      .data(arcs)
      .enter()
      .append("path")
      .attr("class", "ssart")
      .attr("class", "data")
      .attr("fill", (d, index) => {
        return color(d.data.label_index);
      })
      .attr("stroke", "white")
      .attr("d", this.arc)
      .style("fill-opacity", this.fillopacity);

    // 라벨 추가
    const text = this.ChartBody.selectAll("text")
      .data(arcs)
      .enter()
      .append("text")
      .attr("transform", (d) => `translate(${arcLabel.centroid(d)})`)
      .attr("pointer-events", "none")
      .attr("dy", "0.35em");

    // 데이터 표시 부분
    if (options.plugins.view) {
      text
        .filter((d) => d.endAngle - d.startAngle > 0.25)
        .append("tspan")
        .attr("x", 0)
        .attr("y", "-0.7em")
        .attr("class", "ssart")
        .attr("class", "name")
        .text((d) => labels[d.data.label_index]);
      text
        // 각이 좁으면 수치 나타내지 않음.
        .filter((d) => d.endAngle - d.startAngle > 0.25)
        .append("tspan")
        .attr("x", 0)
        .attr("y", "0.7em")
        .attr("class", "ssart")
        .attr("class", "value")
        .text((d) => d.value);
    }
  }

  tooltip() {
    const tooltop = document.getElementById("ssart-tooltip");
    const color = this.color;
    const sum = this.sum;
    this.ChartBody.selectAll(".data")
      .on("mouseover", function (d) {
        d3.select(this).style(
          "fill",
          d3.rgb(color(d.data.label_index)).darker(2)
        );

        tooltop.style.opacity = "1.0";
      })
      .on("mousemove", function (d) {
        const name = d.data.name;
        const value = d.value;
        tooltop.innerHTML = `
        <svg style="width: 16px; height: 16px">
          <rect width="10px" height="10px" x="1" y="5" fill="${d3.rgb(
            color(d.data.label_index)
          )}" stroke="white" stroke-width="10%"></rect>
        </svg>
        <text style="font-size: 15px; font-weight: 700; margin-bottom: 5px;">${name} : ${value} (${Math.round(
          (value / sum) * 100,
          -3
        )}%)</text>
      `;
        // tooltop.innerText = "name : " + name +"\n" + "value : " + value +"\n" + Math.round((value / sum) * 100, -3) + "%"; // 값 + 데이터
        tooltop.style.left = event.pageX + 20 + "px";
        tooltop.style.top = event.pageY + 20 + "px";
      })
      .on("mouseout", function (d) {
        d3.select(this).style("fill", color(d.data.label_index));
        tooltop.style.opacity = "0";
      });
  }

  // 애니메이션 효과
  animation(delay = 1000, duration = 1000) {
    const arc = this.arc;
    this.ChartBody.selectAll(".data")

      .attr("stroke", "white")
      .style("fill-opacity", this.fillopacity)
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
