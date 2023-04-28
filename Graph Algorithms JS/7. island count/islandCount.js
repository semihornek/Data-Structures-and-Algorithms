const directions = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

const islandCount = (grid) => {
  let islandCount = 0;
  const visited = new Set();

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (bfs(row, col, grid, visited)) islandCount++;
    }
  }

  return islandCount;
};

const bfs = (row, col, grid, visited) => {
  if (visited.has(row + "-" + col) || grid[row][col] === "W") return false;
  visited.add(row + "-" + col);

  const queue = [{ row, col }];

  while (queue.length > 0) {
    const { row, col } = queue.shift();

    for (let [x, y] of directions) {
      const currentRow = row + x;
      const currentCol = col + y;
      if (currentRow >= grid.length || currentRow < 0 || currentCol >= grid[0].length || currentCol < 0) continue; // edge cases

      if (!visited.has(currentRow + "-" + currentCol) && grid[currentRow][currentCol] === "L") {
        queue.push({ row: currentRow, col: currentCol });
        visited.add(currentRow + "-" + currentCol);
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
