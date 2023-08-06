const shortestPath = (edges: string[][], nodeA: string, nodeB: string): number => {
  const graph = buildGraph(edges);
  const visited: Set<string> = new Set([nodeA]);
  const queue: { currentNode: string; pathLength: number }[] = [{ currentNode: nodeA, pathLength: 0 }];

  while (queue.length > 0) {
    const { currentNode, pathLength } = queue.shift()!;
    if (currentNode === nodeB) return pathLength;

    for (const neighbor of graph[currentNode]) {
      if (!visited.has(neighbor)) {
        queue.push({ currentNode: neighbor, pathLength: pathLength + 1 });
        visited.add(neighbor);
      }
    }
  }

  return -1;
};

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

const edges = [
  ["w", "x"],
  ["x", "y"],
  ["z", "y"],
  ["z", "v"],
  ["w", "v"],
];

const result = shortestPath(edges, "w", "z");
console.log(result);
