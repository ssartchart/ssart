import * as d3 from "https://cdn.skypack.dev/d3@7";
function checkMargin(margin) {
  if (margin.top < 40) {
    margin.top = 40;
  }
  if (margin.bottom < 40) {
    margin.bottom = 40;
  }
  if (margin.left < 40) {
    margin.left = 40;
  }
  if (margin.right < 40) {
    margin.right = 40;
  }
}

export { checkMargin };
