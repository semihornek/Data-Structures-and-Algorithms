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

const undirectedPath = (edges: string[][], nodeA: string, nodeB: string): boolean => {
  const graph: { [key: string]: string[] } = buildGraph(edges);

  const visited: Set<string> = new Set(nodeA);
  const queue: string[] = [nodeA];

  while (queue.length > 0) {
    const currentNode = queue.shift()!;
    if (currentNode === nodeB) return true;

    for (const neighbor of graph[currentNode]) {
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
