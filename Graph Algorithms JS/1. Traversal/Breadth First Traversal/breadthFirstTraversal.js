const breadthFirstTraversal = (graph, src) => {
  const result = [];
  const queue = [src];

  while (queue.length > 0) {
    const currentNode = queue.shift();
    result.push(currentNode);

    for (const neighbor of graph[currentNode]) queue.push(neighbor);
  }

  return result;
};

const graph = {
  a: ["c", "b"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};

const result = breadthFirstTraversal(graph, "a");
console.log(result);
