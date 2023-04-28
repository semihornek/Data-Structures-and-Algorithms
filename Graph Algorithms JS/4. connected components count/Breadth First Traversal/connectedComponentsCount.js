const connectedComponentsCount = (graph) => {
  let count = 0;
  const visited = new Set();

  for (const node in graph) {
    bfs(+node, graph, visited) && count++;
  }

  return count;
};

const bfs = (node, graph, visited) => {
  if (visited.has(node)) return false;
  visited.add(node);

  const queue = [node];
  while (queue.length > 0) {
    const currentNode = queue.shift();

    for (let neighbor of graph[currentNode]) {
      if (!visited.has(neighbor)) {
        queue.push(neighbor);
        visited.add(neighbor);
      }
    }
  }

  return true;
};

const result = connectedComponentsCount({
  0: [8, 1, 5],
  1: [0],
  5: [0, 8],
  8: [0, 5],
  2: [3, 4],
  3: [2, 4],
  4: [3, 2],
});

console.log(result);
