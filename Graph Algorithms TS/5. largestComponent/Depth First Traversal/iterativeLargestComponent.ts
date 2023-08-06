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
  let componentSize = 0;
  if (visited.has(node)) return 0;
  visited.add(node);

  const stack: string[] = [node];
  while (stack.length > 0) {
    const currentNode = stack.pop()!;
    componentSize++;

    for (const neighbor of graph[currentNode]) {
      if (!visited.has(neighbor)) {
        stack.push(neighbor);
        visited.add(neighbor);
      }
    }
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
