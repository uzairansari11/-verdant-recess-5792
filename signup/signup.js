let form = document.querySelector("form");
let data = JSON.parse(localStorage.getItem("masai")) || [];
form.addEventListener("submit", function (event) {
  event.preventDefault();
  let obj = {
    email: form.Email.value,
    mobile: form.mobile.value,
    pass: form.pass.value,
  };
  data.push(obj);

  if (obj.email == "" || obj.mobile == "" || obj.pass == "") {
    alert("Kindly fill all the details!");
  } else {
    localStorage.setItem("masai", JSON.stringify(data));
    alert("You are a CULT now");
    window.location.href = "/login/login.html"
  }
});
