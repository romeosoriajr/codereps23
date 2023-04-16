function numWays(words, target) {
  const n = words[0].length;
  const m = target.length;
  const mod = 10 ** 9 + 7;
  const dp = new Array(m + 1).fill(null);
  dp[0] = 1;

  const count = new Array(n).fill(null).map(() => new Array(26).fill(null));

  for (const word of words) {
    for (let i = 0; i < n; i++) {
      count[i][word.charCodeAt(i) - 97]++;
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = m - 1; j >= 0; j--) {
      dp[j + 1] += (dp[j] * count[i][target.charCodeAt(j) - 97]) % mod;
      dp[j + 1] %= mod;
    }
  }

  return dp[m];
}
