const toggleButton = document.querySelector('#toggle-button');
const body = document.querySelector('body');


let mode = 'light';

body.setAttribute('class', mode);

toggleButton.addEventListener('click', function() {
  if (mode === 'light') {
    mode = 'light'
  } else {
    mode = 'dark';
  }
  body.setAttribute('class', mode);
});