const nameInputEl = document.getElementById("name-input");
const nameOutputEl = document.getElementById("name-output");

nameInputEl.addEventListener("input", () => {
  const name = nameInputEl.value.trim();

  if (name === "") {
    nameOutputEl.textContent = "Anonymous";
  } else {
    nameOutputEl.textContent = name;
  }
});
