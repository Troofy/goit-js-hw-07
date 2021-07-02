const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

ingredients.forEach((item) => {
  const ingredientsList = document.querySelector('#ingredients');
  const ingredientsItem = document.createElement('li');
  ingredientsItem.textContent = item;
  return ingredientsList.append(ingredientsItem);
});