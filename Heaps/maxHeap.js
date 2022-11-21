/**
 * left child: 2 * n + 1
 * right child: 2 * n + 2
 * parent: Math.floor((n-1) / 2)
 * In max heap parent nodes should be higher than the child nodes
 */
class MaxHeap {
  constructor() {
    this.heap = [];
  }
  /**
   * This method adds the new element to the end of heap and rearranges the heap
   * @param {number} num
   */
  insert = (num) => {
    // Add the number to heap's last index
    this.heap.push(num);

    const heapLength = this.heap.length;
    // If heap has 1 element return
    if (heapLength === 1) return;

    // Go down the lines if heap has more than 1 element
    // Rearrange the heap starting from the last index
    let currentIndex = heapLength - 1;
    let parentIndex = Math.floor((currentIndex - 1) / 2);

    // Loop through if the child element is bigger than parent element and if index doesn't reached to root node
    while (currentIndex !== 0 && this.heap[currentIndex] > this.heap[parentIndex]) {
      // Swap the parent and child element
      [this.heap[currentIndex], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[currentIndex]];
      // Keep climbing to the parent nodes
      currentIndex = parentIndex;
      parentIndex = Math.floor((currentIndex - 1) / 2);
    }
  };

  /**
   * This method removes the element from root node puts the last element into root node and rearanges the heap
   * @returns heap length
   */
  remove = () => {
    let heapLength = this.heap.length;
    // If there is no element in the heap return 0
    if (heapLength === 0) return 0;
    // If there is one element in the heap delete that node and return 1
    else if (heapLength === 1) {
      this.heap.pop();
      return 1;
    }
    // If heap has more than 1 element, put the last element into root node and delete the last node
    this.heap[0] = this.heap.pop();

    // Rearrange the heap
    heapLength = this.heap.length;
    this.heapify(heapLength);
    return heapLength;
  };

  heapSort = () => {
    const result = [];
    while (this.heap.length !== 0) {
      result.push(this.heap[0]);
      const element = this.heap.pop();
      if (this.heap.length > 0) this.heap[0] = element;
      this.heapify(this.heap.length);
    }
    this.heap = result;
    return result;
  };

  heapify = (heapLength) => {
    // If there is one element left in the heap then return
    if (this.heap.length === 1) return;

    // Check if there are 2 elements left -- swap them if necessary
    if (this.heap.length === 2) {
      // If parent node is smaller than the child node swap them
      if (this.heap[0] < this.heap[1]) {
        [this.heap[0], this.heap[1]] = [this.heap[1], this.heap[0]];
      }
      return;
    }

    // Rearrange the heap
    let currentIndex = 0;
    let leftIndex = 2 * currentIndex + 1;
    let rightIndex = 2 * currentIndex + 2;

    // Loop through if the child elements exist and bigger than the parent element
    while (this.heap[leftIndex] > this.heap[currentIndex] || this.heap[rightIndex] > this.heap[currentIndex]) {
      // Assign the current node as the biggest
      let biggestNode = this.heap[currentIndex];
      let biggestIndex = currentIndex;

      // If left child is bigger than the biggestNode change the biggestNode and biggestIndex
      if (this.heap[leftIndex] > biggestNode) {
        biggestNode = this.heap[leftIndex];
        biggestIndex = leftIndex;
      }

      // If right child is bigger than the biggestNode change the biggestIndex
      if (this.heap[rightIndex] > biggestNode) {
        biggestIndex = rightIndex;
      }

      // Swap the biggest child with the current node
      [this.heap[currentIndex], this.heap[biggestIndex]] = [this.heap[biggestIndex], this.heap[currentIndex]];

      // Go to the further indexes
      currentIndex = biggestIndex;
      leftIndex = 2 * currentIndex + 1;
      rightIndex = 2 * currentIndex + 2;
    }
  };

  print = () => this.heap;
}

const maxHeap = new MaxHeap();
maxHeap.insert(7);
maxHeap.insert(4);
maxHeap.insert(1);
maxHeap.insert(12);
maxHeap.insert(2);
maxHeap.insert(124);
console.log(maxHeap.print());
maxHeap.remove();
maxHeap.remove();
console.log(maxHeap.print());
maxHeap.insert(124);
maxHeap.insert(47);
maxHeap.insert(34);

console.log(maxHeap.print());
console.log(maxHeap.heapSort());
