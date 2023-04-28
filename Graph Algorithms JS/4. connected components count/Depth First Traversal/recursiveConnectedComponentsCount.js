dfs = (node, graph, visited) => {
  if (visited.has(node)) return false;
  visited.add(node);

  for (let neighbor of graph[node]) {
    dfs(neighbor, graph, visited);
  }

  return true;
};

const connectedComponentsCount = (graph) => {
  let count = 0;
  const visited = new Set();

  for (let node in graph) {
    dfs(+node, graph, visited) && count++;
  }

  return count;
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
