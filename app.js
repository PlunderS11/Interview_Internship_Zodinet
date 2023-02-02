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
    .then((postrespon) => {
      posts = postrespon;
      renderPosts(postrespon);
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

// -----------------------------//-------------------------------------
// Question 2

class Stack {
  constructor() {
    this.items = [];
  }

  // find element by name
  find(value) {
    return this.items.find((item) => item.name == value);
  }

  // add element to the stack
  push(element) {
    return this.items.push(element);
  }

  // remove element from the stack
  pop() {
    if (this.items.length > 0) {
      return this.items.pop();
    }
  }

  // check if the stack is empty
  isEmpty() {
    return this.items.length == 0;
  }

  // the size of the stack
  size() {
    return this.items.length;
  }
}

let stack = new Stack();
stack.push({ id: 1, name: "Luu" });
stack.push({ id: 2, name: "Truong" });
stack.push({ id: 3, name: "Hoang" });
stack.push({ id: 4, name: "Phuc" });
console.log(stack.items);

console.log("find", stack.find("Phuc"));

console.log("isEmpty", stack.isEmpty());

console.log("size", stack.size());

stack.pop();
console.log("pop", stack.items);

console.log("size", stack.size());

console.log(stack.items);

// -----------------------------//-------------------------------------
// Question 3

function sumBetweenNumbers(first, last) {
  var sum = 0;
  for (var i = first; i <= last; i++) {
    sum += i;
  }
  return sum;
}

function doubleSumByCondition(first, last, condition) {
  var result = sumBetweenNumbers(first, last);
  if (condition == true) {
    result = result * 2;
  }
  return result;
}
