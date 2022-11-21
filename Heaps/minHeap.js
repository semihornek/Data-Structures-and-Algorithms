/**
 * left child: 2 * n + 1
 * right child: 2 * n + 2
 * parent: Math.floor((n-1) / 2)
 * In min heap parent nodes should be smaller than the child nodes
 */
class MinHeap {
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

    // Loop through if the child element is smaller than parent element and if index doesn't reached to root node
    while (currentIndex !== 0 && this.heap[currentIndex] < this.heap[parentIndex]) {
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
    if (heapLength === 1) return;

    // Check if there are 2 elements left -- swap them if necessary
    if (heapLength === 2) {
      // If parent node is bigger than the child node swap them
      if (this.heap[0] > this.heap[1]) {
        [this.heap[0], this.heap[1]] = [this.heap[1], this.heap[0]];
      }
      return;
    }

    // Rearrange the heap
    let currentIndex = 0;
    let leftIndex = 2 * currentIndex + 1;
    let rightIndex = 2 * currentIndex + 2;

    // Loop through if the child elements exist and smaller than the parent element
    while (this.heap[leftIndex] < this.heap[currentIndex] || this.heap[rightIndex] < this.heap[currentIndex]) {
      // Assign the current node as the smallest
      let smallestIndex = currentIndex;
      let smallestNode = this.heap[currentIndex];

      // If left child is smaller than the smallestNode change the smallestNode and smallestIndex
      if (this.heap[leftIndex] < smallestNode) {
        smallestNode = this.heap[leftIndex];
        smallestIndex = leftIndex;
      }

      // If right child is smaller than the smallestNode change the smallestIndex
      if (this.heap[rightIndex] < smallestNode) {
        smallestIndex = rightIndex;
      }

      // Swap the smallest child with the current node
      [this.heap[currentIndex], this.heap[smallestIndex]] = [this.heap[smallestIndex], this.heap[currentIndex]];

      // Go to the further indexes
      currentIndex = smallestIndex;
      leftIndex = 2 * currentIndex + 1;
      rightIndex = 2 * currentIndex + 2;
    }
  };

  print = () => this.heap;
}

const minHeap = new MinHeap();
minHeap.insert(7);
minHeap.insert(4);
minHeap.insert(1);
minHeap.insert(12);
minHeap.insert(2);
minHeap.insert(124);
console.log(minHeap.print());
minHeap.remove();
minHeap.remove();
console.log(minHeap.print());
minHeap.insert(124);
minHeap.insert(47);
minHeap.insert(34);

console.log(minHeap.print());
console.log(minHeap.heapSort());
