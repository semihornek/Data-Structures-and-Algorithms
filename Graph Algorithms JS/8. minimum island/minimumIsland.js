const directions = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

const minimumIsland = (grid) => {
  let minimumIslandSize = grid.length * grid[0].length;
  const visited = new Set();
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      let islandSize = findIslandCount(grid, row, col, visited);
      if (islandSize !== -1 && islandSize < minimumIslandSize) minimumIslandSize = islandSize;
    }
  }

  return minimumIslandSize;
};

const findIslandCount = (grid, row, col, visited) => {
  if (visited.has(row + "-" + col) || grid[row][col] === "W") return -1;
  visited.add(row + "-" + col);

  let islandSize = 0;
  const queue = [{ row, col }];

  while (queue.length > 0) {
    islandSize++;
    const { row, col } = queue.shift();

    for (let [x, y] of directions) {
      const nextRow = row + x;
      const nextCol = col + y;

      if (nextRow < 0 || nextRow >= grid.length || nextCol < 0 || nextCol >= grid[0].length) continue;
      if (visited.has(nextRow + "-" + nextCol)) continue;

      if (grid[nextRow][nextCol] === "L") {
        queue.push({ row: nextRow, col: nextCol });
        visited.add(nextRow + "-" + nextCol);
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
