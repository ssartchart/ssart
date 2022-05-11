export { Chart, ChartH } from "./function.js";

export { drawTitle, drawXTitle, drawYTitle } from "./Title.js";

export { checkMargin } from "./checkMargin.js";

// export { CircleChart } from "./CircleChart.js";

export { RadarChart } from "./RadarChart.js";


d3
.select("body")
.append("div")
.attr("id","tooltip")
.attr("class","tooltip")
.style("opacity",0);
