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

const hasPath = (graph, visited, src, dst) => {
  if (src === dst) return true;
  visited.add(src);

  for (let neighbor of graph[src]) {
    if (!visited.has(neighbor)) {
      if (hasPath(graph, visited, neighbor, dst) === true) return true;
    }
  }

  return false;
};

const undirectedPath = (edges, src, dst) => {
  const graph = buildGraph(edges);
  const visited = new Set();
  return hasPath(graph, visited, src, dst);
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
