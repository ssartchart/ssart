const verticalBarChart = {
    data: `const data = {
    labels: ['a', 'b', 'c', 'd', 'e', 'f'],
    datasets: [
        {
            label: '데이터 1',
            data: [
                { name: 'a', value: -10 },
                { name: 'b', value: -29 },
                { name: 'c', value: -32 },
                { name: 'd', value: 25 },
                { name: 'e', value: 23 },
                { name: 'f', value: 15 }
            ],
            // backgroundColor: "red",

        },
        {
            label: '데이터 2',
            data: [1, 2, 3, 4, 5, 6, -7, -8, -9, -10]
            ,
            // backgroundColor: "blue",
        },
        {
            label: '데이터 3',
            data:
                [
                    { name: 'a', value: 15 },
                    { name: 'b', value: 23 },
                    { name: 'c', value: 25 },
                    { name: 'd', value: -32 },
                    { name: 'e', value: -29 },
                    { name: 'f', value: -12 },
                    { name: 'g', value: -15 },
                    { name: 'ㅎ', value: 1 },
                    { name: 't', value: 12 }
                ],
        },
    ]
};`,
    config: `const config = {
    type: 'bar',
    width: 500,
    height: 500,
    margin: { top: 40, left: 40, bottom: 40, right: 40 },
    padding: 0.1,
    data: data,
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'right',// top bottom left right
                fontSize: '10px',
                fontWeight: 'normal',
                fontFamily: 'comic sans ms',
                legendType: 'rect', // rect(default), circle,
            },
            title: {
                display: true,
                text: 'Bar Chart'
            },
            xTitle: {
                display: true,
                text: 'name'
            },
            yTitle: {
                display: true,
                text: 'value'
            },
            xGrid: {
                // color: "rgb(255, 0, 0)", // "rgb(255, 0, 0)" "rgba(255, 0, 0, 0.3)"
                // dash: "10,3",
                // weight: 5,
                // opacity: .5,
            },
            yGrid: {
                // color: "#323233", // "rgb(255, 0, 0)" "rgba(255, 0, 0, 0.3)"
                // dash: "10,3",     // 점선, 10만큼 칠하고 3만큼 빈공간
                // weight: 1,        // 선 두께
                // opacity: .5,      // 선 투명도
            },
            // background: {

            // },
            menu: {
                grid: true,
                xGrid: true,
                yGrid: true,
                background: true,
                download: true,
                legend: true
            },
            axis: {
                color: "rgb(255, 0, 0)", // "rgb(255, 0, 0)" "rgba(255, 0, 0, 0.3)",
                weight: 5,
                opacity: .5,
                dots: {
                    display: false,
                    color: "rgb(255, 0, 255)", // "rgb(255, 0, 0)" "rgba(255, 0, 0, 0.3)",
                    weight: 5,
                    opacity: .5
                },
                xAxis: {
                    color: "rgb(0, 255, 0)", // "rgb(255, 0, 0)" "rgba(255, 0, 0, 0.3)",
                    weight: 5,
                    opacity: 1,
                    dots: {
                        display: false,
                        color: "rgb(255, 0, 0)", // "rgb(255, 0, 0)" "rgba(255, 0, 0, 0.3)",
                        weight: 5,
                        opacity: 1
                    }
                },
                yAxis: {
                    color: "rgb(255, 0, 255)", // "rgb(255, 0, 0)" "rgba(255, 0, 0, 0.3)",
                    weight: 1,
                    opacity: .5,
                    dots: {
                        display: false,
                        color: "rgb(0, 0, 255)", // "rgb(255, 0, 0)" "rgba(255, 0, 0, 0.3)",
                        weight: 5,
                        opacity: .5
                    }
                }
            },
        },
        scales: {
            yAxis: {
                ticks: {
                    // min: -20,
                    max: 40
                }
            },
            fillopacity: 0.5
        }
    },
};
Chart.Chart("#ssart", config)
    `
}
const horizontalBarChart = {
    data: `const data = {
    labels: ['a', 'b', 'c', 'd', 'e'],
    datasets: [
      {
        label: '1번 막대 label',
        data: [
          { name: 'a', value: 100 },
          { name: 'b', value: 290 },
          { name: 'c', value: 750 },
          { name: 'd', value: 250 },
          { name: 'e', value: 750 },
        ],
        backgroundColor: "red",                    
      },
      {
        label: '2번 막대 label',
        data: [100, 200, 320, 45],
        backgroundColor: "blue",
      },
      {
        label: '3번 막대 label',
        data: [90, 170, 300, 415],
        backgroundColor: "yellow",
      },
    ]
};`,
config: `const config = {
    type: 'barH',
    width: 500,
    height: 500,
    margin: { top: 40, left: 40, bottom: 40, right: 40 },
    padding: 0.1,
    data: data,
    options: {
        responsive:  true,
        plugins: {
            legend: {
                position: 'bottom',// top bottom left right
            },
            title: {
                display:  true,
                text: '가로막대 그래프'
            },
            xTitle: {
                display: true,
                text: 'name'
            },
            yTitle: {
                display: true,
                text: 'value'
            },
            xGrid: {
                color: "rgb(255, 0, 0)", //"rgb(255, 0, 0)" "rgba(255, 0, 0, 0.3)"
                dash: "10,3",
                weight: 1,
                opacity: .5,
            },
            yGrid: {
                color: "#323233", // "rgb(255, 0, 0)" "rgba(255, 0, 0, 0.3)"
                dash: "10,3",     // 점선, 10만큼 칠하고 3만큼 빈공간
                weight: 1,        // 선 두께
                opacity: .5,      // 선 투명도
            },
        },
        scales:{
            yAxis : {
            ticks:{
                // min : -10,
                max : 900
                }
            },
        }                    
    }
};
Chart.Chart('#ssart', config)`
}
const areaChart = {
data: `const data = {
    labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    datasets: [
        {
            label: '라인 데이터1',
            data: [
                { name: 1, value: 10 },
                { name: 2, value: 29 },
                { name: 3, value: 32 },
                { name: 4, value: 25 },
                { name: 5, value: 23 },
                { name: 10, value: 15 }
            ],
            backgroundColor: "red",
        },
        {
            label: '라인 데이터2',
            data: [1, 3, 3, 4, 5, 6, 7, 8, 9, 10]
            ,
            backgroundColor: "blue",
        },
        {
            label: '라인 데이터3',
            data: [
                { x: 1, y: 15 },
                { x: 2, y: 23 },
                { x: 3, y: 25 },
                { x: 4, y: 32 },
                { x: 5, y: NaN },
                { x: 6, y: 8 },
                { x: 7, y: 13 },
                { x: 8, y: 15 },
            ],
        }
    ]
};`,
    config: `const config = {
    type: 'area',
    width: 500,
    height: 500,
    margin: { top: 40, left: 40, bottom: 40, right: 40 },
    padding: 0.1,
    data: data,
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',// top bottom left right
            },
            title: {
                display:  true,
                text: 'Area Chart'
            },
            xTitle: {
                display:  true,
                text: 'y'
            },
            yTitle: {
                display:  true,
                text: 'x'
            },

            xGrid : {
                display:  true,
                color: "#323233",// "rgb(255, 0, 0)" "rgba(255, 0, 0, 0.3)"
                dash: "10,3",// 점선, 10만큼 칠하고 3만큼 빈공간
                weight: 1,  // 선 두께
                opacity: .5 // 선 투명도 
            },

            yGrid: {
                display:  true,
                color: "#323233", // "rgb(255, 0, 0)" "rgba(255, 0, 0, 0.3)"
                dash: "10,3",// 점선, 10만큼 칠하고 3만큼 빈공간
                weight: 1, // 선 두께
                opacity: .5 // 선 투명도
            },

            menu: {
                // grid: true,
                xGrid:  true,
                yGrid:  true,
                download:  true,

            }
        },
        scales: {
            xAxis : {
                type : "number",
                ticks:{

                }
            },    
            yAxis : {
                ticks:{

                }
            },
            line :{
                width : 5,
                opacity : .5
            },
            dot :{
                size : 0,
                opacity : 1,
                visible :  true,
            }
        }
    },
};
Chart.Chart('#ssart', config)`
}
const bubbleChart = {
data: `const data3 = {
    labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    datasets: [
        {
            label: 'Small Radius',
            data:
                [
                    [1, -10, 1], [20, 20, 2], [3, 20, 3], [4, 20, 4], [5, 20, 5], [6, 20, 6]
                ],
        },
        {
            label: 'Small Radius',
            data: [
                { x: 1, y: 15, r: 10 },
                { x: 2, y: 23, r: 20 },
                { x: 3, y: 25, r: 30 },
                { x: 4, y: 32, r: 30 },
                { x: 5, y: 29, r: 100 },
                { x: 6, y: 13, r: 20 },
                { x: 7, y: 15, r: 50 },
            ],
        },
        {
            label: 'Small Radius',
            data: [
                { x: 10, y: 150, r: 10 },
                { x: 5, y: 230, r: 20 },
                { x: 6, y: 250, r: 30 },
                { x: 7, y: 32, r: 30 },
                { x: 8, y: 29, r: 100 },
                { x: 9, y: 13, r: 20 },
                { x: 10, y: 15, r: 50 },
            ],
        },
        {
            label: 'Small Radius',
            data: [
                { x: 1, y: 15, r: 10 },
                { x: 2, y: 23, r: 20 },
                { x: 3, y: 25, r: 30 },
                { x: 4, y: 32, r: 30 },
                { x: 5, y: 29, r: 100 },
                { x: 6, y: 13, r: 20 },
                { x: 7, y: 15, r: 50 },
            ],
        }
    ]
};`,
config: `const config3 = {
    type: 'bubble',
    width: 500,
    height: 500,
    margin: { top: 40, left: 40, bottom: 40, right: 40 },
    padding: 0.1,
    data: data3,
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',// top bottom left right
            },
            title: {
                display: true,
                text: 'bubble Chart',
                color: '#000000',
                align: 'center' //start, end, center
            },
            xTitle: {
                display: true,
                text: 'x축',
                size: "15px",
                // color: 'rgba(100, 150, 0, .5)',
                align: 'center' //start, end, center
            },
            yTitle: {
                display: true,
                text: 'y축',
                size: "15px",
                rotate: true,
                position: 'left',
                color: '#000000',
                align: 'center' //top, bottom, center
            },
            xGrid: {
                color: "rgb(255, 0, 0)", // "rgb(255, 0, 0)" "rgba(255, 0, 0, 0.3)"
                dash: "10,3",
                weight: 1,
                opacity: .5,
            },
            yGrid: {
                color: "#323233", // "rgb(255, 0, 0)" "rgba(255, 0, 0, 0.3)"
                dash: "10,3",     // 점선, 10만큼 칠하고 3만큼 빈공간
                weight: 1,        // 선 두께
                opacity: .5,      // 선 투명도
            },
            menu: {

            }
        },
        scales: {
            xAxis: {
                // type: "number",
                ticks: {
                    min: 0,
                    max: 10
                }
            },
            yAxis: {
                ticks: {
                    max: 80,
                    tick: 20
                }
            },
            r: {
                size: {
                    min: 10,
                    max: 30
                }
            },
            fillopacity: 0.5
        }
    },
};
Chart.Chart('#ssart', config3)`
}
const circleChart = {
    data: `const data = {
    labels: ['dd', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
        datasets: [{    
            data : [
            { name: 'AAAA', value: 1000, color: '#efa86b' },
            { name: 'BBB', value: 1500, color: '#c1484f' },
            { name: 'C', value: 1300 },
            { name: 'D', value: 900, color: '#f4c17c' },
            { name: 'E', value: 700, color: '#fae8a4' },
            { name: 'F', value: 1200, color: '#df7454' },
            { name: 'G', value: 1100, color: '#e88d5d' },
            { name: 'H', value: 600, color: '#f8d690' },
            ]
        }
    ]
};`,
    config: `const config = {
    type: 'donut',// if you want pie chart , change the type to pie!
    width: 500,
    height: 500,
    margin: { top: 40, left: 40, bottom: 40, right: 40 },
    padding: 0.1,
    data: data,
    options: {
        responsive:  true,
        plugins: {
            legend: {
                position: 'left',// top bottom left right
            },
            title: {
                display:  true,
                text: 'Donut Chart'
            },
            sort: true,
            view:  true,
        },
    }
}
Chart.Chart('#ssart', config)`
}
const lineChart = {
    data: `const data = {
    labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    datasets: [
        {
            label: '라인 데이터1',
            data: [
                { name: 1, value: 10 },
                { name: 2, value: 29 },
                { name: 3, value: 32 },
                { name: 4, value: 25 },
                { name: 5, value: 23 },
                { name: 10, value: 15 }
            ],
            backgroundColor: "red",

        },
        {
            label: '라인 데이터2',
            data: [1, 3, 3, 4, 5, 6, 7, 8, 9, 10],
            backgroundColor: "blue",
        },
        {
            label: '라인 데이터3',
            data: [
                { x: 1, y: 15 },
                { x: 2, y: 23 },
                { x: 3, y: 25 },
                { x: 4, y: 32 },
                { x: 5, y: NaN },
                { x: 6, y: 8 },
                { x: 7, y: 13 },
                { x: 8, y: 15 },
            ],
        }
    ]
};`,
    config: `const config = {
    type: 'line',
    width: 500,
    height: 500,
    margin: { top: 40, left: 40, bottom: 40, right: 40 },
    padding: 0.1,
    data: data,
    options: {
        responsive:  true,
        plugins: {
            legend: {
                position: 'bottom',// top bottom left right
            },
            title: {
                display:  true,
                text: 'Line Chart'
            },
            xTitle: {
                display:  true,
                text: 'y'
            },
            yTitle: {
                display:  true,
                text: 'x'
            },
            xGrid : {
                display:  true,
                color: "#323233",// "rgb(255, 0, 0)" "rgba(255, 0, 0, 0.3)"
                dash: "10,3", // 점선, 10만큼 칠하고 3만큼 빈공간
                weight: 1, // 선 두께
                opacity: .5 // 선 투명도 
            },

            yGrid: {
                display:  true,
                color: "#323233",// "rgb(255, 0, 0)" "rgba(255, 0, 0, 0.3)"
                dash: "10,3",// 점선, 10만큼 칠하고 3만큼 빈공간
                weight: 1, // 선 두께
                opacity: .5 // 선 투명도
            },

            menu: {
                // grid: true,
                xGrid:  true,
                yGrid:  true,
                download:  true,

            }
        },
        scales: {
            xAxis: {
                type: "number",
                ticks: {

                }
            },
            yAxis: {
                ticks: {
                    max: 20
                }
            },
            line: {
                width: 5,
                opacity: 0.6
            },
            dot: {
                size: 0,
                opacity: 1,
                visible:  true,
            }
        }
    },
};
Chart.Chart('#ssart', config)`
}
const polarChart = {
    data: `const data_r = {
            labels: ['ability1', 'ability2', 'ability3', 'ability4' ,'ability5'],
            datasets: [
                { 
                    label: 'A',
                    data : [270,270,120,1,140]
                },
                { 
                    label: 'B', 
                    data :[140,100,280,250,120],
                },
                { 
                    label: 'C',
                    data : [100,190,140,12,270],
                },
                { 
                    label : 'D',
                    data : [20,200,200,52,230],
                }
            ],        
        };`,
    config: `const config = {
            type: 'polar',
            width: 500,
            height: 500,
            margin: { top: 40, left: 40, bottom: 40, right: 40 },
            padding: 0.1,
            data: data_r,
            depth:7, // 구간 갯수
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',// top bottom left right
                    },
                    title: {
                        display: true,
                        text: 'polar Chart'
                    },
                    sort: true,
                    view: true,
                    menu: {
                        download: true
                    }
                },
                scales:{
                    depth : 7
                }
            }
        }
    Chart.Chart('#ssart', config)`
}
const radarChart = {
    data: `const data_r = {
            labels: ['ability1', 'ability2', 'ability3', 'ability4' ,'ability5'],
            datasets: [
                { 
                    label: 'A',
                    data : [270,270,120,1,140]
                },
                { 
                    label: 'B', 
                    data :[140,100,280,250,120],
                },
                { 
                    label: 'C',
                    data : [100,190,140,12,270],
                },
                { 
                    label : 'D',
                    data : [20,200,200,52,230],
                }
            ],        
        };`,
    config: `const config_r = {
            type: 'radar',
            width: 500,
            height: 500,
            margin: { top: 40, left: 40, bottom: 40, right: 40 },
            padding: 0.1,
            data: data_r,
            depth:7, // 구간 갯수
            poly:true,
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',// top bottom left right
                    },
                    title: {
                        display: true,
                        text: 'Radar Chart'
                    },
                    sort: true,
                    view: true,
                    menu: {
                        download: true
                    }
                },
                scales:{
                    depth : 7
                }
            }
        }
Chart.Chart('#ssart', config_r)`
}
const scatterChart = {
    data: `const data2 = {
            labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            datasets: [
                {
                    label: 'Fully Rounded',
                    data: [
                        { name: 1, value: 10 },
                        { name: 2, value: 29 },
                        { name: 3, value: 32 },
                        { name: 4, value: 25 },
                        { name: 5, value: 23 },
                        { name: 10, value: 15 }
                    ],
                    backgroundColor: "red",

                },
                {
                    label: 'Small Radius',
                    data: [1, 3, 3, 4, 5, 6, 7, 8, 9, 10]
                    ,
                    backgroundColor: "blue",
                },
                {
                    label: 'Small Radius',
                    data:
                        [
                            [1.5, 1], [2, 2], [3, 2], [4, 2], [5, 2], [6, 2]
                        ],
                },
                {
                    label: 'Small Radius',
                    data: [
                        { x: 1, y: 15 },
                        { x: 2, y: 23 },
                        { x: 3, y: 25 },
                        { x: 4, y: 32 },
                        { x: 5, y: 29 },
                        { x: -6, y: 13 },
                        { x: 7, y: 15 },
                    ],
                }
            ]
        };`,
    config: `const config2 = {
            type: 'scatter',
            width: 500,
            height: 500,
            margin: { top: 40, left: 40, bottom: 40, right: 40 },
            padding: 0.1,
            data: data2,
            options: {
                responsive: true,
                plugins: {
                    // legend: {
                    //     // position: 'right',// top bottom left right
                    // },
                    title: {
                        display: true,
                        text: 'Scatter Chart'
                    },
                    xTitle: {
                        display: true,
                        text: 'y'
                    },
                    yTitle: {
                        display: true,
                        text: 'x'
                    },
                    xGrid: {
                        color: "#323233", // "rgb(255, 0, 0)" "rgba(255, 0, 0, 0.3)"
                        dash: "10,3",
                        weight: 2,
                        opacity: .5
                    },
                    yGrid: {
                        display: true,
                        color: "#323233", // "rgb(255, 0, 0)" "rgba(255, 0, 0, 0.3)"
                        dash: "10,3",     // 점선, 10만큼 칠하고 3만큼 빈공간
                        weight: 2,        // 선 두께
                        opacity: .5       // 선 투명도
                    },
                    background: {

                    },
                    menu: {
                        grid: true,
                        xGrid: true,
                        yGrid: true,
                        background: true,
                        download: true
                    },

                },
                
                scales: {
                    xAxis: {
                        type: "number",
                        ticks: {
                            min: -10,
                            max: 10
                        }
                    },
                    dot: {
                        size: 10,
                        opacity: 1
                    }
                }
            },
        };
Chart.Chart('#ssart', config2)`
}
export {verticalBarChart, horizontalBarChart, areaChart, bubbleChart, circleChart, lineChart, polarChart, radarChart, scatterChart}