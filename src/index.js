import { test } from "./test.js"
import { BarChart } from "./bar.js"

function makeChart(type) {
  if (type == "test") {
    console.log("index.js 응답!")
    return test()
  }else if (type == "bar") {
    return BarChart()
  }else {
    console.log("타입이 올바르지 않습니다.")
  }
}

export { makeChart }