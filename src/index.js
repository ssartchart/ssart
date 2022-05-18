
export { Chart } from "./function.js";

export { drawTitle, drawXTitle, drawYTitle } from "./module/title.js";

export { checkMargin } from "./module/checkMargin.js";

d3
.select("body")
.append("div")
.attr("id","ssart-tooltip")
.attr("class","ssart")
.attr("class","tooltip")
.style("opacity",0);
