const categoriesItemsByClass = document.querySelectorAll(".item");
console.log("Number of categories:", categoriesItemsByClass.length);

const items = [...categoriesItemsByClass]
  .map(
    (item) =>
      `Category: ${item.children[0].textContent}
        Elements: ${item.children[1].children.length}`
  )
  .join("\n");

console.log(items);
