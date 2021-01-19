const Stack = require("./stack");

// 8. Queue implementation using a stack
class queueStack extends Stack {
  constructor() {
    super();
    this.first = this.top;
    this.last = null;
  }

  enqueue(item) {
    if (this.first === null) {
      this.push(item);
      this.last = this.top;
    } else {
      const tempStack = new Stack();
      while (this.top) {
        tempStack.push(this.pop());
      }
      tempStack.push(item);
      while (tempStack.top) {
        this.push(tempStack.pop());
      }
      let curNode = this.top;
      while (curNode.next !== null) {
        curNode = curNode.next;
      }
      this.last = curNode;
    }
    this.first = this.top;
  }

  dequeue() {
    this.pop();
    this.first = this.top;
  }
}

module.exports = queueStack;
