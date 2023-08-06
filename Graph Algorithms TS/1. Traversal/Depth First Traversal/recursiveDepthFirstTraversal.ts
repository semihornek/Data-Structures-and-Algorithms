const result: string[] = [];

const depthFirstTraversal = (graph: { [key: string]: string[] }, source: string): void => {
  result.push(source);
  for (let neighbor of graph[source]) {
    depthFirstTraversal(graph, neighbor);
  }
};

const graph: { [key: string]: string[] } = {
  a: ["b", "c"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};

depthFirstTraversal(graph, "a");
console.log(result);
