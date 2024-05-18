const postCount= document.querySelector('#post-count');
const postList= document.querySelector('#posts');
const submitButton= document.querySelector('#submit-button');
const postInput= document.querySelector('.post-text');
const userName= document.querySelector('#user-name');
const blogTitle= document.querySelector('#blog-title');
const blogContent= document.querySelector('#blog-content');

let blogPosts = [];

function storePosts() {
  const currentPost = {
    userName: userName.value.trim(),
    blogTitle: blogTitle.value.trim(),
    blogContent: blogContent.value.trim(),
  };
  blogPosts.push(currentPost);
  localStorage.setItem('blogPosts', JSON.stringify(blogPosts))
};

function renderPosts() {
  postList.innerHTML = '';
  postCount.textContent = blogPosts.length;


  const lastPost = JSON.parse(localStorage.getItem('currentPost'));

if(lastPost !== null) {
  document.getElementById('saved-name').innerHTML = lastPost.userName;
  document.getElementById('saved-title').innerHTML = lastPost.blogTitle;
  document.getElementById('saved-content').innerHTML = lastPost.blogContent;
};



  blogPosts.forEach((post, index) => {
    const li = document.createElement('li');
    li.textContent= `${post.userName}: ${post.blogTitle} ${post.blogContent}`
    li.setAttribute('data-index', index);
    postList.appendChild(li);
  })
};

function init() {
  const storedPosts = JSON.parse(localStorage.getItem('blogPosts'));
  if (storedPosts !== null) {
    blogPosts = storedPosts;
  }
  renderPosts();
}



submitButton.addEventListener('click', function(event){
  event.preventDefault();
  const postText= postInput.value.trim();

  if (postText === '') {
    return; 
  }
  const currentPost = {
    userName: userName.value.trim(),
    blogTitle: blogTitle.value.trim(),
    blogContent: postText,
  }
  blogPosts.push(currentPost);
  storePosts();
  postInput.value = '';

  renderPosts();
})

init();