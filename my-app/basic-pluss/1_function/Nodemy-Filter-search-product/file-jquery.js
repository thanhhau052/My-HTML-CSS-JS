const body = document.querySelector("body");
fetch("http://fakestoreapi.com/products")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    data.forEach((item) => {
      let $product = $(`<div class="product">
                          <div class="product-img">
                            <img src="${item.image}" alt="" />
                          </div>
                          <div class="info">
                            <div class="name">${item.title}</div>
                            <div class="price">${item.price}$</div>
                          </div>
                        </div>`);
      $(".products").append($product);
    });

    $(".search input").on("input", function () {
      let txtSearch = $(this).val().trim().toLowerCase();
      $(".product").each(function () {
        if ($(this).text().toLowerCase().includes(txtSearch)) {
          $(this).removeClass("hide");
        } else {
          $(this).addClass("hide");
        }
      });
    });
  });
