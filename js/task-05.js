const input = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

input.addEventListener("input", changeNameOutput);

function changeNameOutput(event) {
  // if (input.value === "") {
  //   nameOutput.textContent = "Anonymous";
  // }
  // nameOutput.textContent = event.currentTarget.value;

  //  Чому не працює через if?

  nameOutput.textContent =
    input.value == "" ? "Anonymous" : event.currentTarget.value;
}
