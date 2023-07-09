const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listOfIngredientsEl = document.getElementById("ingredients");

const ingredientsEL = ingredients.map((ingredient) => {
  let liEl = document.createElement("li");
  liEl.textContent = `${ingredient}`;
  liEl.classList.add("item");
  console.log(liEl);
  return liEl;
});

const fragmentOfDocument = document.createDocumentFragment();

ingredientsEL.forEach((element) => {
  fragmentOfDocument.appendChild(element);
});

listOfIngredientsEl.appendChild(fragmentOfDocument);
