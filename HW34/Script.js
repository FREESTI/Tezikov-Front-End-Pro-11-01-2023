const myInput = document.getElementById('myInput');

myInput.addEventListener('focus', () => {
  const div = document.createElement('div');
  div.textContent = 'ну... Я жду.';
  document.body.appendChild(div);
});

myInput.addEventListener('blur', () => {
  const div = document.querySelector('div');
  if (div) {
    div.remove();
  }
});









