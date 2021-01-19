const Queue = require("./queue");
const DoubleQueue = require("./doubleQueue");

// Implement a peek() function outside of the Queue class that lets you take a peek at what the 1st item in the queue is.
function peek(queue) {
  if (!queue.first) {
    return null;
  }
  return queue.first.value;
}

// Implement a isEmpty() function outside the Queue class that allows you to check if the queue is empty or not
function isEmpty(queue) {
  return queue.first === null;
}

// Implement a display() function outside of the Queue class that lets you display what's in the queue.
function display(queue) {
  let curNode = queue.first;
  if (curNode === null) {
    console.log("Empty Queue");
  }
  while (curNode.next !== null) {
    console.log(curNode.value);
    curNode = curNode.next;
  }
  console.log(curNode.value);
}

// Create a queue called starTrekQ and add Kirk, Spock, Uhura, Sulu, and Checkov to the queue.
// let starTrekQ = new Queue();
// starTrekQ.enqueue("Kirk");
// starTrekQ.enqueue("Spock");
// starTrekQ.enqueue("Uhara");
// starTrekQ.enqueue("Sulu");
// starTrekQ.enqueue("Checkov");
// display(starTrekQ);

// Remove Spock from the queue and display the resulting queue.
// starTrekQ.dequeue();
// starTrekQ.dequeue();
// display(starTrekQ);

const starTrekQ = new DoubleQueue();
starTrekQ.enqueue("Kirk");
starTrekQ.enqueue("Spock");
starTrekQ.enqueue("Uhara");
starTrekQ.enqueue("Sulu");
starTrekQ.enqueue("Checkov");
// display(starTrekQ);

starTrekQ.dequeue();
starTrekQ.dequeue();
// display(starTrekQ);
// console.log(peek(starTrekQ));

function ophidianBankFun(queue) {
  while (queue.first) {
    let person = queue.dequeue();
    let random = Math.random();
    if (random < 0.25) {
      queue.enqueue(person);
      console.log(
        `${person}'s paperwork isn't quite right, and it's back to the end of the queue`
      );
    } else {
      console.log(`${person} Served`);
    }
  }
  console.log(`Served Everybody`);
}

const ophidianBank = new Queue();
ophidianBank.enqueue("Person A");
ophidianBank.enqueue("Person B");
ophidianBank.enqueue("Person C");
ophidianBank.enqueue("Person D");
ophidianBank.enqueue("Person E");
ophidianBank.enqueue("Person F");
ophidianBankFun(ophidianBank);
