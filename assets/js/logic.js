const themeSwitcher = document.querySelector('button');
const container = document.querySelector('body');

let mode = 'light';

themeSwitcher.addEventListener('click', function(){
  if (mode === 'light') {
    mode = 'dark';
    container.setAttribute('class', 'dark');
  }
  else {
    mode = 'light';
    container.setAttribute('class', 'light');
  }
}
);