const total = document.querySelector('#value');
const inc = document.querySelector("[data-action='increment']");
const dec = document.querySelector("[data-action='decrement']");

let counterValue = 0;
const increment = () => {
  counterValue += 1;
  total.textContent = counterValue;
};

const decrement = () => {
  counterValue -= 1;
  total.textContent = counterValue;
};
inc.addEventListener('click', increment);
dec.addEventListener('click', decrement);
