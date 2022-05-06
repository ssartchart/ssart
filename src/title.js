// chart title
function drawTitle(svg, options, width, chart_width, height, margin) {
  let xTitle = chart_width/2
  if (options.plugins.legend.position && options.plugins.legend.position == "left"){
    xTitle = width - chart_width/2
  }

  const title = svg
    .append("text")
    .attr("id", "title")
    .attr("x", xTitle)
    .attr("y", margin.top / 2)
    .attr("text-anchor", "middle")
    .property("visibilty", "visible")
    .text(options.plugins.title.text);

  if (options.plugins.title.color) {
    title
      .style("fill", options.plugins.title.color)
  }

  if (options.plugins.title.align) {
    if (options.plugins.title.align === "center") {
      title
        .attr("text-anchor", "middle")
    } else if (options.plugins.title.align === "start") {
      title
        .attr("text-anchor", "start")
        .attr("x", margin.left)
      if (options.plugins.legend.position && options.plugins.legend.position == "left") {
        title
          .attr("x", width - chart_width + margin.left)
      }
    } else {
      title
        .attr("text-anchor", "end")
        .attr("x", chart_width - margin.right)
      if (options.plugins.menu) {
        title
          .attr("x", chart_width - margin.right - 40)
      }
      if (options.plugins.legend.position && options.plugins.legend.position == "left") {
        title
          .attr("x", width - margin.right)
        
          if (options.plugins.menu) {
            title
              .attr("x", width - margin.right - 40)
          }
      }
    }
  }

  console.log(options.plugins.title)
  if (options.plugins.title.display == false) {
    title
      .property("visibilty", "hidden")
      .style("fill", "none")
  }
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
