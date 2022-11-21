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
  if (visited.has(currentNode)) return -1;

  let componentCount = 0;
  const stack = [currentNode];
  visited.add(currentNode);

  while (stack.length !== 0) {
    const currentNode = stack.pop();

    componentCount++;

    for (let neighbor of graph[currentNode]) {
      if (!visited.has(neighbor)) {
        stack.push(neighbor);
        visited.add(neighbor);
      }
    }
  }

  return componentCount;
};

const result = largestComponent({
  0: ["8", "1", "5"],
  1: ["0"],
  5: ["0", "8"],
  8: ["0", "5"],
  2: ["3", "4"],
  3: ["2", "4"],
  4: ["3", "2"],
});

console.log(result);
