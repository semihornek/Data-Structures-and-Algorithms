const directions: number[][] = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

const minimumIsland = (grid: string[][]): number => {
  let minimumIslandSize = grid.length * grid[0].length;

  const visited: Set<string> = new Set();
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      const islandSize = findIslandSize(grid, row, col, visited);
      if (islandSize !== -1 && islandSize < minimumIslandSize) minimumIslandSize = islandSize;
    }
  }

  return minimumIslandSize;
};

const findIslandSize = (grid: string[][], row: number, col: number, visited: Set<string>): number => {
  if (visited.has(`${row}-${col}`) || grid[row][col] === "W") return -1;
  visited.add(`${row}-${col}`);

  let islandSize = 0;

  const queue: { currentRow: number; currentCol: number }[] = [{ currentRow: row, currentCol: col }];

  while (queue.length > 0) {
    const { currentRow, currentCol } = queue.shift()!;
    islandSize++;

    for (const [x, y] of directions) {
      const nextRow = currentRow + x;
      const nextCol = currentCol + y;

      if (nextRow < 0 || nextRow >= grid.length || nextCol < 0 || nextCol >= grid[0].length) continue;

      if (grid[nextRow][nextCol] === "L") {
        if (!visited.has(`${nextRow}-${nextCol}`)) {
          queue.push({ currentRow: nextRow, currentCol: nextCol });
          visited.add(`${nextRow}-${nextCol}`);
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
