import capture from "./saveSvgAsPng.js";

export function menu(chart_width, margin, svg, options, id) {
  const menuWidth = 30;
  const menuHeight = 30;
  const menuX = chart_width - margin.right - menuWidth;

  const chartMenu = svg
    .append("g")
    .attr("class", "chartMenu")
    .attr("transform", "translate(" + menuX + ",0)")
    .style("cursor", "pointer")
    .style("width", menuWidth)
    .style("height", 30);

  chartMenu
    .append("rect")
    .attr("fill", "black")
    .style("opacity", 0)
    .attr("x", 0)
    .attr("y", 0)
    .attr("height", 30)
    .attr("width", menuWidth);

  chartMenu
    .append("circle")
    .attr("class", "menuCircle")
    .attr("fill", "black")
    .attr("cx", menuWidth / 2 - 10)
    .attr("cy", 15)
    .attr("r", 3)
    .style("opacity", 0.2);

  chartMenu
    .append("circle")
    .attr("class", "menuCircle")
    .attr("fill", "black")
    .attr("cx", menuWidth / 2)
    .attr("cy", 15)
    .attr("r", 3)
    .style("opacity", 0.2);

  chartMenu
    .append("circle")
    .attr("class", "menuCircle")
    .attr("fill", "black")
    .attr("cx", menuWidth / 2 + 10)
    .attr("cy", 15)
    .attr("r", 3)
    .style("opacity", 0.2);

  chartMenu.on("mouseover", function (e) {
    chartMenu.selectAll(".menuCircle").style("opacity", 0.4);
  });
  chartMenu.on("mouseleave", function (e) {
    chartMenu.selectAll(".menuCircle").style("opacity", 0.2);
  });

  // 드롭다운 부분 d3, svg로 작성
  const dropDownWidth = 100;
  const dropDownX = chart_width - margin.right - dropDownWidth;

  const dropDown = svg
    .append("g")
    .attr("class", "dropDown")
    .attr("transform", "translate(" + dropDownX + "," + margin.top + ")");

  // 일일히 옵션 생성해주기
  // 어차피 함수 한개씩 일일히 지정해야한다
  let dropDownIndex = 0;
  const dropDownLength = Object.keys(options.plugins.menu).length + 1;

  dropDown
    .append("rect")
    .attr("x", 0)
    .attr("y", 0)
    .attr("width", dropDownWidth)
    .attr("height", 25 * dropDownLength + 10)
    .attr("rx", 5)
    .attr("ry", 5)
    .style("fill", "white")
    .style("opacity", 0.8)
    .style("stroke", "black")
    .style("stroke-width", "2");

  const yGridGroup = svg.select("g.yAxis");
  const xGridGroup = svg.select("g.xAxis");

  const gridButton = dropDown.append("text");
  const xGridButton = dropDown.append("text");
  const yGridButton = dropDown.append("text");
  const download = dropDown.append("text");

  if (options.plugins.menu.grid) {
    dropDownIndex += 1;

    gridButton
      .attr("x", dropDownWidth - 8)
      .attr("y", dropDownIndex * 25)
      // .attr('width', dropDownWidth)
      // .attr('height', 20)
      .text("Grid")
      .attr("text-anchor", "end")
      .style("font-family", "sans-serif")
      .style("cursor", "pointer")
      .on("click", function (event) {
        if (
          xGridGroup.property("visibleStatus") === "hidden" &&
          yGridGroup.property("visibleStatus") === "hidden"
        ) {
          yGridGroup.property("visibleStatus", "visible");
          xGridGroup.property("visibleStatus", "visible");
          d3.selectAll(id + " svg g.yAxis g.tick line.gridline").style(
            "visibility",
            "visible"
          );
          d3.selectAll(id + " svg g.xAxis g.tick line.gridline").style(
            "visibility",
            "visible"
          );
          gridButton.style("fill", "black");
          xGridButton.style("fill", "black");
          yGridButton.style("fill", "black");
        } else {
          yGridGroup.property("visibleStatus", "hidden");
          xGridGroup.property("visibleStatus", "hidden");
          d3.selectAll(id + " svg g.yAxis g.tick line.gridline").style(
            "visibility",
            "hidden"
          );
          d3.selectAll(id + " svg g.xAxis g.tick line.gridline").style(
            "visibility",
            "hidden"
          );
          gridButton.style("fill", "#aaaaaa");
          xGridButton.style("fill", "#aaaaaa");
          yGridButton.style("fill", "#aaaaaa");
        }
      });
    if (
      xGridGroup.property("visibleStatus") === "hidden" &&
      yGridGroup.property("visibleStatus") === "hidden"
    ) {
      gridButton.style("fill", "#aaaaaa");
    }
  }

  if (options.plugins.menu.xGrid) {
    dropDownIndex += 1;

    xGridButton
      .attr("x", dropDownWidth - 8)
      .attr("y", dropDownIndex * 25)
      .text("xGrid")
      .attr("text-anchor", "end")
      .style("font-family", "sans-serif")
      .style("cursor", "pointer")
      .on("click", function (event) {
        if (xGridGroup.property("visibleStatus") === "hidden") {
          xGridGroup.property("visibleStatus", "visible");
          d3.selectAll(id + " svg g.xAxis g.tick line.gridline").style(
            "visibility",
            "visible"
          );
          xGridButton.style("fill", "black");

          if (yGridGroup.property("visibleStatus") === "visible") {
            gridButton.style("fill", "black");
          }
        } else {
          xGridGroup.property("visibleStatus", "hidden");
          d3.selectAll(id + " svg g.xAxis g.tick line.gridline").style(
            "visibility",
            "hidden"
          );
          xGridButton.style("fill", "#aaaaaa");

          if (yGridGroup.property("visibleStatus") === "hidden") {
            gridButton.style("fill", "#aaaaaa");
          }
        }
      });

    if (xGridGroup.property("visibleStatus") === "hidden") {
      xGridButton.style("font-weight", "normal");
    }
  }

  if (options.plugins.menu.yGrid) {
    dropDownIndex += 1;

    yGridButton
      .attr("x", dropDownWidth - 8)
      .attr("y", dropDownIndex * 25)
      .text("yGrid")
      .attr("text-anchor", "end")
      .style("font-family", "sans-serif")
      .style("cursor", "pointer")
      .on("click", function (event) {
        if (yGridGroup.property("visibleStatus") === "hidden") {
          yGridGroup.property("visibleStatus", "visible");
          d3.selectAll(id + " svg g.yAxis g.tick line.gridline").style(
            "visibility",
            "visible"
          );
          yGridButton.style("fill", "black");

          if (xGridGroup.property("visibleStatus") === "visible") {
            gridButton.style("fill", "black");
          }
        } else {
          yGridGroup.property("visibleStatus", "hidden");
          d3.selectAll(id + " svg g.yAxis g.tick line.gridline").style(
            "visibility",
            "hidden"
          );
          yGridButton.style("fill", "#aaaaaa");

          if (xGridGroup.property("visibleStatus") === "hidden") {
            gridButton.style("fill", "#aaaaaa");
          }
        }
      });

    if (yGridGroup.property("visibleStatus") === "hidden") {
      yGridButton.style("fill", "#aaaaaa");
    }
  }

  if (options.plugins.menu.background) {
    dropDownIndex += 1;

    const chartBackground = svg.select(".chartBackground rect");
    // console.log(chart_area)
    // console.log(chartBackground)
    let color = "#f1f3f5";
    if (options.plugins.background?.color) {
      color = options.plugins.background.color;
    }

    const bgButton = dropDown
      .append("text")
      .attr("x", dropDownWidth - 8)
      .attr("y", dropDownIndex * 25)
      .text("background")
      .attr("text-anchor", "end")
      .style("font-family", "sans-serif")
      .style("cursor", "pointer")
      .on("click", function (event) {
        if (chartBackground.property("visibleStatus") === "hidden") {
          chartBackground.property("visibleStatus", "visible");
          d3.selectAll(id + " svg g.chartBackground rect").style("fill", color);
          bgButton.style("fill", "black");
        } else {
          chartBackground.property("visibleStatus", "hidden");
          d3.selectAll(id + " svg g.chartBackground rect").style(
            "fill",
            "none"
          );
          bgButton.style("fill", "#aaaaaa");
        }
      });

    if (chartBackground.property("visibleStatus") === "hidden") {
      bgButton.style("fill", "#aaaaaa");
    }
  }

  if (options.plugins.menu.download) {
    dropDownIndex += 1;
    download
      .attr("x", dropDownWidth - 8)
      .attr("y", dropDownIndex * 25)
      .text("Download")
      .attr("text-anchor", "end")
      .style("font-family", "sans-serif")
      .style("cursor", "pointer")
      .on("click", function (event) {
        // div 태그를 가져옴
        let divId = this.parentNode.parentNode.parentNode.getAttribute("id");
        console.log(divId);
        // 클릭시 메뉴 닫음.
        if (dropDown.property("visibility") === "hidden") {
          dropDown
            .style("visibility", "visible")
            .property("visibility", "visible");
        } else {
          dropDown
            .style("visibility", "hidden")
            .property("visibility", "hidden");
        }

        // 이미지 저장
        saveSvgAsPng(
          document.getElementById(divId).getElementsByTagName("svg")[0],
          "ssart-chart"
        );
      });
  }

  dropDown.style("visibility", "hidden").property("visibility", "hidden");

  chartMenu.on("click", function (e) {
    console.log(dropDown.property("visibility"));
    if (dropDown.property("visibility") === "hidden") {
      dropDown.style("visibility", "visible").property("visibility", "visible");
    } else {
      dropDown.style("visibility", "hidden").property("visibility", "hidden");
    }
  });
  console.log(svg.node().getBBox().width);
  chartMenu.attr(
    "transform",
    `translate(${
      options.plugins.legend.position === "right"
        ? svg.node().getBBox().width - dropDown.node().getBBox().width
        : svg.node().getBBox().width
    }, 0)`
  );
  dropDown.attr(
    "transform",
    `translate(${
      options.plugins.legend.position === "right"
        ? svg.node().getBBox().width - dropDown.node().getBBox().width
        : svg.node().getBBox().width - dropDown.node().getBBox().width
    }, ${menuHeight})`
  );
}
