const directions = [
  [0, -1],
  [0, 1],
  [-1, 0],
  [1, 0],
];

const minimumIsland = (grid) => {
  let minimumIslandSize = grid.length * grid[0].length;
  const visited = new Set();

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      const islandSize = depthFirstTraversal(row, col, grid, visited);
      if (islandSize < minimumIslandSize) {
        minimumIslandSize = islandSize;
      }
    }
  }

  return minimumIslandSize;
};

const depthFirstTraversal = (row, col, grid, visited) => {
  const maxIslandSize = grid.length * grid[0].length;
  if (grid[row][col] === "W") return maxIslandSize;

  if (visited.has(row + "-" + col)) return maxIslandSize;
  visited.add(row + "-" + col);

  let islandSize = 0;
  const stack = [[row, col]];

  while (stack.length !== 0) {
    const [row, col] = stack.pop();

    islandSize++;

    for (let [x, y] of directions) {
      const nextRow = row + x;
      const nextCol = col + y;

      if (nextRow < 0 || nextCol < 0 || nextRow >= grid.length || nextCol >= grid[0].length) continue;

      if (!visited.has(nextRow + "-" + nextCol)) {
        if (grid[nextRow][nextCol] === "L") {
          stack.push([nextRow, nextCol]);
          visited.add(nextRow + "-" + nextCol);
        }
      }
    }
  }

  return islandSize;
};

const grid = [
  ["W", "L", "W", "W", "W"],
  ["W", "L", "W", "W", "W"],
  ["W", "W", "W", "L", "W"],
  ["W", "W", "L", "L", "W"],
  ["L", "W", "W", "L", "L"],
  ["L", "L", "W", "W", "W"],
];

const result = minimumIsland(grid);

console.log(result);
