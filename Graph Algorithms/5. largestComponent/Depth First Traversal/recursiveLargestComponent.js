const largestComponent = (graph) => {
  let largestComponent = 0;
  const visited = new Set();

  for (let node in graph) {
    const componentCount = explore(node, graph, visited);
    if (componentCount > largestComponent) {
      largestComponent = componentCount;
    }
  }

  return largestComponent;
};

const explore = (currentNode, graph, visited) => {
  if (visited.has(currentNode)) return 0;
  visited.add(currentNode);

  let size = 1;

  for (let neighbor of graph[currentNode]) {
    size += explore(neighbor, graph, visited);
  }

  return size;
};

const result = largestComponent({
  1: ["2"],
  2: ["1", "8"],
  6: ["7"],
  9: ["8"],
  7: ["6", "8"],
  8: ["9", "7", "2"],
});

console.log(result);
