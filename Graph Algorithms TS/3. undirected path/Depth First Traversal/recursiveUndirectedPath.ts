const buildGraph = (edges: string[][]): { [key: string]: string[] } => {
  const graph: { [key: string]: string[] } = {};

  for (const [nodeA, nodeB] of edges) {
    if (!graph[nodeA]) graph[nodeA] = [];
    if (!graph[nodeB]) graph[nodeB] = [];

    graph[nodeA].push(nodeB);
    graph[nodeB].push(nodeA);
  }

  return graph;
};

const dfs = (graph: { [key: string]: string[] }, visited: Set<string>, nodeA: string, nodeB: string): boolean => {
  if (nodeA === nodeB) return true;

  for (const neighbor of graph[nodeA]) {
    if (!visited.has(neighbor)) {
      visited.add(neighbor);
      if (dfs(graph, visited, neighbor, nodeB)) return true;
    }
  }

  return false;
};

const undirectedPath = (edges: string[][], nodeA: string, nodeB: string): boolean => {
  const graph: { [key: string]: string[] } = buildGraph(edges);

  const visited: Set<string> = new Set(nodeA);
  return dfs(graph, visited, nodeA, nodeB);
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
