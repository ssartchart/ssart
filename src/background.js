export function printColorBar(event) {
  console.log(d3.selectAll(event.target.innerText + " svg g.chartBody rect"))
  d3.selectAll(event.target.innerText + " svg g.chartBody rect")
    .style("fill", "black")
}