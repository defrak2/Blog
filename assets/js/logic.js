const container = document.querySelector('body');
const button= document.querySelector('#emoji-button');
const header = document.querySelector('header');
const blogPost = document.querySelector('.blog-post')
const formContainer= document.querySelector('#form-container');
// 


button.addEventListener('click', function() {
  if (button.dataset.mode === 'light') {
      button.dataset.mode= 'dark';
      button.textContent = '☀️';
      container.dataset.mode= 'dark';
      header.dataset.mode= 'dark';
      blogPost.dataset.mode= 'dark';
        
  } else {
    button.dataset.mode = 'light';
    button.textContent = '🌙';
    container.dataset.mode= 'light';
    header.dataset.mode= 'light';
    blogPost.dataset.mode= 'light';

  }

  document.documentElement.dataset.mode= button.dataset.mode;
});
