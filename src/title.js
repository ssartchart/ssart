// chart title
function drawTitle(svg, options, width, chart_width, height, margin) {
  let xTitle = chart_width/2
  if (options.plugins.legend.position && options.plugins.legend.position == "left"){
    xTitle = width - chart_width/2
  }

  svg
    .append("text")
    .attr("id", "title")
    .attr("x", xTitle)
    .attr("y", margin.top / 2)
    .attr("text-anchor", "middle")
    .text(options.plugins.title.text);
}

// x title
function drawXTitle(svg, text, width, height, margin) {
  svg
    .append("text")
    .attr("id", "xTitle")
    .attr(
      "transform",
      "translate(" + width / 2 + " ," + (height - margin.bottom / 4) + ")"
    )
    .attr("text-anchor", "middle")
    .text(text);
}

// y title
function drawYTitle(svg, text, width, height, margin, position) {
  if (position === "right") {
    svg
      .append("text")
      .attr("id", "yTitle")
      .attr("x", width - margin.right / 3)
      .attr("y", height / 2)
      .attr("text-anchor", "middle")
      .attr("writing-mode", "tb")
      .text(text);
  } else {
    svg
      .append("text")
      .attr("id", "yTitle")
      .attr("transform", "rotate(-90)")
      .attr("x", -(height / 2))
      .attr("y", margin.left / 3)
      .attr("text-anchor", "middle")
      .text(text);
  }
}

export { drawTitle, drawXTitle, drawYTitle };
