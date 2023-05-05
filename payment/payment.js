let allCart = JSON.parse(localStorage.getItem("cart")) || [];

let payment = document.querySelector("form");
let Bag = JSON.parse(localStorage.getItem("pay")) || [];
payment.addEventListener("submit", function (event) {
  event.preventDefault();
  let obj = {
    email: payment.Email.value,
    mobile: payment.mobile.value,
    pass: payment.pass.value,
  };
  Bag.push(obj);
  if (obj.email == "" || obj.mobile == "" || obj.pass == "") {
    alert(" please  fill correct card  details");
  } else {
    localStorage.setItem("pay", JSON.stringify(Bag));
    alert("Payment Successful");

    window.location.href = "/index.html";
  }
});
