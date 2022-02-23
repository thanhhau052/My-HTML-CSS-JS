const rangeValue = document.querySelector(".rangeValue");
const rangeInput = document.querySelector(".range");
let isMouseDown = false;

function rangeSlide(value) {
  rangeValue.innerHTML = value;
}
rangeInput.onmousedown = () => {
  isMouseDown = true;
};
rangeInput.onmousemove = () => {
  rangeSlide(rangeInput.value);
};

rangeInput.onmouseup = () => {
  if (isMouseDown) {
    isMouseDown = false;
  }
};
