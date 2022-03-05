let currentTarget = null;

// Event drag / drop
$(".box").on("drop dragover click", function (e) {
  if (this.querySelector(".target")) {
    return;
  }
  $(this).append(currentTarget);
});

// Add border in drag
$(".target").on("dragstart", function (e) {
  $(this).addClass("border");
  currentTarget = $(this);
});

// Remove border drop
$(".target").on("dragend", function (e) {
  currentTarget.removeClass("border");
});
