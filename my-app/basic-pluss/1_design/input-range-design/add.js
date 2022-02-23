const range = document.querySelector(".range");
const rangeCurrentBg = document.querySelector(".range-current-bg");
const rangeCurrent = document.querySelector(".range-current");
const rangeCurrentValue = document.querySelector(".range-current-value");
const body = document.querySelector("body");
const duration = document.querySelector(".duration");
const remaining = document.querySelector(".remaining");

let isPlay = false;
let currentMouse = 0;
let rangeMin;
let isGetRangeMin = false;
let rangeMax = range.offsetWidth;

remaining.innerText = 0;
duration.innerText = 100;
range.addEventListener("mousedown", function (e) {
  isPlay = true;
  if (!isGetRangeMin) {
    rangeMin = e.pageX;
    isGetRangeMin = true;
  }
  currentMouse = e.pageX - rangeMin;
  showRangeCurrent(currentMouse);
});
body.addEventListener("mousemove", function (e) {
  if (isPlay) {
    currentMouse = e.pageX - rangeMin;
    showRangeCurrent(currentMouse);
  }
});
function showRangeCurrent(currentMouse) {
  if (currentMouse < 0) {
    currentMouse = 0;
  }
  if (currentMouse > rangeMax) {
    currentMouse = rangeMax;
  }
  let rangePercent = (currentMouse / rangeMax) * 100;
  rangeCurrentBg.style.width = rangePercent + "%";
  rangeCurrent.style.left = rangePercent + "%";
  rangeCurrentValue.style.left = (currentMouse / rangeMax) * 100 + "%";
  rangeCurrentValue.innerText = Math.floor(
    (rangePercent / 100) * duration.innerText
  );
  remaining.innerText = Math.floor((rangePercent / 100) * duration.innerText);
}
body.addEventListener("mouseup", function () {
  if (isPlay) {
    isPlay = false;
  }
});
