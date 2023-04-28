const depthFirstTraversal = (graph, src) => {
  const result = [];
  const stack = [src];

  while (stack.length > 0) {
    const currentNode = stack.pop();
    result.push(currentNode);

    for (const neighbor of graph[currentNode]) stack.push(neighbor);
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

const result = depthFirstTraversal(graph, "a");
console.log(result);
