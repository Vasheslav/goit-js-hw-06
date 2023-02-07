const input = document.querySelector("#validation-input");
const dataInput = document.querySelector("input[data-length='6']");

console.log(dataInput.dataset.length);

input.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  console.log(dataInput);
  if (event.currentTarget.value.length == dataInput.dataset.length) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else if (
    event.currentTarget.textContent.length !== dataInput.dataset.length
  ) {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
}
