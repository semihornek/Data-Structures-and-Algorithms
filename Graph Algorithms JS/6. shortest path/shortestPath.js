const shortestPath = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges);
  const visited = new Set([nodeA]);
  const queue = [{ currentNode: nodeA, distance: 0 }];

  while (queue.length > 0) {
    const { currentNode, distance } = queue.shift();
    if (currentNode === nodeB) return distance;

    for (let neighbor of graph[currentNode]) {
      if (!visited.has(neighbor)) {
        queue.push({ currentNode: neighbor, distance: distance + 1 });
        visited.add(neighbor);
      }
    }
  }

  return -1;
};

const buildGraph = (edges) => {
  const graph = {};

  for (const [nodeA, nodeB] of edges) {
    if (!graph[nodeA]) graph[nodeA] = [];
    if (!graph[nodeB]) graph[nodeB] = [];

    graph[nodeA].push(nodeB);
    graph[nodeB].push(nodeA);
  }

  return graph;
};

const edges = [
  ["w", "x"],
  ["x", "y"],
  ["z", "y"],
  ["z", "v"],
  ["w", "v"],
];

const result = shortestPath(edges, "w", "z");
console.log(result);
