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

    OfferPrice.innerText = "Offer Price- ₹  " + ele.OfferPrice;
    let buy = document.createElement("button");
    buy.innerText = "Add";
    cart.append(image, price, OfferPrice, buy);
    document.querySelector("#labtest").append(cart);
  });
}

