const listOfItemsEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${listOfItemsEl.length}`);

listOfItemsEl.forEach(function (element) {
  let message = `
    Category: ${element.firstElementChild.textContent}
    Elements: ${element.lastElementChild.children.length}
`;
  console.log(message);
});
