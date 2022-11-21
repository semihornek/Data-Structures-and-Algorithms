const shortestPath = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges);
  return findShortestPath(graph, nodeA, nodeB);
};

const buildGraph = (edges) => {
  const graph = {};

  for (let [nodeA, nodeB] of edges) {
    if (!graph[nodeA]) graph[nodeA] = [];
    if (!graph[nodeB]) graph[nodeB] = [];

    graph[nodeA].push(nodeB);
    graph[nodeB].push(nodeA);
  }

  return graph;
};

const findShortestPath = (graph, src, dst) => {
  const queue = [[src, 0]];
  const visited = new Set([src]);

  while (queue.length !== 0) {
    const [currentNode, currentDistance] = queue.shift();
    if (currentNode === dst) return currentDistance;

    for (let neighbor of graph[currentNode]) {
      if (!visited.has(neighbor)) {
        queue.push([neighbor, currentDistance + 1]);
        visited.add(neighbor);
      }
    }
  }

  return -1;
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
