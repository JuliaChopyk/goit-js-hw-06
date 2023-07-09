const listOfItemsEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${listOfItemsEl.length}`);

listOfItemsEl.forEach(function (element) {
  let message = `
    Category: ${element.querySelector("h2").textContent}
    Elements: ${element.querySelectorAll(".item > ul > li").length}
`;
  console.log(message);
});
