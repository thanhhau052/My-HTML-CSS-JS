const body = document.querySelector("body");
const range = document.querySelector(".range");
const process = document.querySelector(".process");
const inputRange = document.querySelector("#inputRange");

function updateProcess(percent) {
  process.style.width = `${percent}%`;
  if (percent === 0) {
    process.innerText = "";
  } else {
    process.innerText = `${percent}%`;
  }
}

range.addEventListener("mousemove", function (e) {
  let processWidth = e.pageX - this.offsetLeft;
  let percent = Math.round((processWidth / this.offsetWidth) * 100);
  console.log(percent);
  updateProcess(percent);
});

updateProcess(30);
