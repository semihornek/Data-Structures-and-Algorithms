const hasPath = (graph, src, dst) => {
  const stack = [src];

  while (stack.length > 0) {
    const currentNode = stack.pop();
    if (currentNode === dst) return true;

    for (const neighbor of graph[currentNode]) {
      stack.push(neighbor);
    }
  }

  return false;
};

const graph = {
  f: ["g", "i"],
  g: ["h"],
  h: [],
  i: ["g", "k"],
  j: ["i"],
  k: [],
};

const result = hasPath(graph, "f", "k");
console.log(result);
