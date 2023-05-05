async function addData() {
  let x = await fetch("https://636de47991576e19e332da17.mockapi.io/tests");
  let y = await x.json();
  dataDisplay(y);
}
addData();

function dataDisplay(data) {
  data.forEach(function (ele) {
    let cart = document.createElement("div");

    let image = document.createElement("img");

    image.setAttribute("src", ele.test);
    let price = document.createElement("p");
    price.innerText = "Price- ₹" + ele.Price;

    let OfferPrice = document.createElement("h4");

    OfferPrice.innerText = "Offer Price- ₹" + ele.OfferPrice;
    let addCart = document.createElement("button");
    addCart.innerText = "Add";
let count=0
    addCart.addEventListener("click", function () {
      count++;
      if (count <= 1) {
        cartDataAdd("cart", ele);
        alert("Product  Added  Successfully");
      } else {
        alert("Product Already Added");
      }
    });

    cart.append(image, price, OfferPrice, addCart);
    document.querySelector("#labtest").append(cart);
  });
}

function cartDataAdd(key, value) {
  let arr = JSON.parse(localStorage.getItem(key)) || [];
  arr.push(value);
  localStorage.setItem(key, JSON.stringify(arr));
}
