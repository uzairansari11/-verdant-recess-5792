let url = "https://636fb312bb9cf402c81d9a76.mockapi.io/Expert";

async function addData() {
  let x = await fetch(url);
  let y = await x.json();
  displayData(y);
}
addData();

function displayData(data) {
  data.forEach(function (element) {
    let cart = document.createElement("div");

    let image = document.createElement("img");
    image.setAttribute("src", element.avatar);

    let title = document.createElement("h2");

    title.innerText = element.title;

    let description = document.createElement("p");
    description.innerText = element.description;

    let duration = document.createElement("h5");
    duration.innerText = "Duration: " + element.duration + " Mins";
    let price = document.createElement("h3");
    price.innerText = "₹" + element.price;

    let addCart = document.createElement("button");
    addCart.innerText = "Add";

    let count = 0;
    addCart.addEventListener("click", function () {
      count++;
      if (count <= 1) {
        cartDataAdd("cart", element);
        alert("Product  Added  Successfully");
      } else {
        alert("Product Already Added");
      }
    });

    cart.append(image, title, description, duration, price, addCart);
    document.querySelector("#therapy").append(cart);
  });
}

function cartDataAdd(key, value) {
  let arr = JSON.parse(localStorage.getItem(key)) || [];
  arr.push(value);
  localStorage.setItem(key, JSON.stringify(arr));
}
