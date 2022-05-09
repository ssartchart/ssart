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

  if (options.plugins.title.size) {
    title
      .style("font-size", options.plugins.title.size)
  }

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

  if (options.plugins.title.display == false) {
    title
      .property("visibilty", "hidden")
      .style("fill", "none")
  }
}

// x title
function drawXTitle(svg, options, width, height, margin) {
  const xTitle = svg
    .append("text")
    .attr("id", "xTitle")
    .attr("x", width / 2)
    .attr("y", height - margin.bottom/4)
    .attr("text-anchor", "middle")
    .text(options.text);

  console.log(options.size)
  if (options.size) {
    xTitle
      .style("font-size", options.size)
  }

  if (options.color) {
    xTitle
      .style("fill", options.color)
  }

  if (options.align) {
    if (options.align === "start") {
      xTitle
        .attr("x", margin.left)
        .attr("text-anchor", "start")
    } else if (options.align === "end") {
      xTitle
        .attr("x", width - margin.right)
        .attr("text-anchor", "end")
    }
    
  }

  if (options.display == false) {
    xTitle
      .property("visibilty", "hidden")
      .style("fill", "none")
  }
}

// y title
function drawYTitle(svg, options, width, height, margin) {
  const yTitle = svg
    .append("text")
    .attr("id", "yTitle")
    .attr("transform", "rotate(-90)")
    .attr("x", -(height / 2))
    .attr("y", margin.left / 3)
    .attr("text-anchor", "middle")
    .text(options.text);

  if (options.position === "right") {
    yTitle
      .attr("y", width - margin.right / 3 * 2)
      if (options.text.length * 10 < margin.left * 2/3) {
        yTitle
          .attr("writing-mode", "tb")
      }
  } else {
    if (options.text.length * 10 < margin.left * 2/3) {
      yTitle
        .attr("writing-mode", "tb")
    }
  }

  if (options.size) {
    yTitle
      .style("font-size", options.size)
  }

  if (options.color) {
    yTitle
      .style("fill", options.color)
  }

  if (options.align) {
    if (options.align === "top") {
      yTitle
        .attr("x", 0 - margin.top)
        .attr("text-anchor", "end")
    } else if (options.align === "bottom") {
      yTitle
        .attr("x", - height + margin.bottom)
        .attr("text-anchor", "start")
    }
  }
  console.log(options.rotate)
  if (options.rotate) {
    yTitle
      .attr("writing-mode", "none")
  } else if (options.rotate == false) {
    yTitle
      .attr("writing-mode", "tb")
      .attr("text-anchor", "end")
  }

  if (options.display == false) {
    yTitle
      .property("visibilty", "hidden")
      .style("fill", "none")
  }
  
}

export { drawTitle, drawXTitle, drawYTitle };
