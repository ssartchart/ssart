export { Chart } from "./function.js";

export { drawTitle, drawXTitle, drawYTitle } from "./module/Title.js";

export { checkMargin } from "./module/CheckMargin.js";

d3.select("body")
  .append("div")
  .attr("id", "ssart-tooltip")
  .attr("class", "ssart")
  .attr("class", "tooltip")
  .style("opacity", 0);
