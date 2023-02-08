const input = document.querySelector("#validation-input");
const dataInput = document.querySelector("input[data-length='6']");

const inputLength = Number(dataInput.dataset.length);

input.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  if (event.currentTarget.value.length == inputLength) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else if (event.currentTarget.textContent.length !== inputLength) {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
}
