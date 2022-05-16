import * as d3 from "https://cdn.skypack.dev/d3@7";
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

  const chartBackground = chart_area
    .append("g")
    .attr("class", "chartBackground")
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
    chartBackground
      .property("visibleStatus", "visible")
      .style("fill", color)
  }
}