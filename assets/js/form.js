const form = document.createElement('form');
const formContainer = document.getElementById('form-container');

const inputUserName = document.createElement('input');
inputUserName.type = 'text';
inputUserName.name = 'userName';
inputUserName.placeholder = 'User Name';

const inputBlogTitle = document.createElement('input');
inputBlogTitle.type = 'text';
inputBlogTitle.name = 'blogTitle';
inputBlogTitle.placeholder = 'Title';

const inputBlogContent = document.createElement('input');
inputBlogContent.type = 'text';
inputBlogContent.name = 'blogContent';
inputBlogContent.placeholder = 'Content';

const buttonSubmit = document.createElement('input');
buttonSubmit.type = 'submit';
buttonSubmit.value = 'Submit';

form.appendChild(inputUserName);
form.appendChild(inputBlogTitle);
form.appendChild(inputBlogContent);
form.appendChild(buttonSubmit);

formContainer.appendChild(form);
