const container = document.querySelector('body');
const button= document.querySelector('#emoji-button');

// 


button.addEventListener('click', function() {
  if (button.dataset.mode === 'light') {
      button.dataset.mode= 'dark';
      button.textContent = '☀️';
      container.dataset.mode= 'dark';
        
  } else {
    button.dataset.mode = 'light';
    button.textContent = '🌙';
    container.dataset.mode= 'light';
  }

  document.documentElement.dataset.mode= button.dataset.mode;
});
