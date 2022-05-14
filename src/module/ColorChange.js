import { Chart } from "../function.js";

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

  colorPicker.append("div").attr("class", "cir-field");
  colorPicker
    .append("input")
    .attr("type", "text")
    .attr("id", "ssart-color-input")
    .attr("class", "coloris");
  colorPicker
    .append("button")
    .attr("id", "ssart-color-button")
    .on("click", () => {
      const inputValue = document.querySelector("#ssart-color-input").value;
      currentParam.data.datasets[currentIndex].backgroundColor = inputValue;
      Chart(currentId, currentParam);
    });
}

function clickLabel(labelColor, index, id, param) {
  let div = d3.select("#ssart-color-div");
  let color = document.getElementById("ssart-color-input");

  if (div.property("visibility") === "hidden") {
    color.value = labelColor;
    div.style("visibility", "visible").property("visibility", "visible");
    changeCurrentValue(index, id, param);
  } else {
    if (color.value != labelColor) {
      color.value = labelColor;
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
