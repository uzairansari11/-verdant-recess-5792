let allCart = JSON.parse(localStorage.getItem("cart")) || [];

function dataDisplay(data) {
  document.querySelector("#All-item").innerHTML = null;
  data.forEach(function (ele, index) {
    let cart = document.createElement("div");

    let image = document.createElement("img");

    image.setAttribute("src", ele.test || ele.avatar);
    let title = document.createElement("h2");

    title.innerText = ele.title || "";

    let OfferPrice = document.createElement("h4");

    OfferPrice.innerText = "Price- ₹" + ele.OfferPrice;
    let buttons = document.createElement("div");
    buttons.setAttribute("id", "allButton");

    let minus = document.createElement("button");
    minus.innerText = "-";
    minus.addEventListener("click", function () {
      if (qty.innerText >= 2) {
        qty.innerText--;
        z = z + ele.OfferPrice;

        document.getElementById("total").innerText = "Total Price:₹" + z;

 

       
      }
      if (qty.innerText == 1) {
        removeItem(allCart, index);
        price(allCart);
      }
    });

    let qty = document.createElement("span");
    qty.innerText = 1;
    let plus = document.createElement("button");
    plus.innerText = "+";
    plus.addEventListener("click", function () {
      qty.innerText++;
      z = z + ele.OfferPrice;

      document.getElementById("total").innerText = "Total Price:₹" + z;





    });

    let buy = document.createElement("button");
    buy.innerText = "Buy";

    buy.addEventListener("click", function () {
      window.location.href = "payment.html";
      window.location.reload = "payment.html";

      removeItem(allCart, index);
      
    });

    let remove = document.createElement("button");
    remove.innerText = "Remove";

    remove.addEventListener("click", function () {
      removeItem(allCart, index);
      price(allCart);
    });
    buttons.append(minus, qty, plus, remove, buy);
    cart.append(image, OfferPrice, title, buttons);
    document.querySelector("#All-item").append(cart);
  });
}
dataDisplay(allCart);
let z;
function price(data) {
  z = data.reduce((acc, ele) => acc + ele.OfferPrice, 0);
  document.getElementById("total").innerText = "Total Price:₹" + z;
  dataDisplay(data);
}

price(allCart);

function removeItem(data, index) {
  data.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(data));
  dataDisplay(data);
}

let count=1