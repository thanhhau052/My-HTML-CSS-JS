// const h1 = $("#home h1");
const home = document.querySelector("#home");
const animationElements = document.querySelectorAll(".show-on-scroll");

// console.log(home.getClientRects());
// console.log(window.innerHeight);
function toggleAnimationElementInWindow(element) {
  let rect = element.getClientRects()[0];
  let heightScreen = window.innerHeight;
  // Check element có bên trong màn hình không
  if (!(rect.bottom < 0 || rect.top > heightScreen)) {
    // Bên trong
    element.classList.add("start");
  } else {
    // Bên ngoài
    element.classList.remove("start");
  }
}

function checkAnimation() {
  animationElements.forEach((element) => {
    toggleAnimationElementInWindow(element);
  });
}

window.onscroll = checkAnimation;
