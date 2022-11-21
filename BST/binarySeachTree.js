class Node {
  constructor(data, left = null, right = null) {
    (this.data = data), (this.left = left), (this.right = right);
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  add = (data) => {
    // If tree is empty insert the root node
    if (this.root === null) {
      this.root = new Node(data);
      return;
    }
    // Else, find the right place to add the node in BST
    else {
      const searchTree = (node) => {
        // Check if data is smalller than the current node
        if (data < node.data) {
          // Add data if left child of the current node is empty
          if (node.left === null) {
            node.left = new Node(data);
            return;
          }
          // Move down to left subtree if left child has data in it
          else {
            return searchTree(node.left);
          }
        }
        // Check if data is bigger than the current node
        else if (data > node.data) {
          // Add data if right child of the current node is empty
          if (node.right === null) {
            node.right = new Node(data);
            return;
          }
          // Move down to right subtree if right child has data in it
          else {
            return searchTree(node.right);
          }
        }
        // Check if data is equal to the current node
        else {
          return null;
        }
      };
      // Start adding to tree from the root
      return searchTree(this.root);
    }
  };

  insert = (data) => {
    const node = new Node(data);
    if (this.root === null) {
      this.root = node;
      return;
    }

    let currentNode = this.root;
    while (currentNode !== null) {
      // Check if data is smaller than the parent node
      if (node.data < currentNode.data) {
        // Add data if left child of the current node is empty
        if (currentNode.left === null) {
          currentNode.left = node;
          break;
        }
        // Move down to left subtree if left child has data in it
        currentNode = currentNode.left;
      }
      // Check if data is bigger than the parent node
      else if (node.data > currentNode.data) {
        // Add data if right child of the current node is empty
        if (currentNode.right === null) {
          currentNode.right = node;
          break;
        }
        // Move down to right subtree if right child has data in it
        currentNode = currentNode.right;
      }
      // Check if data is same as the parent node
      else break;
    }
  };

  findMin = () => {
    let currentNode = this.root;
    // Traverse to the left side of the BST until the left child is empty
    while (currentNode.left !== null) {
      currentNode = currentNode.left;
    }
    return currentNode.data;
  };

  findMax = () => {
    let currentNode = this.root;
    // Traverse to the right side of the BST until the right child is empty
    while (currentNode.right !== null) {
      currentNode = currentNode.right;
    }
    return currentNode.data;
  };

  find = (data) => {
    let currentNode = this.root;
    // Traverse the tree until finding the data
    while (currentNode !== null) {
      // Return the current node if data is equal to the data in this node
      if (data === currentNode.data) {
        return currentNode;
      }
      // Move down to the left subtree if data is smaller than the data in the current node
      else if (data < currentNode.data) {
        currentNode = currentNode.left;
      }
      // Move down to the right subtree if data is bigger than the data in the current node
      else {
        currentNode = currentNode.right;
      }
    }
    // Return null if data is not present in the tree
    return null;
  };

  isPresent = (data) => {
    let currentNode = this.root;
    // Traverse the tree until finding the data
    while (currentNode !== null) {
      // Return true if data is equal to the data in the current node
      if (data === currentNode.data) {
        return true;
      }
      // Move down to the left subtree if data is smaller than the data in the current node
      else if (data < currentNode.data) {
        currentNode = currentNode.left;
      }
      // Move down to the right subtree if data is bigger than the data in the current node
      else {
        currentNode = currentNode.right;
      }
    }
    // Return false if data is not present in the tree
    return false;
  };

  remove = (data) => {
    /**
     *
     * @param {Node} node Current searched node
     * @param {int} data Data that is intended to be deleted from the BST
     * @returns The changed node
     */
    const removeNode = (node, data) => {
      // If current node is null return null
      if (node === null) {
        return null;
      }
      // Check if the removed data is found
      if (node.data === data) {
        // If current node doesn't have any children return null
        if (node.left === null && node.right === null) {
          return null;
        }
        // If current node has only a left child return the left child
        if (node.right === null) {
          return node.left;
        }
        // If current node has only a right child return the right child
        if (node.left === null) {
          return node.right;
        }
        // Check for the current node having two children
        // For BST create a temp node go to the right subtree and find the smallest node in that right subtree
        let tempNode = node.right;
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }
        // Replace the current node's data with the smallest data found
        node.data = tempNode.data;
        // We have to delete the node that we found to change our intended node
        // Change the right subtree of the current node to arrange the tree correctly (no action needed for the left subtree)
        node.right = removeNode(node.right, tempNode.data);
        return node;
      }
      // If data is smaller than the current node's data traverse and change the left subtree
      else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      }
      // If data is bigger than the current node's data traverse and change the right subtree
      else {
        node.right = removeNode(node.right, data);
        return node;
      }
    };
    this.root = removeNode(this.root, data);
  };

  isBalanced = (node = this.root) => {
    if (node === null) {
      return true;
    }

    let leftLength = this.maxDepth(node.left);
    let rightLength = this.maxDepth(node.right);

    if (Math.abs(leftLength - rightLength) <= 1 && this.isBalanced(node.left) && this.isBalanced(node.right)) {
      return true;
    }

    return false;
  };

  maxDepth = (node = this.root) => {
    // If root is null return 0
    if (node === null) {
      return 0;
    }

    let maxLeft = this.maxDepth(node.left);
    let maxRight = this.maxDepth(node.right);

    return Math.max(maxLeft, maxRight) + 1;
  };

  minDepth = (node = this.root) => {
    // If root is null return 0
    if (node === null) {
      return 0;
    }

    let minLeft = this.minDepth(node.left);
    let minRight = this.minDepth(node.right);

    // skewed tree
    if (minLeft === 0 || minRight === 0) {
      return Math.max(minLeft, minRight) + 1;
    }

    return Math.min(minLeft, minRight) + 1;
  };

  inOrder = () => {
    if (this.root === null) {
      return null;
    }
    const result = [];
    const traverseOrder = (node) => {
      node.left && traverseOrder(node.left);
      result.push(node.data);
      node.right && traverseOrder(node.right);
    };
    traverseOrder(this.root);
    return result;
  };

  preOrder = () => {
    if (this.root === null) {
      return null;
    }
    const result = [];
    const traverseOrder = (node) => {
      result.push(node.data);
      node.left && traverseOrder(node.left);
      node.right && traverseOrder(node.right);
    };
    traverseOrder(this.root);
    return result;
  };

  postOrder = () => {
    if (this.root === null) {
      return null;
    }
    const result = [];
    const traverseOrder = (node) => {
      node.left && traverseOrder(node.left);
      node.right && traverseOrder(node.right);
      result.push(node.data);
    };
    traverseOrder(this.root);
    return result;
  };

  levelOrder = () => {
    const result = [];
    const queue = [];
    let node = this.root;

    if (node !== null) {
      queue.push(node);

      while (queue.length > 0) {
        node = queue.shift();
        result.push(node.data);
        if (node.left !== null) {
          queue.push(node.left);
        }
        if (node.right !== null) {
          queue.push(node.right);
        }
      }
    }
    return result;
  };
}

const bst = new BST();
// bst.add(4);
// bst.add(2);
// bst.add(6);
// bst.add(1);
// bst.add(3);
// bst.add(5);
// bst.add(7);
// bst.remove(4);
// console.log(bst.findMin());
// console.log(bst.findMax());
// bst.remove(7);
// console.log(bst.findMax());
// console.log(bst.isPresent(4));

bst.insert(9);
bst.insert(4);
bst.insert(17);
bst.insert(3);
bst.insert(6);
bst.insert(22);
bst.insert(5);
bst.insert(7);
bst.insert(20);
console.log(bst.minDepth());
console.log(bst.maxDepth());
console.log(bst.isBalanced());
bst.insert(10);
console.log(bst.minDepth());
console.log(bst.maxDepth());
console.log(bst.isBalanced());
console.log("inOrder: " + bst.inOrder());
console.log("preOrder: " + bst.preOrder());
console.log("postOrder: " + bst.postOrder());
console.log("levelOrder: " + bst.levelOrder());
