function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector(".number");
const btnIn = document.querySelector("[data-create]");
const btnReset = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");
console.log(input);

// let amount = input.target.value;

btnIn.addEventListener("click", inputValue);
// btnReset.addEventListener("click", destroyBoxes);

// Залишив для себе! поки не вдається!
