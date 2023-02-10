function maxDistance(grid) {
  const n = grid.length;

  const queue = [];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] == 1) queue.push([i, j]);
    }
  }

  if (!queue.length || queue.length == n*n) return -1;

  let result = -1;

  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  while (queue.length) {
    let m = queue.length;

    result += 1;
    while (m-- > 0) {
      const [x, y] = queue.shift();

      for (const [a, b] of directions) {
        const i = x + a;
        const j = y + b;

        if (i >= 0 && i < n && j >= 0 && j < n && grid[i][j] == 0) {
          grid[i][j] = 1;
          queue.push([i, j]);
        }
      }
    }
  }

  return result;
}
