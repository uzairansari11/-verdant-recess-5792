let allCart = JSON.parse(localStorage.getItem("cart")) || [];
let payment = document.querySelector("form");
let Bag = JSON.parse(localStorage.getItem("pay")) || [];

payment.addEventListener("submit", function (event) {
  event.preventDefault();

  let email = payment.elements["cardNumber"].value;
  let mobile = payment.elements["cardHolderName"].value;
  let pass = payment.elements["otp"].value;

  if (email === "" || mobile === "" || pass === "") {
    alert("Please fill in all the card details correctly.");
  } else {
    let obj = {
      email: email,
      mobile: mobile,
      pass: pass,
    };

    Bag.push(obj);
    localStorage.setItem("pay", JSON.stringify(Bag));

    alert("Payment Successful");
    window.location.href = "/index.html";
  }
});
