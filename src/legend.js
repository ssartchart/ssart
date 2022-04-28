export function drawLegend(svg, labels, width, height, chartContainer, position, margin) {  
  console.log(svg, labels, width, height, chartContainer, position, 'legend')
  if (position === "top" || position === "bottom") {    
    let rowCnt = 1;
    const legend = svg
    .append("g")
    .classed('legend-item', true)
    .selectAll("g")
    .data(labels)
    .enter()
    .append("g")
    .attr("id", (d, i) => `legend-${i}`)
    legend
      .append("circle")
      .attr("r", 6)
      .attr('cy', 10)
      .attr('cx', 8)
    
    legend
      .append("text")
      .attr("x", 24)
      .attr("y", 9)
      .attr("dy", ".35em")
      .attr("fill", "rgb(112,112,112)")
      .style('font-weight', 'bold')
      .text(d => d);
    console.log(legend);
    console.log(legend.node().getBBox());
    console.log(svg.node().getBBox());
    if (position === "top") {
      let currXPos = svg.node().getBBox().x
      let currYPos = margin.top;
      const MARGIN = 20;
      let res;
      // let start = 0, end = 0;
      legend.attr("transform", function (d, i) {
        let legendBBox = document.getElementById(`legend-${i}`).getBBox();
        // console.log(`범례 너비-${i}`, legendBBox.width, '현재 x좌표(시작점):' ,currXPos)
        if (currXPos + legendBBox.width >= width) {
          currYPos += legendBBox.height + MARGIN
          currXPos = svg.node().getBBox().x
          chartContainer.attr("transform", `translate(0, ${currYPos})`)

        }
        res = `translate(${currXPos}, ${currYPos})`
        currXPos += legendBBox.width + MARGIN
        return res
      })

      return {width : 0,
        height : svg.select(".legend-item").node().getBBox().height+ margin.top};

    } else if (position === "bottom") {
      let currXPos = svg.node().getBBox().x
      let currYPos = height;
      const MARGIN = 20;
      let res;      
      legend.attr("transform", function (d, i) {
        let legendBBox = document.getElementById(`legend-${i}`).getBBox();
        
        
        if (currXPos + legendBBox.width >= width) {  
          currYPos += legendBBox.height + 20
          rowCnt++;
          currXPos = svg.node().getBBox().x
        }
        res = `translate(${currXPos}, ${currYPos})`
        currXPos += legendBBox.width + MARGIN
        return res
      })
      const legend_y = svg.select(".legend-item").node().getBBox().height;
      svg.select(".legend-item").attr("transform",`translate(${0}, ${-legend_y})`);

      return {width : 0,
        height : svg.select(".legend-item").node().getBBox().height};
    }
    
  } else if (position === "left" || position === "right") {
    const legend = svg
      .append("g")
      .classed('legend-item', true)
      .selectAll("g")
      .data(labels)
      .enter()
      .append("g")
      .attr("id", (d, i) => `legend-${i}`)
      
    legend
      .append("circle")
      .attr("r", 6)
      .attr('cy', 10)
      .attr('cx', 8)            
    legend
      .append("text")
      .attr("x", 24)
      .attr("y", 9)
      .attr("dy", ".35em")
      .attr("fill", "rgb(112,112,112)")
      .style('font-weight', 'bold')
      .text(d => d);  
    console.log(legend.node().getBBox());
    if (position === "left") {
      let currXPos = 0;
      let currYPos = margin.top
      let legendMaxWidth = 0;
      const MARGINROW = 10;
      const MARGINCOL = 30;
      let rowGap = 0;
      legend.attr('transform', function (d, i) {
        let legendBBox = document.getElementById(`legend-${i}`).getBBox();
        console.log(`${i}번 레전드 너비:`, legendBBox.width, `차트 gap:`, rowGap)
        if (width + legendBBox.width > width) {
          legendMaxWidth = Math.max(legendBBox.width, legendMaxWidth)
          rowGap = document.querySelector('.legend-item').getBBox().width + legendBBox.width;
        }
        if (currYPos + legendBBox.height >= height) {
          currYPos = margin.top;
          currXPos += legendMaxWidth + MARGINROW
          legendMaxWidth = 0
        }
        let res = `translate(${currXPos}, ${currYPos})`
        currYPos += MARGINCOL
        return res
      })      
      chartContainer.attr("transform", `translate(${svg.select(".legend-item").node().getBBox().width}, 0)`)
    } else { // right      
      let currXPos = width-1;
      let currYPos = margin.top;
      let legendMaxWidth = 0;
      const MARGINROW = 10;
      const MARGINCOL = 30;      
      legend.attr('transform', function (d, i) {
        let legendBBox = document.getElementById(`legend-${i}`).getBBox();
        if (width + legendBBox.width > width) {
          legendMaxWidth = Math.max(legendBBox.width, legendMaxWidth)
        }
        if (currYPos + legendBBox.height >= height) {
          currYPos = margin.top
          currXPos += legendMaxWidth + MARGINROW
          width += legendMaxWidth + MARGINROW + 5 
          legendMaxWidth = 0
        }
        let res = `translate(${currXPos}, ${currYPos})`
        currYPos += MARGINCOL
        return res
      })
      svg.select(".legend-item").attr("transform",`translate(${-svg.select(".legend-item").node().getBBox().width}, ${0})`);
    }
    console.log(svg.select(".legend-item").node().getBBox());
    return {width : svg.select(".legend-item").node().getBBox().width,
            height : 0};
  }

  
}