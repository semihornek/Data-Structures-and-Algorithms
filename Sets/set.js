class MySet {
  constructor() {
    this.set = [];
  }

  // this method will check for the presence of an element and return true or false
  has = (item) => this.set.indexOf(item) !== -1;

  // this method will return all the values in the set
  values = () => this.set;

  // this method will add an element to the set
  add = (item) => {
    if (!this.has(item)) {
      this.set.push(item);
      return true;
    }
    return false;
  };

  // this method will remove an element from a set
  remove = (item) => {
    if (this.has(item)) {
      const index = this.set.indexOf(item);
      this.set.splice(index, 1);
      return true;
    }
    return false;
  };

  // this method will return the size of the set
  size = () => this.set.length;

  // this method will return the union of two sets
  union = (otherSet) => {
    let unionSet = new MySet();
    unionSet.set = [...this.set]; // deep copy
    otherSet.values().forEach((item) => {
      unionSet.add(item);
    });
    return unionSet;
  };

  // this method will return the intersection of two sets as a new set
  intersection = (otherSet) => {
    let intersectionSet = new MySet();
    this.set.forEach((item) => {
      otherSet.has(item) && intersectionSet.add(item);
    });
    return intersectionSet;
  };

  // this method will return the difference of two sets as a new set
  difference = (otherSet) => {
    let differenceSet = new MySet();
    this.set.forEach((item) => {
      !otherSet.has(item) && differenceSet.add(item);
    });
    return differenceSet;
  };

  // this method will test if the set is a subset of a different set
  subset = (otherSet) => {
    for (const item of this.set) {
      if (!otherSet.has(item)) return false;
    }
    return true;

    // const isSubset = this.set.every((item) => {
    //   return otherSet.has(item);
    // });
    // return isSubset;
  };
}

const setA = new MySet();
const setB = new MySet();
setA.add("a");
setB.add("b");
setB.add("c");
setB.add("a");
setB.add("d");
setB.remove("c");
console.log(setA.union(setB).values());
console.log(setA.intersection(setB).values());
console.log(setB.difference(setA).values());
console.log(setA.subset(setB));

// const setC = new Set();
// const setD = new Set();
// setC.add("a");
// setD.add("b");
// setD.add("c");
// setD.add("a");
// setD.add("d");
// console.log(setD.values());
// setD.delete("a");
// console.log(setD.has("a"));
// console.log(setD.add("d"));
