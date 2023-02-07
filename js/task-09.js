function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btn = document.querySelector(".change-color");
const colorName = document.querySelector(".color");
const body = document.querySelector("body");

btn.addEventListener("click", changeBodyColor);

function changeBodyColor() {
  body.style.backgroundColor = getRandomHexColor();

  colorName.textContent = getRandomHexColor();
}
