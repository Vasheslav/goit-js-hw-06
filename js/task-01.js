const listCategories = document.querySelector("#categories");
const categoriesItemsByClass = listCategories.children;
console.log("Number of categories:", categoriesItemsByClass.length);

//Другий варіант!

// const categoriesItemsByClass = document.querySelectorAll(".item");
// console.log("Number of categories:", categoriesItemsByClass.length);

const firstItemByClass = categoriesItemsByClass[0];
const secondItemByClass = categoriesItemsByClass[1];
const thirdItemByClass = categoriesItemsByClass[2];

const titleFirstItem = categoriesItemsByClass[0].querySelector("h2");
const listFirstItem = categoriesItemsByClass[0].querySelector("ul");
console.log("Category:", titleFirstItem.textContent);
console.log("Elements:", listFirstItem.children.length);

const titleSecondItem = categoriesItemsByClass[1].querySelector("h2");
const listSecondItem = categoriesItemsByClass[1].querySelector("ul");
console.log("Category:", titleSecondItem.textContent);
console.log("Elements:", listSecondItem.children.length);

const titleThirdItem = categoriesItemsByClass[2].querySelector("h2");
const listThirdItem = categoriesItemsByClass[2].querySelector("ul");
console.log("Category:", titleThirdItem.textContent);
console.log("Elements:", listThirdItem.children.length);
