const hasPath = (graph: { [key: string]: string[] }, src: string, dst: string): boolean => {
  if (src === dst) return true;

  for (let neighbor of graph[src]) {
    if (hasPath(graph, neighbor, dst)) return true;
  }

  return false;
};

const graph = {
  f: ["g", "i"],
  g: ["h"],
  h: [],
  i: ["g", "k"],
  j: ["i"],
  k: [],
};

const result = hasPath(graph, "f", "k");
console.log(result);
