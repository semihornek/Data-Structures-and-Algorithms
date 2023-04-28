const result = [];

const depthFirstTraversal = (graph, src) => {
  result.push(src);
  for (let neighbor of graph[src]) depthFirstTraversal(graph, neighbor);
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
