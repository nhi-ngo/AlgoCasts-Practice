// --- Directions
// Implement a Queue data structure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
  constructor() {
    this.pushStack = new Stack();
    this.popStack = new Stack();
  }

  add(element) {
    this.pushStack.push(element);
  }

  remove() {
    if (this.popStack.empty()) {
      while (!this.pushStack.empty()) {
        this.popStack.push(this.pushStack.pop());
      }
    }

    return this.popStack.pop();
  }

  peek() {
    if (this.popStack.empty()) {
      while (!this.pushStack.empty()) {
        this.popStack.push(this.pushStack.pop());
      }
    }

    return this.popStack.peek();
  }

  empty() {
    return this.popStack.empty() && this.pushStack.empty();
  }
}

// class Queue {
//   constructor() {
//     this.first = new Stack();
//     this.second = new Stack();
//   }

//   add(element) {
//     this.first.push(element);
//   }

//   remove() {
//     while (this.first.peek()) {
//       this.second.push(this.first.pop());
//     }

//     const element = this.second.pop();

//     while (this.second.peek()) {
//       this.first.push(this.second.pop());
//     }

//     return element;
//   }

//   peek() {
//     while (this.first.peek()) {
//       this.second.push(this.first.pop());
//     }

//     const element = this.second.peek();

//     while (this.second.peek()) {
//       this.first.push(this.second.pop());
//     }

//     return element;
//   }
// }

module.exports = Queue;
