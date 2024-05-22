// // WHEN I enter try to submit a form without a username, title, or content,
// THEN I am presented with a message that prompts me to complete the form.




//For when submitting the form, the page redirects to the posts page with the rendered posts. But when all fields are not inputted in the form there is an error message that appears to complete the form.
submitButton.addEventListener('click', function(event) {
  event.preventDefault();

  const form =  document.querySelector('#post-form');
  const errorMessage = document.querySelector('#errorMessage');

  if (!form.userName.value || !form.blogTitle.value || !form.blogContent.value) {
    errorMessage.textContent = 'Please fill in all required fields.';
  } else {
    window.location.href = '../../blog.html';
    storePosts();
    renderPosts();
  }
})