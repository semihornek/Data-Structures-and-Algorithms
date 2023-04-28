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

const undirectedPath = (edges, src, dst) => {
  const graph = buildGraph(edges);
  const queue = [src];
  const visited = new Set([src]);

  while (queue.length > 0) {
    const currentNode = queue.shift();
    if (currentNode === dst) return true;

    for (let neighbor of graph[currentNode]) {
      if (!visited.has(neighbor)) {
        queue.push(neighbor);
        visited.add(neighbor);
      }
    }
  }

  return false;
};

const edges = [
  ["i", "j"],
  ["k", "i"],
  ["m", "k"],
  ["k", "l"],
  ["o", "n"],
];

const result = undirectedPath(edges, "j", "m");
console.log(result);
