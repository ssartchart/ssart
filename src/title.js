// chart title
function drawTitle(svg, text, width, height, margin) {
  svg
    .append("text")
    // .attr("dx", width / 2 - text.length * 5)
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
      "translate(" +
        (width / 2 - text.length * 5) +
        " ," +
        (height - margin.bottom / 4) +
        ")"
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
      // .attr("transform", "rotate(90,100,100)")
      //   .attr("writing-mode", "lr-tb")
      //   .attr("glyph-orientation-vertical", "-90")
      .style("font-size", "20px")
      .style("font-family", "sans-serif")
      .text(text);
  } else {
    svg
      .append("text")
      //   .attr("transform", "rotate(90)")
      .attr("x", width - margin.right / 2)
      .attr("y", height / 2)
      .attr("text-anchor", "middle")
      .attr("writing-mode", "tb")
      // .attr("transform", "rotate(90,100,100)")
      //   .attr("rotate", "-90")
      //   .attr("lengthAdjust", "spacing")
      .style("font-size", "20px")
      .style("font-family", "sans-serif")
      .text(text);
  }
}

export { drawTitle, drawXTitle, drawYTitle };
