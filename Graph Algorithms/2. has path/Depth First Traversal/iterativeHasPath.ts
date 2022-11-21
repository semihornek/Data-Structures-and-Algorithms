export const hasPath = (graph: {}, src: string, dst: string): boolean => {
  const stack = [src];

  while (stack.length !== 0) {
    const currentNode = stack.pop()!;
    if (currentNode === dst) return true;

    for (let neighbor of graph[currentNode]) {
      stack.push(neighbor);
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
