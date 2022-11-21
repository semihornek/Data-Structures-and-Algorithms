const connectedComponentsCount = (graph) => {
  let count = 0;
  const visited = new Set();

  for (let node in graph) {
    console.log(visited);
    if (explore(+node, graph, visited)) count++;
  }

  return count;
};

const explore = (currentNode, graph, visited) => {
  if (visited.has(currentNode)) return false;
  visited.add(currentNode);

  for (let neighbor of graph[currentNode]) {
    explore(neighbor, graph, visited);
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
