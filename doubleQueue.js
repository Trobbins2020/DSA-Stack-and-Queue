class _Node {
  constructor(value, prev) {
    this.value = value;
    this.prev = prev;
    this.next = null;
  }
}

// 7. Create a queue class using Doubly linked List
class DoubleQueue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    const newNode = new _Node(data, this.last);
    if (this.first === null) this.first = newNode;
    if (this.last) this.last.next = newNode;
    this.last = newNode;
  }

  dequeue() {
    if (!this.first) return null;
    const firstNode = this.first;
    if (firstNode.next === null) this.last = null;
    else firstNode.next.prev = null;
    this.first = firstNode.next;
    return firstNode.value;
  }
}

module.exports = DoubleQueue;
