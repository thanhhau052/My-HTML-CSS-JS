const body = document.querySelector("body");
const myPicture = document.getElementById("myPicture");
const preview = document.querySelector(".preview");
const error = document.querySelector(".error");

myPicture.addEventListener("change", function (e) {
  let file = myPicture.files[0];
  if (!file) {
    return;
  }

  if (file.name.endsWith(".jpg")) {
    error.innerText = "Img must format .jpeg";
    return;
  } else {
    error.innerText = "";
  }

  if (file.size / (1024 * 1024) > 5) {
    error.innerText = "Size Image must be less than 5MB";
  } else {
    error.innerText = "";
  }
  let img = document.createElement("img");
  img.src = URL.createObjectURL(file);

  //#region Base 64
  // let fileReader = new FileReader();
  // fileReader.readAsDataURL(file);
  // fileReader.onloadend = function (e) {
  //   console.log("load ok", e.target.result);
  //   img.src = e.target.result;
  // };
  //#endregion
  preview.appendChild(img);
});
