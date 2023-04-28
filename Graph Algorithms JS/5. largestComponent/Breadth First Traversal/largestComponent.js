const largestComponent = (graph) => {
  let largestComponent = 0;
  const visited = new Set();

  for (const node in graph) {
    let size = bfs(node, graph, visited);
    if (size > largestComponent) largestComponent = size;
  }

  return largestComponent;
};

const bfs = (node, graph, visited) => {
  if (visited.has(node)) return 0;
  visited.add(node);

  let componentSize = 0;
  const queue = [node];

  while (queue.length > 0) {
    const currentNode = queue.shift();
    componentSize++;

    for (const neighbor of graph[currentNode]) {
      if (!visited.has(neighbor)) {
        queue.push(neighbor);
        visited.add(neighbor);
      }
    }
  }

  return componentSize;
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
