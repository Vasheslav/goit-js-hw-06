const addBtn = document.querySelector('[data-action="increment"]');
const removeBtn = document.querySelector('[data-action="decrement"]');
const counterEl = document.querySelector("#value");

const count = {
  number: 0,

  add() {
    console.log(this);
    this.number += 1;
  },

  remove() {
    this.number -= 1;
  },
};

addBtn.addEventListener("click", function () {
  count.add();
  counterEl.textContent = count.number;
});

removeBtn.addEventListener("click", function () {
  count.remove();
  counterEl.textContent = count.number;
});
