// chart title
function drawTitle(svg, text, width, height, margin) {
  svg
    .append("text")
    .attr("x", width / 2)
    .attr("y", margin.top / 2)
    .attr("text-anchor", "middle")
    .style("font-size", "30px")
    .style("font-weight", "bold")
    .style("font-family", "sans-serif")
    .text(text);
}

// x title
function drawXTitle(svg, text, width, height, margin) {
  svg
    .append("text")
    .attr(
      "transform",
      "translate(" + width / 2 + " ," + (height - margin.bottom / 4) + ")"
    )
    .attr("text-anchor", "middle")
    .style("font-size", "20px")
    .style("font-family", "sans-serif")
    .text(text);
}

// y title
function drawYTitle(svg, text, width, height, margin, position) {
  if (position === "left") {
    svg
      .append("text")
      .attr("transform", "rotate(-90)")
      .attr("x", -(height / 2))
      .attr("y", margin.left / 2)
      .attr("text-anchor", "middle")
      .style("font-size", "20px")
      .style("font-family", "sans-serif")
      .text(text);
  } else {
    svg
      .append("text")
      .attr("x", width - margin.right / 2)
      .attr("y", height / 2)
      .attr("text-anchor", "middle")
      .attr("writing-mode", "tb")
      .style("font-size", "20px")
      .style("font-family", "sans-serif")
      .text(text);
  }
}

export { drawTitle, drawXTitle, drawYTitle };
