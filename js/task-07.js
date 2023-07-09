const inputEl = document.getElementById("font-size-control");
const contentSpanEl = document.getElementById("text");

inputEl.addEventListener("input", changeSizeFont);

function changeSizeFont() {
  contentSpanEl.style.fontSize = inputEl.value + "px";
}
