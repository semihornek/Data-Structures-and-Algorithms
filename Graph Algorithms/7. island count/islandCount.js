const directions = [
  [0, -1],
  [0, 1],
  [1, 0],
  [-1, 0],
];

const islandCount = (grid) => {
  let islandCount = 0;
  const visited = new Set();

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (depthFirstTraversal(row, col, grid, visited)) islandCount++;
    }
  }

  return islandCount;
};

const depthFirstTraversal = (row, col, grid, visited) => {
  if (grid[row][col] === "W") return false;

  if (visited.has(row + "-" + col)) return false;
  visited.add(row + "-" + col);

  const stack = [[row, col]];

  while (stack.length !== 0) {
    const [row, col] = stack.pop();

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

  return true;
};

const grid = [
  ["W", "L", "W", "W", "W"],
  ["W", "L", "W", "W", "W"],
  ["W", "W", "W", "L", "W"],
  ["W", "W", "L", "L", "W"],
  ["L", "W", "W", "L", "L"],
  ["L", "L", "W", "W", "W"],
];

const result = islandCount(grid);

console.log(result);
