export const result: string[] = [];

const depthFirstTraversal = (graph: {}, source: string) => {
  result.push(source);

  for (let neighbor of graph[source]) {
    depthFirstTraversal(graph, neighbor);
  }
};

const graph = {
  a: ["b", "c"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};

depthFirstTraversal(graph, "a");
console.log(result);
