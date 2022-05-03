export function drawLegend(id, svg, labels, width, height, chartContainer, legend, margin) {    
  let { position = "left", fontSize = 10, fontFamily = "comic sans ms", fontWeight = "normal", legendType = "rect" } = legend;
  if (typeof fontSize !== "number") {
    if (fontSize?.includes("px")) {
      fontSize = fontSize.slice(0, fontSize.length - 2)
    }
  }  
  const labelsColor = labels.color
  labels = labels.label;  
  // top || bottom
  if (position === "top" || position === "bottom") {    
    let rowCnt = 1;
    const legend = svg
      .append("g")
      .attr("id", `${id}-legend`)
      .selectAll("g")
      .data(labels)
      .enter()
      .append("g")
      .attr("id", (d, i) => `${id}-legend-${i}`)
    
    if (legendType === "circle") {
      legend
        .append("circle")
        .attr("r", fontSize / 5 * 3)
        .attr('cy', 0)
        .attr('cx', fontSize / 5 * 3)
        .attr('fill', (d, i) => labelsColor(i))    
      legend
        .append("text")
        .attr("x", fontSize / 5 * 10)
        .attr("y", 0)
        .attr("font-size", fontSize)
        .attr("font-family", fontFamily)
        .style("font-weight", fontWeight)
        .attr("alignment-baseline", "central")        
        .text(d => d);
    } else { // rect
      legend
        .append("rect")      
        .attr('x', 0)
        .attr('y', 0)
        .attr("width", fontSize * 8 / 3)
        .attr("height", fontSize * 4 / 3)
        .attr('fill', (d, i) => labelsColor(i))
        // .attr("alignment-baseline", "hanging")
      
      legend
        .append("text")
        .attr("font-size", fontSize)
        .attr("font-family", fontFamily)
        .attr("x", fontSize / 3 * 10)
        .attr("y", 1)
        .attr("alignment-baseline", "hanging")   // 사각형 레전드일 때 설정        
        .text(d => d);  
    }
    
    let rowGroup = [];
    let currGroup = [];
    const MARGINWIDTH = fontSize / 3 * 4;
    let res;
    if (position === "top") {
      let currXPos = 0;
      let currYPos = margin.top;
      chartContainer.attr("transform", `translate(0, ${currYPos})`)
      legend.attr("transform", function (d, i) {
        let legendBBox = document.getElementById(`${id}-legend-${i}`).getBBox();
        let legendItem = document.getElementById(`${id}-legend-${i}`);
        // console.log(`범례 너비-${i}`, legendBBox.width, '현재 x좌표(시작점):' ,currXPos)
        if (currXPos + legendBBox.width >= width) {
          rowCnt++;
          currYPos += legendBBox.height + MARGINWIDTH
          currXPos = 0;
          console.log(chartContainer, '컨테')
          chartContainer.attr("transform", `translate(0, ${currYPos})`)
          rowGroup.push(currGroup);
          currGroup = [];
        }
        currGroup.push(legendItem);
        res = `translate(${currXPos}, ${currYPos})`
        currXPos += legendBBox.width + MARGINWIDTH
        return res
      })      
      if (currGroup) {
        rowGroup.push(currGroup);
        currGroup = [];
      }
      // legend를 행(row)별로 묶기(그룹화)
      console.log(legend.node())
      for (let i = 0; i < rowGroup.length; i++) {
        let legendGroup = rowGroup[i];
        d3.select(`svg #${id}-legend`).append('g').attr("id", `${id}-legend-group-${i}`).node().append(...legendGroup);
      }
      // 각 행의 legend 그룹을 센터로 재배치
      for (let i = 0; i < rowCnt; i++) {
        const groupItem = d3.select(`#${id}-legend-group-${i}`);        
        const startXPos = (width - groupItem.node().getBoundingClientRect().width) / 2; // 배치할 X좌표 계산
        groupItem.attr("transform", `translate(${startXPos}, 0)`)  
      }
      // d3.select('svg .legend-item').remove();
      return {width : 0,
        height : svg.select(`svg #${id}-legend`).node().getBBox().height+ margin.top};
    } else if (position === "bottom") {
      let currXPos = 0;
      let currYPos = height;
            
      legend.attr("transform", function (d, i) {
        let legendBBox = document.getElementById(`${id}-legend-${i}`).getBBox();
        let legendItem = document.getElementById(`${id}-legend-${i}`);        
        if (currXPos + legendBBox.width >= width) {
          rowCnt++;
          currYPos += legendBBox.height + 20
          currXPos = 0;
          rowGroup.push(currGroup);
          currGroup = [];
        }
        currGroup.push(legendItem);
        res = `translate(${currXPos}, ${currYPos})`
        currXPos += legendBBox.width + MARGINWIDTH
        return res
      })
      if (currGroup) {
        rowGroup.push(currGroup);
        currGroup = [];
      }
      // legend를 행(row)별로 묶기(그룹화)
      for (let i = 0; i < rowGroup.length; i++) {
        let legendGroup = rowGroup[i];
        d3.select(`#${id}-legend`).append('g').attr("id", `${id}-legend-group-${i}`).node().append(...legendGroup);
      }
      // 각 행의 legend 그룹을 센터로 재배치
      // console.log(document.getElementById('chart-area').getBoundingClientRect())
      for (let i = 0; i < rowCnt; i++) {
        const groupItem = d3.select(`#${id}-legend-group-${i}`);        
        const startXPos = (width - groupItem.node().getBoundingClientRect().width) / 2; // 배치할 X좌표 계산
        console.log('배치 x좌표', startXPos)
        groupItem.attr("transform", `translate(${startXPos}, 0)`)  
      }
      const legend_y = svg.select(`#${id}-legend`).node().getBBox().height;
      svg.select(`#${id}-legend`).attr("transform",`translate(${0}, ${-legend_y})`);

      return {width : 0,
        height : svg.select(`#${id}-legend`).node().getBBox().height};
    }    
// left || right
  } else if (position === "left" || position === "right") {
    let colCnt = 1;
    const legend = svg
      .append("g")
      .attr("id", `${id}-legend`)
      .selectAll("g")
      .data(labels)
      .enter()
      .append("g")
      .attr("id", (d, i) => `${id}-legend-${i}`)

    if (legendType === "circle") {
      legend
        .append("circle")
        .attr("r", fontSize / 5 * 3)
        .attr('cy', 10)
        .attr('cx', fontSize / 5 * 3)
        .attr('fill', (d, i) => labelsColor(i))    
      legend
        .append("text")
        .attr("x", fontSize / 5 * 10)
        .attr("y", 9)
        .attr("font-size", fontSize)
        .attr("font-family", fontFamily)
        .style('font-weight', fontWeight)
        .attr("alignment-baseline", "central") // 원형 레전드일 때 설정
        .text(d => d);
    } else { // rect
      legend
        .append("rect")      
        .attr('x', 0)
        .attr('y', 0)
        .attr("width", fontSize * 8 / 3)
        .attr("height", fontSize * 4 / 3)
        .attr('fill', (d, i) => labelsColor(i))
        // .attr("alignment-baseline", "hanging")
      
      legend
        .append("text")
        .attr("font-size", fontSize)
        .attr("font-family", fontFamily)
        .attr("x", fontSize / 3 * 10)
        .attr("y", 1)
        .attr("alignment-baseline", "hanging")   // 사각형 레전드일 때 설정        
        .text(d => d);  
    }
    
    let colGroup = [];
    let currGroup = [];
    const MARGINROW = 10;
    const MARGINCOL = fontSize * 3;
    let legendMaxWidth = 0;
    if (position === "left") {
      let currXPos = 0;
      let currYPos = 0;
      
      let rowGap = 0;
      legend.attr('transform', function (d, i) {
        let legendBBox = document.getElementById(`${id}-legend-${i}`).getBBox();
        let legendItem = document.getElementById(`${id}-legend-${i}`);
        // console.log(legendItem, `${i}번 레전드 너비:`, legendBBox.width, `차트 gap:`, rowGap)
        if (width + legendBBox.width > width) {
          legendMaxWidth = Math.max(legendBBox.width, legendMaxWidth)
          rowGap = document.getElementById(`${id}-legend`).getBBox().width + legendBBox.width;
        }
        if (currYPos + legendBBox.height >= height - height / 5) {
          currYPos = 0;
          currXPos += legendMaxWidth + MARGINROW
          legendMaxWidth = 0
          colCnt++;
          colGroup.push(currGroup);
          currGroup = [];
        }
        currGroup.push(legendItem)
        let res = `translate(${currXPos}, ${currYPos})`
        currYPos += MARGINCOL
        return res
      })      

      if (currGroup) {
        colGroup.push(currGroup);
        currGroup = [];
      }
      // legend를 열(col)별로 묶기(그룹화)
      for (let i = 0; i < colGroup.length; i++) {
        let legendGroup = colGroup[i];
        d3.select(`#${id}-legend`).append('g').attr("id", `${id}-legend-group-${i}`).node().append(...legendGroup);
      }
      // 각 열의 legend 그룹을 센터로 재배치      
      for (let i = 0; i < colCnt; i++) {
        const groupItem = d3.select(`#${id}-legend-group-${i}`);                
        const startYPos = (height - groupItem.node().getBoundingClientRect().height) / 2; // 배치할 Y좌표 계산        )
        groupItem.attr("transform", `translate(0, ${startYPos})`)  
      }
      chartContainer.attr("transform", `translate(${svg.select(`#${id}-legend`).node().getBBox().width}, 0)`)
      
    } else { // right      
      let currXPos = width-1;
      let currYPos = 0;      
     
      legend.attr('transform', function (d, i) {
        let legendBBox = document.getElementById(`${id}-legend-${i}`).getBBox();
        let legendItem = document.getElementById(`${id}-legend-${i}`);
        if (width + legendBBox.width > width) {
          legendMaxWidth = Math.max(legendBBox.width, legendMaxWidth)
        }
        if (currYPos + legendBBox.height >= height - height / 5) {
          currYPos = 0
          currXPos += legendMaxWidth + MARGINROW
          width += legendMaxWidth + MARGINROW + 5 
          legendMaxWidth = 0
          colCnt++;
          colGroup.push(currGroup);
          currGroup = [];
        }
        // console.log(`${i}번 legend:`, legendItem, colCnt)
        currGroup.push(legendItem)
        let res = `translate(${currXPos}, ${currYPos})`
        currYPos += MARGINCOL
        return res
      })
      if (currGroup) {
        colGroup.push(currGroup);
        currGroup = [];
      }
      // legend를 열(col)별로 묶기(그룹화)
      for (let i = 0; i < colGroup.length; i++) {
        let legendGroup = colGroup[i];
        d3.select(`#${id}-legend`).append('g').attr("id", `${id}-legend-group-${i}`).node().append(...legendGroup);
      }
      // 각 열의 legend 그룹을 센터로 재배치      
      for (let i = 0; i < colCnt; i++) {
        const groupItem = d3.select(`#${id}-legend-group-${i}`);                
        const startYPos = (height - groupItem.node().getBoundingClientRect().height) / 2; // 배치할 Y좌표 계산        )
        groupItem.attr("transform", `translate(0, ${startYPos})`)  
      }
      
      svg.select(`#${id}-legend`).attr("transform", `translate(${-svg.select(`#${id}-legend`).node().getBBox().width}, ${0})`);      
    }    
    return {width : svg.select(`#${id}-legend`).node().getBBox().width,
    height : 0};
  } 
}