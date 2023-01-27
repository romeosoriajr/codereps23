function findAllConcatenatedWordsInADict(words) {
  const set = new Set();

  for (const word of words) {
    set.add(word);
  }

  const result = [];

  for (const word of words) {
    const n = word.length;

    const dp = new Array(n + 1).fill(0);

    dp[0] = 1;

    for (let i = 0; i < n; i++) {
      if (!dp[i]) continue;

      for (let j = i + 1; j <= n; j++) {
        if (j - i < n && set.has(word.substr(i, j - i))) {
          dp[j] = 1;
        }
      }

      if (dp[n]) {
        result.push(word);
        break;
      }
    }
  }

  return result;
}
