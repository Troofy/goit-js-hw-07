const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const newIngredients = document.querySelector('#ingredients');

const newItem = elem => {
  const itemEl = document.createElement('li');
  itemEl.textContent = elem;
  return itemEl;
};
const ingredientsArray = ingredients.map(ingredient => newItem(ingredient));
newIngredients.append(...ingredientsArray);

