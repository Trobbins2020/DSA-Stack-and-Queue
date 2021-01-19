const Queue = require("./queue");

class dancePairing {
  constructor() {
    this.maleQ = new Queue();
    this.femaleQ = new Queue();
  }

  danceQueue(string) {
    const gender = string[0];
    const name = string.split(" ")[1];
    if (gender === "M") {
      this.maleQ.enqueue(name);
    }
    if (gender === "F") {
      this.femaleQ.enqueue(name);
    }
    if (this.femaleQ.first && this.maleQ.first) {
      const dancerF = this.femaleQ.dequeue();
      const dancerM = this.maleQ.dequeue();
      console.log(
        `Female dancer is ${dancerF}, and the male dancer is ${dancerM}`
      );
    }
  }

  dancerWaiting() {
    let count = 1;
    if (this.femaleQ.first) {
      let currNode = this.femaleQ.first;
      while (currNode.next !== null) {
        count++;
        currNode = currNode.next;
      }
      console.log(`There are ${count} female dancers waiting to dance.`);
    } else if (this.maleQ.first) {
      let currNode = this.maleQ.first;
      while (currNode.next !== null) {
        count++;
        currNode = currNode.next;
      }
      console.log(`There are ${count} male dancers waiting to dance.`);
    }
  }
}

const squareDance = new dancePairing();

squareDance.danceQueue("F Jane");
squareDance.danceQueue("M Frank");
squareDance.danceQueue("M John");
squareDance.danceQueue("M Sherlock");
squareDance.danceQueue("F Madonna");
squareDance.danceQueue("M David");
squareDance.danceQueue("M Christopher");
squareDance.danceQueue("F Beyonce");
squareDance.dancerWaiting();
