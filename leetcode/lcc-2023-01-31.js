function bestTeamScore(scores, ages) {
  const players = scores.map((score, index) => ({ score, age: ages[index] }));

  players.sort((a, b) =>
    a.score == b.score ? a.age - b.age : a.score - b.score
  );

  const dp = new Array(scores.length).fill(0).map((_) => []);

  return helper(0, 0);

  function helper(maxAge, i) {
    if (i == players.length) return 0;

    if (dp[i][maxAge]) {
      return dp[i][maxAge];
    }

    let result = 0;
    const currPlayer = players[i];

    if (currPlayer.age < maxAge) {
      dp[i][maxAge] = helper(maxAge, i + 1);
      return dp[i][maxAge];
    }

    result = Math.max(
      result,
      currPlayer.score + helper(Math.max(maxAge, currPlayer.age), i + 1)
    );
    result = Math.max(result, helper(maxAge, i + 1));

    dp[i][maxAge] = result;
    return result;
  }
}
