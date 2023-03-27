function minPathSum(grid) {

  const m = grid.length;
  const n = grid[0].length;


  const dp = new Array(m).fill(null).map(() => new Array(n).fill(null));


  dp[0][0] = grid[0][0];
  for (let i = 1; i < m; i++) {
    dp[i][0] = dp[i - 1][0] + grid[i][0];
  }

  for (let j = 1; j < n; j++) {
    dp[0][j] = dp[0][j - 1] + grid[0][j];
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = grid[i][j] + Math.min(dp[i - 1][j], dp[i][j - 1]);
    }
  }

  console.log(dp);
  return dp[m - 1][n - 1];
}

const grid = [
  [1, 2, 3],
  [4, 5, 6]
]

console.log(minPathSum(grid));
