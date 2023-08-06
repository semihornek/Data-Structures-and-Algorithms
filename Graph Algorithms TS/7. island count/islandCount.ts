const directions = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

const islandCount = (grid: string[][]): number => {
  let islandCount = 0;
  const visited = new Set<string>();

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      findIsland(grid, row, col, visited) && islandCount++;
    }
  }

  return islandCount;
};

const findIsland = (grid: string[][], row: number, col: number, visited: Set<string>): boolean => {
  if (visited.has(`${row}-${col}`)) return false;
  if (grid[row][col] === "W") return false;

  visited.add(`${row}-${col}`);
  const queue: { row: number; col: number }[] = [{ row, col }];

  while (queue.length > 0) {
    const { row, col } = queue.shift()!;

    for (const [x, y] of directions) {
      const nextRow = row + x;
      const nextCol = col + y;
      if (nextRow < 0 || nextRow >= grid.length || nextCol < 0 || nextCol >= grid[0].length) continue;

      if (grid[nextRow][nextCol] === "L") {
        if (!visited.has(`${nextRow}-${nextCol}`)) {
          queue.push({ row: nextRow, col: nextCol });
          visited.add(`${nextRow}-${nextCol}`);
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
