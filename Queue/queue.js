class Queue {
  constructor() {
    this.queue = [];
  }

  print = () => {
    console.log(this.queue);
  };

  enqueue = (value) => {
    this.queue.push(value);
  };

  dequeue = () => {
    return this.queue.shift();
  };

  front = () => this.queue[0];

  size = () => this.queue.length;

  isEmpty = () => this.queue.length === 0;
}

var q = new Queue();
q.enqueue("a");
q.enqueue("b");
q.enqueue("c");
q.print();
q.dequeue();
console.log(q.front());
q.print();
