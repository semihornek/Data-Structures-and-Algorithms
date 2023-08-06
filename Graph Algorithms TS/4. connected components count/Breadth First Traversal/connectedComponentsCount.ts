const connectedComponentsCount = (graph: { [key: number]: number[] }): number => {
  let connectedComponentsCount = 0;
  const visited: Set<number> = new Set();

  for (const node in graph) {
    bfs(graph, visited, +node) && connectedComponentsCount++;
  }

  return connectedComponentsCount;
};

const bfs = (graph: { [key: number]: number[] }, visited: Set<number>, node: number): boolean => {
  if (visited.has(node)) return false;

  const queue: number[] = [node];
  while (queue.length > 0) {
    const currentNode = queue.shift()!;

    for (const neighbor of graph[currentNode]) {
      if (!visited.has(neighbor)) {
        queue.push(neighbor);
        visited.add(neighbor);
      }
    }
  }

  return true;
};

const result = connectedComponentsCount({
  1: [2],
  2: [1, 8],
  6: [7],
  9: [8],
  7: [6, 8],
  8: [9, 7, 2],
});
console.log(result);
