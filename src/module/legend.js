export function drawLegend(id, svg, labels, width, height, chartContainer, options, margin, datasets, type) {    
  let { plugins, scales } = options;
  let opacity;
  if (scales === undefined || scales === null) {    
    opacity = .7;    
  } else {
    if (scales.fillopacity) {
      opacity = scales.fillopacity;
    } else if (scales.dot && scales.dot.opacity) {
      opacity = scales.dot.opacity;
    } else {
      opacity = .7
    }
  }  
  
  if (plugins.legend === undefined) {
    plugins.legend = {};    
  }
  let { position = "bottom", fontSize = 12, fontFamily = "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif", fontWeight = "normal", legendType = "rect", legendOpacity } = plugins.legend;
  if (plugins.legend.legendOpacity !== undefined) {
    opacity = legendOpacity;
  }
  if (typeof fontSize !== "number") {
    if (fontSize && fontSize.includes("px")) {
      fontSize = fontSize.slice(0, fontSize.length - 2)
    }
  }
  const legendList = [];  
  let labelsColor = labels.color

  labels = labels.label;  
  
  let pointStyle;
  let rowCnt = 1;
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
    pointStyle = d3
      .symbol()
      .type(d3.symbolCircle)
      .size(fontSize * 10)
    
  } else if (legendType === "rect") {

    legend
      .append("rect")            
      .attr("width", fontSize)
      .attr("height", fontSize)
      .attr('fill', (d, i) => labelsColor(i))      
      .style("fill-opacity", opacity)      
    
    legend
      .append("text")
      .attr("id", (d, i) => `${id}-legend-text-${i}`)
      .attr("font-size", fontSize)
      .attr("font-family", fontFamily)
      .attr("x", (d, i) => d3.select(`#${id}-legend-${i}`).node().getBoundingClientRect().width + fontSize / 2)
      .attr("y", 0)
      .attr("text-anchor", "start" )
      .attr("alignment-baseline", "text-before-edge")   // 사각형 레전드일 때 설정
      .text(d => d)
      
  } else if (legendType === "triangle" || legendType === "triangleRot") {
    pointStyle = d3
      .symbol()
      .type(d3.symbolTriangle)
      .size(fontSize * 10)    
  } else if (legendType === "diamond") {
    pointStyle = d3
      .symbol()
      .type(d3.symbolDiamond)
      .size(fontSize * 10)    
  } else if (legendType === "star") {
    pointStyle = d3
      .symbol()
      .type(d3.symbolStar)
      .size(fontSize * 10)
  } else if (legendType === "rectRot") {
    pointStyle = d3
      .symbol()
      .type(d3.symbolSquare)
      .size(fontSize * 10)   
  }
  if (legendType !== "rect") {
    legend
      .append("path")              
      .attr("d", pointStyle)
      .attr('fill', (d, i) => labelsColor(i))
      .style("fill-opacity", opacity)
      .attr("transform", (d, i) => {
            if (legendType === "rectRot") {
              return 'rotate(45)'
            } else if (legendType === "triangle") {
              return `translate(0, ${3})`
            } else if (legendType === "triangleRot") {
              return `translate(0, ${fontSize * -0.1}) rotate(180)`
            } else {
              return ''
            }
          })
    legend
      .append("text")
      .attr("id", (d, i) => `${id}-legend-text-${i}`)
      .attr("font-size", fontSize)
      .attr("font-family", fontFamily)
      .attr("x", (d, i) => d3.select(`#${id}-legend-${i}`).node().getBoundingClientRect().width)
      .attr("y", 0)
      .attr("text-anchor", "start" )
      .attr("alignment-baseline", "central")   // 사각형 레전드일 때 설정
      .text(d => d)
  }
  
  
  // top || bottom
  if (position === "top" || position === "bottom") {    
    
    let rowGroup = [];
    let currGroup = [];
    const MARGINWIDTH = fontSize / 3 * 4;
    let res;
    if (position === "top") {
      let currXPos = Number(fontSize) / 2;
      let currYPos = margin.top;
      
      legend.attr("transform", function (d, i) {
        let legendBBox = document.getElementById(`${id}-legend-${i}`).getBBox();
        let legendItem = document.getElementById(`${id}-legend-${i}`);
        legendList.push(legendItem);
        if (currXPos + legendBBox.width >= width) {
          rowCnt++;
          currYPos += legendBBox.height + MARGINWIDTH
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
        d3.select(`svg #${id}-legend`).append('g').attr("id", `${id}-legend-group-${i}`).node().append(...legendGroup);
      }
      // 각 행의 legend 그룹을 센터로 재배치
      for (let i = 0; i < rowCnt; i++) {
        const groupItem = d3.select(`#${id}-legend-group-${i}`);        
        const startXPos = (width - groupItem.node().getBoundingClientRect().width) / 2; // 배치할 X좌표 계산
        groupItem.attr("transform", `translate(${startXPos}, 0)`)  
      }
      chartContainer.attr("transform", `translate(0, ${svg.select(`svg #${id}-legend`).node().getBBox().height+ margin.top})`)
      return {width : 0,
        height : svg.select(`svg #${id}-legend`).node().getBBox().height+ margin.top, legendList};
    } else if (position === "bottom") {      
      let currXPos = Number(fontSize) / 2;
      let currYPos = height;
            
      legend.attr("transform", function (d, i) {
        let legendBBox = document.getElementById(`${id}-legend-${i}`).getBBox();
        let legendItem = document.getElementById(`${id}-legend-${i}`);        
        legendList.push(legendItem);
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
      for (let i = 0; i < rowCnt; i++) {
        const groupItem = d3.select(`#${id}-legend-group-${i}`);        
        const startXPos = (width - groupItem.node().getBoundingClientRect().width) / 2; // 배치할 X좌표 계산
        groupItem.attr("transform", `translate(${startXPos}, 0)`)  
      }
      const legend_y = svg.select(`#${id}-legend`).node().getBBox().height;
      svg.select(`#${id}-legend`).attr("transform",`translate(${0}, ${-legend_y})`);

      return {width : 0,
        height : svg.select(`#${id}-legend`).node().getBBox().height + 10, legendList};
    }    
// left || right
  } else if (position === "left" || position === "right") { 
    
    let colGroup = [];
    let currGroup = [];
    const MARGINROW = 10;
    const MARGINCOL = fontSize * 3;
    let legendMaxWidth = 0;
    if (position === "left") {
      let currXPos = 10;
      let currYPos = 0;
      
      let rowGap = 0;
      legend.attr('transform', function (d, i) {
        let legendBBox = document.getElementById(`${id}-legend-${i}`).getBBox();
        let legendItem = document.getElementById(`${id}-legend-${i}`);
        legendList.push(legendItem);
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
        legendList.push(legendItem);
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
      
      d3.select(`#${id}-legend`).attr("transform", `translate(${-svg.select(`#${id}-legend`).node().getBoundingClientRect().width}, ${0})`);      
    }   
    return {width : svg.select(`#${id}-legend`).node().getBoundingClientRect().width + 10,
    height : 0, legendList};
  }
}

// legend 클릭 이벤트에 따라 차트 데이터를 바꾸는 Toggle 기능 생성
export function createLegendToggle(id, datasets, items, chartArea, drawNewChart, removedSet, renderBackgroundColor) {
  const dataList = {};
  for (let i = 0; i < items.length; i++) {
    dataList[i] = datasets[i]
  }  
  items.forEach(item => {    
    const toggleItem = d3.select(`#${item.id}`)
    const tid = toggleItem.node().id
    toggleItem.on("click", () => {
      d3.selectAll(`${id} > svg > text`).remove();
      d3.selectAll(`${id} > svg > .chartMenu`).remove();
      d3.selectAll(`${id} > svg > .dropDown`).remove();
      d3.selectAll(`${id} > svg > .legendDropDown`).remove();
      d3.selectAll(`${id} > svg > .colorDropDown`).remove();
      const idx = tid[tid.length - 1]
      if (removedSet[idx] === undefined ) {
        removedSet[idx] = true;
      } else {
        removedSet[idx] = undefined;
      }      
      d3.select(`#${toggleItem.node().id} text`).attr("text-decoration", () => {
        if (removedSet[idx] !== undefined) {
          return "line-through"
        } else {
          return "none"
        }
      })
      datasets = []
      for (let j = 0; j < items.length; j++) {
        if (removedSet[j] !== undefined) continue;
        datasets.push(dataList[j])          
      }
      chartArea.selectAll('*').remove();
      renderBackgroundColor();
      drawNewChart(datasets);
    })
  })
}

export function createCircleChartLegend(id, datasets, legendItems, makeChart, removedSet, renderBackgroundColor) {  
  const dataList = {};
  for (let i = 0; i < legendItems.length; i++) {
    dataList[i] = datasets[i]
  };
  legendItems.forEach(item => {    
    const toggleItem = d3.select(`#${item.id}`)
    const tid = toggleItem.node().id
    toggleItem.on("click", () => {      
      d3.selectAll(`${id} .chartBody`).remove();
      d3.selectAll(`${id} > svg > text`).remove();
      d3.selectAll(`${id} > div`).remove();
      
      const idx = tid[tid.length - 1]
      if (removedSet[idx] === undefined ) {
        removedSet[idx] = true;
      } else {
        removedSet[idx] = undefined;
      }      
      d3.select(`#${toggleItem.node().id} text`).attr("text-decoration", () => {
        if (removedSet[idx] !== undefined) {
          return "line-through"
        } else {
          return "none"
        }
      })
      datasets = []
      for (let j = 0; j < legendItems.length; j++) {
        if (removedSet[j] !== undefined) continue;
        datasets.push(dataList[j])          
      }      
      renderBackgroundColor();
      makeChart(datasets);
    })
  })
}