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