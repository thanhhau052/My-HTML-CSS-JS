const body = document.querySelector("body");
let imgFeature = document.querySelector(".img-feature");
const imgFeatures = document.querySelectorAll(".img-feature");
const listImg = document.querySelectorAll(".list-image img");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const main = document.querySelector(".main");
const controlBtn = document.querySelectorAll(".control");

let currentIndexImg = 0;

imgFeature.src = listImg[currentIndexImg].getAttribute("src");
listImg[currentIndexImg].parentElement.classList.add("active");
listImg.forEach((img, index) => {
  img.addEventListener("click", function () {
    updateImgFeatureByIndex(index);
    this.parentElement.classList.add("active");
  });
});

prevBtn.addEventListener("click", function (e) {
  let oldIndexImg = currentIndexImg;
  if (currentIndexImg == 0) {
    currentIndexImg = listImg.length - 1;
  } else {
    currentIndexImg--;
  }
  changeImageByNextBtnOrPrevBtn("prev", oldIndexImg);
});

nextBtn.addEventListener("click", function () {
  let oldIndexImg = currentIndexImg;
  if (currentIndexImg == listImg.length - 1) {
    currentIndexImg = 0;
  } else {
    currentIndexImg = currentIndexImg + 1;
  }
  changeImageByNextBtnOrPrevBtn("next", oldIndexImg);
});

function changeImageByNextBtnOrPrevBtn(status, oldIndexImg) {
  let oldImgFeature = document.querySelector(".img-feature");
  oldImgFeature.classList.add(status == "next" ? "next" : "prev-old");
  controlBtn.forEach((e) => {
    e.classList.add("hide");
  });
  let newImgFeature = document.createElement("img");
  newImgFeature.classList.add("img-feature");
  newImgFeature.src = listImg[currentIndexImg].getAttribute("src");
  newImgFeature.classList.add(status == "next" ? "next" : "prev-new");
  main.appendChild(newImgFeature);
  // main.prepend(newImgFeature);
  // Must remove animation  here (Can't remove under let imgFeature1)
  setTimeout(() => {
    controlBtn.forEach((e) => {
      e.classList.remove("hide");
    });
    oldImgFeature.remove();
    newImgFeature.classList.remove(status == "next" ? "next" : "prev-new");
  }, 1000);
  listImg[currentIndexImg].parentElement.classList.add("active");
  listImg[oldIndexImg].parentElement.classList.remove("active");
}

function updateImgFeatureByIndex(index) {
  // remove active class
  listImg[currentIndexImg].parentElement.classList.remove("active");
  currentIndexImg = index;
  imgFeature.classList.remove("index");
  imgFeature.src = listImg[index].getAttribute("src");
  imgFeature.classList.add("index");
  setTimeout(function () {
    imgFeature.classList.remove("index");
  }, 500);
}
