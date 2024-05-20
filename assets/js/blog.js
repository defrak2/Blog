const postCount= document.querySelector('#post-count');
const postList= document.querySelector('#posts');
const submitButton= document.querySelector('#submit-button');
const postInput= document.querySelector('.post-text');
// const userName= document.querySelector('#user-name');
// const blogTitle= document.querySelector('#blog-title');
// const blogContent= document.querySelector('#blog-content');

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

for(let i = 0; i < blogPosts.length; i++) {
  const post= blogPosts[i];

  const blogPost = document.createElement('div');
  blogPost.textContent = '';
  blogPost.setAttribute('data-index', i);

  const userName = document.createElement('h7');
  userName.textContent = `Published by: ${post.userName}`;
  userName.setAttribute('data-index', i);
  userName.classList.add('user-name')

  const title = document.createElement('h3');
  title.textContent = `${post.blogTitle}`;
  title.setAttribute('data-index', i);
  title.classList.add('title');

  const content = document.createElement('p');
  content.textContent = `${post.blogContent}`;
  content.setAttribute('data-index', i);
  content.classList.add('content');


  blogPost.appendChild(title);
  blogPost.appendChild(content);
  blogPost.appendChild(userName);
  
  postList.appendChild(blogPost);
}


// if(lastPost !== null) {
//   document.getElementById('saved-name').innerHTML = lastPost.userName;
//   document.getElementById('saved-title').innerHTML = lastPost.blogTitle;
//   document.getElementById('saved-content').innerHTML = lastPost.blogContent;
// };



  // blogPosts.forEach((post, index) => {
  //   const li = document.createElement('li');
  //   li.textContent= `${post.userName}: ${post.blogTitle} ${post.blogContent}`
  //   li.setAttribute('data-index', index);
  //   postList.appendChild(li);
  // })
};

function init() {
  const storedPosts = JSON.parse(localStorage.getItem('blogPosts'));
  if (storedPosts !== null) {
    blogPosts = storedPosts;
  }
  renderPosts();
}



// submitButton.addEventListener('click', function(event){
//   event.preventDefault();
//   const element= event.target;

//   if (element.matches('button') ===true) {
//     const index = element.parentElement.getAttribute('data-index');
//     blogPosts.splice(index, 1);

//   storePosts();
//   renderPosts();
//   }}
// )

init();