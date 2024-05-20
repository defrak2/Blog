// // WHEN I enter try to submit a form without a username, title, or content,
// THEN I am presented with a message that prompts me to complete the form.

//WHEN the form submits,
//THEN I am redirected to the posts page.


submitButton.addEventListener('click', function(event) {
  event.preventDefault();
  window.location.href = '../../blog.html';
})