// Question 1

var postApi = "https://jsonplaceholder.typicode.com/posts";

function start() {
  getPosts();
  handleCreatePost();
}

start();

// Use JavaScript or TypeScript to write a function that fetches data from this API endpoint.
var posts = [];
function getPosts() {
  fetch(postApi)
    .then((response) => {
      return response.json();
    })
    .then((postRespon) => {
      posts = postRespon;
      renderPosts(postRespon);
    });
}

function renderPosts(posts) {
  var listPostBlock = document.querySelector("#list-post");
  var htmls = posts.map((post) => {
    return `
            <li class="post-item-${post.id}">
                <h4 class="title-item-${post.title}">${post.title}</h4>
                <p class="body-item-${post.body}">${post.body}</p>
            </li>
        `;
  });
  listPostBlock.innerHTML = htmls.join("");
}

// Use JavaScript or TypeScript to write a function that creates a new post using this API endpoint.
function handleCreatePost() {
  var createBtn = document.querySelector("#create");
  var fetchBtn = document.querySelector("#fetch");
  createBtn.onclick = () => {
    var title = document.querySelector('input[name="title"]').value;
    var body = document.querySelector('input[name="body"]').value;

    var formData = {
      userId: 1,
      title,
      body,
    };
    fetch(postApi, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        return response.json();
      })
      .then((post) => {
        console.log([...posts, post]);
        renderPosts([...posts, post]);
      });
  };
  fetchBtn.onclick = () => {
    document.querySelector('input[name="title"]').value = "";
    document.querySelector('input[name="body"]').value = "";
    getPosts(renderPosts);
  };
}
