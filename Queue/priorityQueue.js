class PriorityQueue {
  constructor() {
    this.pQueue = [];
  }

  print = () => {
    console.log(this.pQueue);
  };

  enqueue = (element) => {
    if (this.isEmpty()) {
      return this.pQueue.push(element);
    }
    for (let index = 0; index < this.pQueue.length; index++) {
      if (element[1] < this.pQueue[index][1]) {
        return this.pQueue.splice(index, 0, element);
      }
    }
    this.pQueue.push(element);
  };

  dequeue = () => {
    return this.pQueue.shift();
  };

  front = () => this.pQueue[0];

  size = () => this.pQueue.length;

  isEmpty = () => this.pQueue.length === 0;
}

var pq = new PriorityQueue();
pq.enqueue(["Beau Carnes", 2]);
pq.enqueue(["Quincy Larson", 3]);
pq.enqueue(["Ewa Mitulska-Wójcik", 1]);
pq.enqueue(["Briana Swift", 2]);
pq.print();
pq.dequeue();
console.log(pq.front());
pq.print();
