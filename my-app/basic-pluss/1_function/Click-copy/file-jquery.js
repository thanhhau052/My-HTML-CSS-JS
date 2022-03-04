const copyText = document.querySelector(".content-copy");

$(".btn-copy").on("click", function () {
  navigator.clipboard.writeText(copyText.innerText);
  $(this).addClass("active");
  setTimeout(function () {
    $(".btn-copy").removeClass("active");
  }, 1000);
});
