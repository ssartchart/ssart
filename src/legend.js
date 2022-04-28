export function drawLegend(svg, labels, width, height, chartContainer, position, margin) {  
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
    
    let rowGroup = [];
    let currGroup = [];
    const MARGINWIDTH = 20;
    let res;
    if (position === "top") {
      let currXPos = 0;
      let currYPos = margin.top;
      legend.attr("transform", function (d, i) {
        let legendBBox = document.getElementById(`legend-${i}`).getBBox();
        let legendItem = document.getElementById(`legend-${i}`);
        // console.log(`범례 너비-${i}`, legendBBox.width, '현재 x좌표(시작점):' ,currXPos)
        if (currXPos + legendBBox.width >= width) {
          rowCnt++;
          currYPos += legendBBox.height + MARGINWIDTH
          currXPos = 0;
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
      for (let i = 0; i < rowGroup.length; i++) {
        let legendGroup = rowGroup[i];
        d3.select('.legend-item').append('g').attr("class", `legend-group-${i}`).node().append(...legendGroup);
      }
      // 각 행의 legend 그룹을 센터로 재배치
      for (let i = 0; i < rowCnt; i++) {
        const groupItem = d3.select(`.legend-group-${i}`);        
        const startXPos = (width - groupItem.node().getBoundingClientRect().width) / 2; // 배치할 X좌표 계산
        groupItem.attr("transform", `translate(${startXPos}, 0)`)  
      }
      return {width : 0,
        height : svg.select(".legend-item").node().getBBox().height+ margin.top};

    } else if (position === "bottom") {
      let currXPos = 0;
      let currYPos = height;
            
      legend.attr("transform", function (d, i) {
        let legendBBox = document.getElementById(`legend-${i}`).getBBox();
        let legendItem = document.getElementById(`legend-${i}`);        
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
        d3.select('.legend-item').append('g').attr("class", `legend-group-${i}`).node().append(...legendGroup);
      }
      // 각 행의 legend 그룹을 센터로 재배치
      // console.log(document.getElementById('chart-area').getBoundingClientRect())
      for (let i = 0; i < rowCnt; i++) {
        const groupItem = d3.select(`.legend-group-${i}`);        
        const startXPos = (width - groupItem.node().getBoundingClientRect().width) / 2; // 배치할 X좌표 계산
        groupItem.attr("transform", `translate(${startXPos}, 0)`)  
      }
      const legend_y = svg.select(".legend-item").node().getBBox().height;
      svg.select(".legend-item").attr("transform",`translate(${0}, ${-legend_y})`);

      return {width : 0,
        height : svg.select(".legend-item").node().getBBox().height};
    }
    
  } else if (position === "left" || position === "right") {
    let colCnt = 1;
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
    
    let colGroup = [];
    let currGroup = [];
    const MARGINROW = 10;
    const MARGINCOL = 30;
    let legendMaxWidth = 0;
    if (position === "left") {
      let currXPos = 0;
      let currYPos = 0;
      
      let rowGap = 0;
      legend.attr('transform', function (d, i) {
        let legendBBox = document.getElementById(`legend-${i}`).getBBox();
        let legendItem = document.getElementById(`legend-${i}`);
        // console.log(legendItem, `${i}번 레전드 너비:`, legendBBox.width, `차트 gap:`, rowGap)
        if (width + legendBBox.width > width) {
          legendMaxWidth = Math.max(legendBBox.width, legendMaxWidth)
          rowGap = document.querySelector('.legend-item').getBBox().width + legendBBox.width;
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
        d3.select('.legend-item').append('g').attr("class", `legend-group-${i}`).node().append(...legendGroup);
      }
      // 각 열의 legend 그룹을 센터로 재배치      
      for (let i = 0; i < colCnt; i++) {
        const groupItem = d3.select(`.legend-group-${i}`);                
        const startYPos = (height - groupItem.node().getBoundingClientRect().height) / 2; // 배치할 Y좌표 계산        )
        groupItem.attr("transform", `translate(0, ${startYPos})`)  
      }
      chartContainer.attr("transform", `translate(${svg.select(".legend-item").node().getBBox().width}, 0)`)
      
    } else { // right      
      let currXPos = width-1;
      let currYPos = 0;      
     
      legend.attr('transform', function (d, i) {
        let legendBBox = document.getElementById(`legend-${i}`).getBBox();
        let legendItem = document.getElementById(`legend-${i}`);
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
        d3.select('.legend-item').append('g').attr("class", `legend-group-${i}`).node().append(...legendGroup);
      }
      // 각 열의 legend 그룹을 센터로 재배치      
      for (let i = 0; i < colCnt; i++) {
        const groupItem = d3.select(`.legend-group-${i}`);                
        const startYPos = (height - groupItem.node().getBoundingClientRect().height) / 2; // 배치할 Y좌표 계산        )
        groupItem.attr("transform", `translate(0, ${startYPos})`)  
      }
      
      svg.select(".legend-item").attr("transform", `translate(${-svg.select(".legend-item").node().getBBox().width}, ${0})`);      
    }    
    return {width : svg.select(".legend-item").node().getBBox().width,
    height : 0};
  }

  
}