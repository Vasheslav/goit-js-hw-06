const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listById = document.querySelector("#ingredients");

const listElement = ingredients.map((el) => {
  const liEl = document.createElement("li");
  liEl.textContent = el;
  liEl.classList.add("item");

  return liEl;
});

listById.append(...listElement);
