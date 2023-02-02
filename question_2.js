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
