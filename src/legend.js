export function drawLegend(svg, labels, width, height, chartContainer, position) {  
  
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
    
    if (position === "top") {
      let currXPos = svg.node().getBBox().x
      let currYPos = 0;
      const MARGIN = 20;
      let res;
      legend.attr("transform", function (d, i) {
        let legendBBox = document.getElementById(`legend-${i}`).getBBox();
        // console.log(`범례 너비-${i}`, legendBBox.width, '현재 x좌표(시작점):' ,currXPos)
        if (currXPos + legendBBox.width >= width) {
          currYPos += legendBBox.height + 20
          svg.style("height", height + currYPos)
          currXPos = svg.node().getBBox().x
          chartContainer.attr("transform", `translate(0, ${currYPos})`)
        }
        // console.log(currXPos, currYPos)
        res = `translate(${currXPos}, ${currYPos})`
        currXPos += legendBBox.width + MARGIN
        return res
      })    
    } else if (position === "bottom") {
      let currXPos = svg.node().getBBox().x
      let currYPos = height;
      const MARGIN = 20;
      let res;      
      legend.attr("transform", function (d, i) {
        let legendBBox = document.getElementById(`legend-${i}`).getBBox();
        
        
        if (currXPos + legendBBox.width >= width) {
          currYPos += legendBBox.height + 20
          svg.style("height", currYPos + 20)
          rowCnt++;
          currXPos = svg.node().getBBox().x
        }
        // console.log(currXPos, currYPos, rowCnt)
        res = `translate(${currXPos}, ${currYPos})`
        currXPos += legendBBox.width + MARGIN
        return res
      })
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
    
    let chartWidth = chartContainer.node().getBoundingClientRect().width
    if (position === "left") {
      let currXPos = 0;
      let currYPos = 0;
      let legendMaxWidth = 0;
      const MARGINROW = 10;
      const MARGINCOL = 30;
      let rowGap = 0;
      legend.attr('transform', function (d, i) {
        // console.log(currXPos, currYPos, 'chart너비:', chartWidth)
        let legendBBox = document.getElementById(`legend-${i}`).getBBox();
        console.log(`${i}번 레전드 너비:`, legendBBox.width, `차트 gap:`, rowGap)
        if (chartWidth + legendBBox.width > width) {
          legendMaxWidth = Math.max(legendBBox.width, legendMaxWidth)
          svg.style("width", chartWidth + legendMaxWidth)
          rowGap = document.querySelector('.legend-item').getBBox().width + legendBBox.width;
          console.log(rowGap)
          chartContainer.attr("transform", `translate(${rowGap + MARGINROW}, 0)`)
        }
        if (currYPos >= height) {
          currYPos = 0
          currXPos += legendMaxWidth + MARGINROW
          chartWidth += legendMaxWidth + MARGINROW + 5 
          svg.style("width", chartWidth)          
          legendMaxWidth = 0
        }
        let res = `translate(${currXPos}, ${currYPos})`
        currYPos += MARGINCOL
        return res
      })      
    } else { // right      
      let currXPos = chartWidth;
      let currYPos = 0;
      let legendMaxWidth = 0;
      const MARGINROW = 10;
      const MARGINCOL = 30;      
      legend.attr('transform', function (d, i) {
        // console.log(currXPos, currYPos, 'chart너비:', chartWidth)
        let legendBBox = document.getElementById(`legend-${i}`).getBBox();
        if (chartWidth + legendBBox.width > width) {
          legendMaxWidth = Math.max(legendBBox.width, legendMaxWidth)
          svg.style("width", chartWidth + legendMaxWidth)
        }
        if (currYPos >= height) {
          currYPos = 0
          currXPos += legendMaxWidth + MARGINROW
          chartWidth += legendMaxWidth + MARGINROW + 5 
          svg.style("width", chartWidth)
          legendMaxWidth = 0
        }
        let res = `translate(${currXPos}, ${currYPos})`
        currYPos += MARGINCOL
        return res
      })    
    }
  }
}

// export function legend2(dataset, svg) {
//   // Add one dot in the legend for each name.
//   var size = 20
//   svg.selectAll("mydots")
//     .data(dataset[0].data)
//     .enter()
//     .append("rect")
//       .attr("x", 100)
//       .attr("y", function(d,i){ return 100 + i*(size+5)}) // 100 is where the first dot appears. 25 is the distance between dots
//       .attr("width", size)
//       .attr("height", size)
//       .style("fill", function(d){ return color(d)})

//   // Add one dot in the legend for each name.
//   svg.selectAll("mylabels")
//     .data(dataset[0].data)
//     .enter()
//     .append("text")
//       .attr("x", 100 + size*1.2)
//       .attr("y", function(d,i){ return 100 + i*(size+5) + (size/2)}) // 100 is where the first dot appears. 25 is the distance between dots
//       .style("fill", function(d){ return color(d)})
//       .text(function(d){ return d.name})
//       .attr("text-anchor", "left")
//       .style("alignment-baseline", "middle")
// }