export function printColorBar(event) {
  // console.log(d3.selectAll(event.target.innerText + " svg g.chartBody rect"))

  if (event.target.style.fill=="red") {
      event.target.style.fill = "black"
      d3.selectAll(event.target.innerText + " svg g.chartBody rect")
        .style("fill", "black")
  } else {
      event.target.style.fill = "red"
      d3.selectAll(event.target.innerText + " svg g.chartBody rect")
        .style("fill", "none")
  }
}

export function background(chart_area, margin, width, height, options) {

  let color = "black"
  if(options.color) {
    color = options.color
  }

  let opacity = 0.8
  if(options.opacity) {
    opacity = options.opacity
  }

  let rx = 0
  if (options.rx) {
    rx = options.rx
  }

  let ry = 0
  if (options.ry) {
    ry = options.ry
  }

  const chartBody = chart_area
    .append("g")
    .attr("class", "chartBody")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
    .append("rect")
    .property("visibleStatus", "hidden")
    .attr("x", 0)
    .attr("y", 0)
    .attr("width", width - margin.left - margin.right)
    .attr("height", height - margin.top - margin.bottom)
    .style("fill", "none")
    .style("fill-opacity", opacity)
    .attr("rx", rx)
    .attr("ry", ry)

  if (options.display) {
    chartBody
      .property("visibleStatus", "visible")
      .style("fill", color)
  }
}