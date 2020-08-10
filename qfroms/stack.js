class Stack {
  constructor() {
    this.storage = {}; // { a:0, b:1 }
    this.size = 0;
  }

  push(element) {
    this.storage[this.size] = element;
    this.size++;
  }

  pop() {
    const top = this.storage[this.size - 1];
    delete this.storage[this.size - 1];
    this.size--;
    return top;
  }

  peek() {
    return this.storage[this.size - 1];
  }

  getSize() {
    return this.size;
  }

  empty() {
    return this.size === 0;
  }
}

// class Stack {
//   constructor() {
//     this.data = [];
//   }

//   push(element) {
//     this.data.push(element);
//   }

//   pop() {
//     return this.data.pop();
//   }

//   peek() {
//     return this.data[this.data.length - 1];
//   }
// }

module.exports = Stack;
