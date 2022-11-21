class HashTable {
  constructor() {
    this.size = 14;
    this.table = new Array(this.size);
  }

  _hash = (string) => {
    let hash = 0;
    for (let char of string) {
      hash += char.charCodeAt(0);
    }
    return hash % this.size;
  };

  print = () => {
    console.log(this.table);
  };

  add = (key, value) => {
    const index = this._hash(key);
    // Check if there is no entry in the given index
    if (this.table[index] === undefined) {
      this.table[index] = [[key, value]];
    }
    // Check if there is an entry in the given index
    else {
      for (let i = 0; i < this.table[index].length; i++) {
        // If key already exists in the hash table, overwrite the value correspond to the key in hash table
        if (key === this.table[index][i][0]) {
          this.table[index][i][1] = value;
          return;
        }
      }
      // Multiple entries in one bucket
      // If key doesn't exist in the hash table, but the index is the same add new entry to the corresponding index in hashtable
      this.table[index].push([key, value]);
    }
  };

  remove = (key) => {
    const index = this._hash(key);
    if (this.table[index] === undefined) return;

    // If there is single entry in the bucket delete the full entry with the given index
    if (this.table[index].length === 1 && key === this.table[index][0][0]) {
      delete this.table[index];
      return;
    }
    // If there is more than one entry in the bucket delete the entry with the corresponding key
    for (let i = 0; i < this.table[index].length; i++) {
      if (key === this.table[index][i][0]) {
        this.table[index].splice(i, 1);
        break;
      }
    }
  };

  lookup = (key) => {
    const index = this._hash(key);
    // If there is no entry in the table return undefined
    if (this.table[index] === undefined) {
      return undefined;
    }

    for (let i = 0; i < this.table[index].length; i++) {
      if (key === this.table[index][i][0]) {
        return this.table[index][i][1];
      }
    }
  };
}

let ht = new HashTable();
console.log(ht._hash("quincy"));

ht.add("beau", "person");
ht.add("fido", "dog");
ht.add("rex", "dinosour");
ht.add("tux", "penguin");
ht.add("kazim", "cat");
ht.add("efsane", "mouse");
ht.add("semati", "tiger");
ht.add("semati", "lion");

ht.remove("rex");
console.log(ht.lookup("tux"));
ht.print();
