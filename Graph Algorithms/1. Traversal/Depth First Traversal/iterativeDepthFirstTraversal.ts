export const depthFirstTraversal = (graph: {}, source: string): string[] => {
  const result: string[] = [];

  const stack: string[] = [source];
  while (stack.length !== 0) {
    const currentNode = stack.pop()!;
    result.push(currentNode);

    for (let neighbor of graph[currentNode]) {
      stack.push(neighbor);
    }
  }

  return result;
};

const graph = {
  a: ["c", "b"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};

const result = depthFirstTraversal(graph, "a");
console.log(result);
