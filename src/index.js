import * as d3 from "https://cdn.skypack.dev/d3@7";

export { Chart } from "./function.js";

export { drawTitle, drawXTitle, drawYTitle } from "./module/title.js";

export { checkMargin } from "./module/CheckMargin.js";

d3
.select("body")
.append("div")
.attr("id","ssart-tooltip")
.attr("class","ssart")
.attr("class","tooltip")
.style("opacity",0);
