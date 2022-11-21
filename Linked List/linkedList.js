class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  size = () => this.length;

  head = () => this.head;

  add = (element) => {
    const node = new Node(element);
    // If linked list is empty add new node to the start
    if (this.head === null) {
      this.head = node;
    }
    // If there are elements in linked list traverse to the end of the list and add element there
    else {
      let currentNode = this.head;

      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }
      // Point the last element's link to the node that we want to add to the list
      currentNode.next = node;
    }
    this.length++;
  };

  remove = (element) => {
    let isElementDeleted = false;
    // Check if the element that we want to remove is head element
    if (this.head === element) {
      this.head = this.head.next;
      isElementDeleted = true;
    }
    // Check if the element that we want to delete is somewhere inside linked list that is not the head node
    else {
      let currentNode = this.head;
      let previousNode = null;

      while (currentNode.element !== element) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }

      // Point the next link of previous node to our current node's next link to delete the element
      previousNode.next = currentNode.next;
      isElementDeleted = true;
    }
    this.length--;
    if (isElementDeleted) return element;
  };

  indexOf = (element) => {
    let currentNode = this.head;
    let index = 0;

    while (currentNode !== null) {
      if (currentNode.element === element) {
        return index;
      }
      currentNode = currentNode.next;
      index++;
    }
  };

  elementAt = (index) => {
    if (index < 0 || index > this.size() - 1) {
      return null;
    }

    let currentNode = this.head;
    let currentIndex = 0;
    while (currentIndex < index) {
      currentNode = currentNode.next;
      currentIndex++;
    }
    return currentNode.element;
  };

  addAt = (index, element) => {
    if (index < 0 || index > this.size() - 1) {
      return null;
    }
    const node = new Node(element);

    // Add to the head of the linked list
    if (index === 0) {
      node.next = this.head;
      this.head = node;
    }
    // Add to the middle or end of the linked list
    else {
      let currentNode = this.head;
      let previousNode = null;
      let currentIndex = 0;

      while (currentIndex < index) {
        previousNode = currentNode;
        currentNode = currentNode.next;
        currentIndex++;
      }

      previousNode.next = node;
      node.next = currentNode;
    }
    this.length++;
  };

  removeAt = (index) => {
    if (index < 0 || index > this.size() - 1) {
      return null;
    }

    let deletedElement = null;
    // Delete the first element
    if (index === 0) {
      this.head = this.head.next;
    }
    // Delete from middle or end of the linked list
    else {
      let currentNode = this.head;
      let previousNode = null;
      let currentIndex = 0;

      while (currentIndex < index) {
        previousNode = currentNode;
        currentNode = currentNode.next;
        currentIndex++;
      }

      // Point the next link of previous node to our current node's next link to delete the element
      previousNode.next = currentNode.next;

      deletedElement = currentNode.element;
    }
    this.length--;
    return deletedElement;
  };
}

const conga = new LinkedList();
conga.add("Kitten");
conga.add("Puppy");
conga.add("Dog");
conga.add("Cat");
conga.add("Fish");
// conga.remove("Fish");

console.log("Size: " + conga.size());
console.log(conga.removeAt(3));
console.log(conga.elementAt(3));
console.log(conga.indexOf("Puppy"));
console.log("Size: " + conga.size());
console.log(conga.remove("Dog"));
console.log("Size: " + conga.size());
conga.addAt(2, "Lion");
console.log(conga.indexOf("Lion"));
console.log("Size: " + conga.size());
