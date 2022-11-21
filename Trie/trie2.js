class TNode {
  constructor() {
    this.map = new Map();
    this.end = false;
  }

  setEnd = () => (this.end = true);

  isEnd = () => this.end;
}

class Trie {
  constructor() {
    this.root = new TNode();
  }

  add = (input) => {
    if (input.length === 0) return;

    let node = this.root;

    while (input.length !== 0) {
      const firstChar = input[0];
      // If trie doesn't have the letter add it to the branch and move to the next node
      if (!node.map.has(firstChar)) {
        const newNode = new TNode();
        node.map.set(firstChar, newNode);
        // Move to the next node
        node = newNode;
      }
      // If current node has the letter move to the next node
      else {
        node = node.map.get(firstChar);
      }
      input = input.substring(1);
      input.length === 0 && node.setEnd();
    }
  };

  isWord = (word) => {
    if (word.length === 0) return false;
    let node = this.root;

    while (word.length > 1) {
      const firstChar = word[0];
      if (!node.map.has(firstChar)) {
        return false;
      } else {
        node = node.map.get(firstChar);
      }
      word = word.substring(1);
    }

    return node.map.has(word) && node.map.get(word).isEnd();
  };

  print = () => {
    if (this.root === null) return null;
    const words = [];
    const search = (node, word) => {
      // Check if there are other nodes after the current nodes of trie
      if (node.map.size !== 0) {
        // Recursively add the letters into word in the child nodes
        // Check each branch after the current node
        for (const [letter, nextNode] of node.map.entries()) {
          search(nextNode, word.concat(letter));
        }
        // If the current node is the last node for the word add it into the words array
        node.isEnd() && words.push(word);
      }
      // Check if there are no more nodes after the current node
      else {
        // If the word has some letters add it into the words array
        word.length > 0 && words.push(word);
        return;
      }
    };
    search(this.root, "");
    return words.length > 0 ? words : null;
  };
}

const myTrie = new Trie();
myTrie.add("ball");
myTrie.add("bat");
myTrie.add("doll");
myTrie.add("dork");
myTrie.add("do");
myTrie.add("dorm");
myTrie.add("send");
myTrie.add("sense");
console.log(myTrie.isWord("doll"));
console.log(myTrie.isWord("dor"));
console.log(myTrie.isWord("dorf"));
console.log(myTrie.print());
