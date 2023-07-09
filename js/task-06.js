const contentInputEl = document.getElementById("validation-input");

contentInputEl.addEventListener("blur", outOfInput);

function outOfInput() {
  const maxLengthContent = Number(contentInputEl.dataset.length);
  const lengthContent = contentInputEl.value.length;

  if (lengthContent === maxLengthContent) {
    contentInputEl.classList.add("valid");
    contentInputEl.classList.remove("invalid");
  } else {
    contentInputEl.classList.add("invalid");
    contentInputEl.classList.remove("valid");
  }
}
