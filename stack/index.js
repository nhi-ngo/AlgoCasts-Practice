// --- Directions
// Create a stack data structure.  The stack
// should be a class with methods 'push', 'pop', and
// 'peek'.  Adding an element to the stack should
// store it until it is removed.
// --- Examples
//   const s = new Stack();
//   s.push(1);
//   s.push(2);
//   s.pop(); // returns 2
//   s.pop(); // returns 1

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
class Stack {
  constructor() {
    this.data = {};
    this.count = 0;
  }

  push(element) {
    this.data[this.count] = element;
    this.count++;
  }

  pop() {
    const top = this.data[this.count - 1];
    delete this.data[this.count - 1];
    this.count--;
    return top;
  }

  peek() {
    return this.data[this.count - 1];
  }
}

module.exports = Stack;
