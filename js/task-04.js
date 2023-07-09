let counterValue = 0;
const decrementValue = () => (counterValue -= 1);
const incrementValue = () => (counterValue += 1);

const decrBtn = document.querySelector('button[data-action="decrement"]');
const incrBtn = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector("#value");

decrBtn.addEventListener("click", function () {
  decrementValue();
  valueEl.textContent = counterValue;
});
incrBtn.addEventListener("click", function () {
  incrementValue();
  valueEl.textContent = counterValue;
});

// 5 this 1.30
