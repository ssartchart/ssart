import { Chart } from "../function.js";
import cis from "./coloris.min.js";

let currentId = "";
let currentParam = "";
let currentIndex = "";

function createColorDiv() {
  Coloris({
    el: ".coloris",
  });

  let colorPicker = d3
    .select("body")
    .append("div")
    .attr("id", "ssart-color-div")
    .style("visibility", "hidden")
    .property("visibility", "hidden");

  let colorDiv = colorPicker
    .append("div")
    .attr("class", "cir-field")
    .style("position", "absolute")
    .style("left", "50%")
    .style("transform", "translate(-50%,  -50%)")
    .style("z-index", 1000);

  colorDiv
    .append("input")
    .attr("type", "text")
    .attr("id", "ssart-color-input")
    .attr("class", "coloris");
  let colorButton = colorDiv
    .append("button")
    .attr("id", "ssart-color-button")
    .attr("class", "ssart-color-button-design")
    .on("click", () => {
      const color = document.querySelector("#ssart-color-input");
      const inputValue = color.value;

      currentParam.data.datasets[currentIndex].backgroundColor = inputValue;
      Chart(currentId, currentParam);
      color.style.color = inputValue;
    });
  colorButton
    .append("img")
    .attr("src", "./ico/drawing.png")
    .style("width", "28px")
    .style("height", "22px");

  let closeButton = colorDiv
    .append("button")
    .attr("class", "ssart-color-button-design")
    .on("click", () => {
      const div = d3.select("#ssart-color-div");
      div.style("visibility", "hidden").property("visibility", "hidden");
    });
  closeButton
    .append("img")
    .attr("src", "./ico/close.png")
    .style("width", "28px")
    .style("height", "22px");
}

function clickLabel(labelColor, index, id, param) {
  let div = d3.select("#ssart-color-div");
  let divA = d3.select(".cir-field");
  let color = document.getElementById("ssart-color-input");

  let nowScroll =
    document.querySelector("html").scrollTop + window.innerHeight / 2;
  if (div.property("visibility") === "hidden") {
    color.value = labelColor;
    color.style.color = labelColor;

    divA.style("top", nowScroll + "px");
    div.style("visibility", "visible").property("visibility", "visible");
    changeCurrentValue(index, id, param);
  } else {
    if (color.value != labelColor) {
      divA.style("top", nowScroll + "px");
      color.value = labelColor;
      color.style.color = labelColor;
      changeCurrentValue(index, id, param);
    } else {
      div.style("visibility", "hidden").property("visibility", "hidden");
    }
  }
}

function changeCurrentValue(index, id, param) {
  currentId = id;
  currentParam = param;
  currentIndex = index;
}

export { createColorDiv, clickLabel };
