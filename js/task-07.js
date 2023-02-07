const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

input.addEventListener("input", changeTextFontSize);

function changeTextFontSize(event) {
  text.style.fontSize = event.target.value + "px";
}
