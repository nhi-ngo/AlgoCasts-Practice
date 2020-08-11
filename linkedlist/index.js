// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    // shorter syntax
    this.head = new Node(data, this.head);

    // const node = new Node(data, this.head);
    // this.head = node;
  }

  size() {
    let counter = 0;
    let node = this.head;

    while (node) {
      counter++;
      node = node.next;
    }

    return counter;
  }
}

// Example

// const nodeOne = new Node(5);
// const list = new LinkedList();

// list.head = nodeOne;
// list.insertFirst(6);
// list.insertFirst(7);

module.exports = { Node, LinkedList };
