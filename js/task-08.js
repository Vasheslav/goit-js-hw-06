const form = document.querySelector(".login-form");
const emailEl = document.querySelector("#email");
const passwordEl = document.querySelector("#password");
const btn = document.querySelector("button");

form.addEventListener("submit", dispatchEmailAndPassword);

function dispatchEmailAndPassword(event) {
  const { email, password } = form.elements;
  event.preventDefault();

  if (email.value.trim() === "" || password.value.trim() === "") {
    alert("eror");
  }

  const data = {
    email: email.value,
    password: password.value,
  };

  console.log(data);
  event.currentTarget.reset();
}
