const depthFirstTraversal = (graph: { [key: string]: string[] }, source: string): string[] => {
  const result: string[] = [];
  const stack: string[] = [source];

  while (stack.length > 0) {
    const currentElement = stack.pop()!;
    result.push(currentElement);

    for (let neighbor of graph[currentElement]) {
      stack.push(neighbor);
    }
  }

  return result;
};

const graph: { [key: string]: string[] } = {
  a: ["c", "b"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};

const result = depthFirstTraversal(graph, "a");
console.log(result);
