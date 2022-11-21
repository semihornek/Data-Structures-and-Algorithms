export const hasPath = (graph: {}, src: string, dst: string): boolean => {
  const queue = [src];

  while (queue.length !== 0) {
    const currentNode = queue.shift()!;
    if (currentNode === dst) return true;

    for (let neighbor of graph[currentNode]) {
      queue.push(neighbor);
    }
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
