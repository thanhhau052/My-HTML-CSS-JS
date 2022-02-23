const images = document.querySelectorAll(".image img");
const btnPrev = document.querySelector(".prev");
const btnNext = document.querySelector(".next");
const btnClose = document.querySelector(".close");
const gallery = document.querySelector(".gallery");
const galleryImg = document.querySelector(".gallery__inner img");

let currentIndex = 0;

function showGallery() {
  if (currentIndex == 0) {
    btnPrev.style.display = "none";
  } else {
    btnPrev.style.display = "block";
  }
  if (currentIndex == images.length - 1) {
    btnNext.style.display = "none";
  } else {
    btnNext.style.display = "block";
  }
  galleryImg.src = images[currentIndex].src;
  gallery.classList.add("show");
}

// show img
images.forEach((item, index) => {
  item.addEventListener("click", () => {
    currentIndex = index;
    showGallery();
  });
});

// close icon X
btnClose.addEventListener("click", () => {
  gallery.classList.remove("show");
});

// close by Esc key
document.addEventListener("keydown", (e) => {
  if (e.keyCode === 27) {
    gallery.classList.remove("show");
  }
});

// Previous
btnPrev.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    showGallery();
  }
});

//  Next
btnNext.addEventListener("click", () => {
  if (currentIndex < images.length - 1) {
    currentIndex++;
    showGallery();
  }
});
