const btnSuccess = document.querySelector(".control .success");
const btnWarning = document.querySelector(".control .warning");
const btnError = document.querySelector(".control .error");
const toastList = document.querySelector("#toasts");

function createToast(status) {
  let templateInner = `<i class="fa-solid fa-circle-check"></i>
  <span class="message">This is a succession message</span>`;
  switch (status) {
    case "success":
      templateInner = `<i class="fa-solid fa-circle-check"></i>
      <span class="message">This is a succession message</span>`;
      break;
    case "warning":
      templateInner = ` <i class="fa-solid fa-triangle-exclamation"></i>
        <span class="message">This is a Warning message</span>`;
      break;
    case "error":
      templateInner = `<i class="fa-solid fa-circle-exclamation"></i>
          <span class="message">This is a Error message</span>`;
      break;
  }
  let toast = document.createElement("div");
  toast.classList.add(`toast`);
  toast.classList.add(`${status}`);
  toast.innerHTML = `<div class="content">${templateInner}</div>
    <div class="countdown"></div>`;

  toastList.appendChild(toast);

  setTimeout(function () {
    toast.style.animation = "slide_hide 2s ease-out forwards";
  }, 4000);
  setTimeout(function () {
    toast.remove();
  }, 5900);
}

btnSuccess.addEventListener("click", function () {
  createToast("success");
});
btnWarning.addEventListener("click", function () {
  createToast("warning");
});
btnError.addEventListener("click", function () {
  createToast("error");
});
