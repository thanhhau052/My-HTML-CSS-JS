$(document).ready(function () {
  const listImg = $(".list-image img");
  const imgFeature = $(".img-feature");

  let currentIndexImg = 0;
  let currentDivActive = $(".list-image").children("div")[currentIndexImg];

  imgFeature.attr("src", listImg[currentIndexImg].src);
  currentDivActive.classList.add("active");

  // #region FUNCTION click change image
  $(".list-image").on("click", "div", function () {
    $(this).addClass("active");
    $(".img-feature").removeClass("index");
    updateImgFeatureByIndex($(this).index());
  });

  function updateImgFeatureByIndex(index) {
    // remove active class
    $(".list-image div")[currentIndexImg].classList.remove("active");
    currentIndexImg = index;
    $(".img-feature").attr("src", listImg[currentIndexImg].src);
    $(".img-feature").addClass("index");
    setTimeout(function () {
      $(".img-feature").removeClass("index");
    }, 500);
  }
  //#endregion

  // #region FUNCTION click btn change image
  $(".control.prev").on("click", function (e) {
    let oldIndexImg = currentIndexImg;
    if (currentIndexImg == 0) {
      currentIndexImg = listImg.length - 1;
    } else {
      currentIndexImg--;
    }
    changeImageByNextBtnOrPrevBtn("prev", oldIndexImg);
  });

  $(".control.next").on("click", function () {
    let oldIndexImg = currentIndexImg;
    if (currentIndexImg == listImg.length - 1) {
      currentIndexImg = 0;
    } else {
      currentIndexImg = currentIndexImg + 1;
    }
    changeImageByNextBtnOrPrevBtn("next", oldIndexImg);
  });

  function changeImageByNextBtnOrPrevBtn(status, oldIndexImg) {
    $(".img-feature").addClass(status == "next" ? "next" : "prev-old");
    $(".control").each(function () {
      $(this).addClass("hide");
    });
    let $img = $("<img/>")
      .addClass("img-feature")
      .addClass(status == "next" ? "next" : "prev-new")
      .attr("src", listImg[currentIndexImg].src);
    $(".main").append($img);
    // Must remove animation  here (Can't remove under let imgFeature1)
    setTimeout(() => {
      $(".control").each(function () {
        $(this).removeClass("hide");
      });
      $(".img-feature")[0].remove();
      $(".img-feature").removeClass(status == "next" ? "next" : "prev-new");
    }, 1000);
    // Add or remove active
    $(".list-image div")[currentIndexImg].classList.add("active");
    $(".list-image div")[oldIndexImg].classList.remove("active");
  }
  // #endregion
});
