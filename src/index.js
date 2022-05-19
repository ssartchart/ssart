
export { Chart } from "./function.js";

export { drawTitle, drawXTitle, drawYTitle } from "./module/title.js";

export { checkMargin } from "./module/checkMargin.js";
window.onload = function(){

    let myLink = document.createElement("link");
    myLink.setAttribute("rel", "stylesheet");
    myLink.setAttribute("href", "https://cdn.jsdelivr.net/npm/ssart@1.0.11/src/css/index.css");
    document.head.appendChild(myLink);
}
d3
.select("body")
.append("div")
.attr("id","ssart-tooltip")
.attr("class","ssart")
.attr("class","tooltip")
.style("opacity",0);
