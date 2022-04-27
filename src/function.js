import { BarChart } from "./BarChart.js";
import { drawTitle, drawXTitle, drawYTitle } from "./title.js";
import { checkMargin } from "./checkMargin.js";

function Chart(
  type,
  id,
  labels,
  dataset,
  width,
  height,
  margin,
  padding,
  y_max = -1,
  y_min = 0
) {
  const svg = d3
    .select(id)
    .append("svg")
    .style("width", width)
    .style("height", height);
  // const tooltip = d3.select(id).append('div').attr('id', 'tooltip');
  console.log(`Hello, ${type}!`);

  if (y_min == -1) {
    y_min = dataset[0].data[0].value;
    dataset.forEach((data) => {
      data.data.forEach((d) => {
        if (d.value < y_min) {
          y_min = d.value;
        }
      });
    });
  }

  checkMargin(margin);

  if (y_max == -1) {
    y_max = dataset[0].data[0].value;
    dataset.forEach((data) => {
      data.data.forEach((d) => {
        if (d.value > y_max) {
          y_max = d.value;
        }
      });
    });
  }

  if (type === "bar") {
    BarChart(
      svg,
      labels,
      dataset,
      width,
      height,
      margin,
      padding,
      y_max,
      y_min
    );
  }

  // except circle
  if (type != "circle") {
    if (options.plugins.title.display) {
      drawTitle(svg, options.plugins.title.text, width, height, margin);
    }
    if (options.plugins.xTitle.display) {
      drawXTitle(svg, options.plugins.xTitle.text, width, height, margin);
    }
    if (options.plugins.yTitle.display) {
      drawYTitle(
        svg,
        options.plugins.yTitle.text,
        width,
        height,
        margin,
        options.plugins.yTitle.position
      );
    }
  }
}

export { Chart };
