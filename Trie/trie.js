class Node {
  constructor() {
    this.map = new Map();
    this.end = false;
  }

  setEnd = () => (this.end = true);

  isEnd = () => this.end;
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  add = (input, node = this.root) => {
    // Set the end of word in current node if there are no letters in input
    if (input.length === 0) {
      return node.setEnd();
    }
    // Get the first letter to add it into trie
    const firstChar = input[0];
    // If trie doesn't have the letter add it to the branch
    if (!node.map.has(firstChar)) {
      node.map.set(firstChar, new Node());
      // Return the next letter with the current node
      return this.add(input.substring(1), node.map.get(firstChar));
    }
    // If current node has the letter move to the next node
    else {
      // Return the next letter with the current node
      return this.add(input.substring(1), node.map.get(firstChar));
    }
  };

  isWord = (word) => {
    let node = this.root;
    // Traverse the trie until the end of word, but without checking the last letter
    while (word.length > 1) {
      // If letter doesn't exist return false
      if (!node.map.has(word[0])) {
        return false;
      }
      // If letter exists check the next letter
      else {
        node = node.map.get(word[0]);
        word = word.substring(1);
      }
    }
    // If all the letters exist and if the current node is the last node for the word return true
    return node.map.has(word) && node.map.get(word).isEnd();
  };

  print = () => {
    let words = [];
    const search = (node, string) => {
      // Check if there are other nodes after the current nodes of trie
      if (node.map.size > 0) {
        // Recursively add the letters into string in the child nodes
        // Check each branch after the current node
        for (let letter of node.map.keys()) {
          search(node.map.get(letter), string.concat(letter));
        }
        // If the current node is the last node for the word add it into the words array
        node.isEnd() && words.push(string);
      }
      // Check if there are no more nodes after the current node
      else {
        // If the word has some letters add it into the words array
        string.length > 0 && words.push(string);
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
