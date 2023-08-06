const largestComponent = (graph: { [node: string]: string[] }): number => {
  let largestComponent = 0;
  const visited: Set<string> = new Set<string>();

  for (const node in graph) {
    const componentSize = dfs(graph, visited, node);
    if (componentSize > largestComponent) largestComponent = componentSize;
  }
  return largestComponent;
};

const dfs = (graph: { [node: string]: string[] }, visited: Set<string>, node: string): number => {
  if (visited.has(node)) return 0;
  visited.add(node);

  let componentSize = 1;
  for (const neighbor of graph[node]) {
    componentSize += dfs(graph, visited, neighbor);
  }

  return componentSize;
};

const result = largestComponent({
  0: ["8", "1", "5"],
  1: ["0"],
  5: ["0", "8"],
  8: ["0", "5"],
  2: ["3", "4"],
  3: ["2", "4"],
  4: ["3", "2"],
});
console.log(result);
