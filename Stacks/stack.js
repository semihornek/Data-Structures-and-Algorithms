class Stack {
  constructor() {
    this.stack = {};
    this.count = 0;
  }

  push = (item) => {
    this.stack[this.count] = item;
    this.count++;
  };

  pop = () => {
    if (this.count === 0) return undefined;

    const item = this.stack[this.count - 1];
    delete this.stack[this.count - 1];
    this.count--;
    return item;
  };

  peek = () => this.stack[this.count - 1];

  size = () => this.count;
}

const myStack = new Stack();

myStack.push(1);
myStack.push(2);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
myStack.push("freeCodeCamp");
console.log(myStack.size());
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
