function countVowelPermutation(n) {
  const mod = 1e9 + 7;
  const dp = Array(n + 1)
    .fill(null)
    .map(() => {
      return Array(6).fill(null);
    });

  for (let i = 0; i < dp[0].length; i++) {
    dp[0][i] = 0;
  }

  for (let j = 0; j <= n; j++) {
    dp[j][0] = 0;
  }

  for (let i = 1; i < dp[1].length; i++) {
    dp[1][i] = 1;
  }
  for (let i = 2; i <= n; i++) {
    dp[i][1] = (dp[i - 1][2] + dp[i - 1][3] + dp[i - 1][5]) % mod;
    dp[i][2] = (dp[i - 1][1] + dp[i - 1][3]) % mod;
    dp[i][3] = (dp[i - 1][2] + dp[i - 1][4]) % mod;
    dp[i][4] = dp[i - 1][3] % mod;
    dp[i][5] = (dp[i - 1][3] + dp[i - 1][4]) % mod;
  }

  return dp[n].reduce((total, count) => total + count, 0) % mod;
}

console.log(countVowelPermutation(144));
