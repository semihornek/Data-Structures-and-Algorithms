const breadthFirstTraversal = (graph: { [key: string]: string[] }, source: string): string[] => {
  const result: string[] = [];
  const queue: string[] = [source];

  while (queue.length > 0) {
    const currentElement = queue.shift()!;
    result.push(currentElement);

    for (let neighbor of graph[currentElement]) {
      queue.push(neighbor);
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

const result = breadthFirstTraversal(graph, "a");
console.log(result);
