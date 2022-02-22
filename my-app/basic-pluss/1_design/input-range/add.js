const slideValue = document.querySelector(".sliderValue span");
const inputSlider = document.querySelector("input[type=range]");

inputSlider.oninput = () => {
  let value = inputSlider.value;
  slideValue.textContent = value;
  slideValue.style.left = value / 2 + "%";
  slideValue.classList.add("show");
};

inputSlider.onblur = () => {
  slideValue.classList.remove("show");
};
