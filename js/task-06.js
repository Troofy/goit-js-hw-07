const input = document.querySelector('#validation-input');
const dataAttribute = Number.parseInt(input.getAttribute('data-length'));
input.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
  if (dataAttribute === event.currentTarget.value.length) {
    input.classList.add('valid');
    input.classList.remove('invalid');
  } else {
    input.classList.add('invalid');
    input.classList.remove('valid');
  }
}