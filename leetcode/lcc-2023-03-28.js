function minCostTickets(days, costs) {
  const n = days.length;

  const dp = new Array(366).fill(Number.MAX_SAFE_INTEGER);

  dp[0] = 0;

  let j=0;

  for (let i=1; i < 366; i++) {
    if (j < n && i == days[j]) {
      dp[i] = Math.min(dp[i], dp[i-1] + costs[0]);

      if ( i >= 7) dp[i] = Math.min(dp[i], dp[i-7] + costs[1]);
      else dp[i] = Math.min(dp[i], costs[1]);

      if ( i >= 30) dp[i] = Math.min(dp[i], dp[i-30] + costs[2]);
      else dp[i] = Math.min(dp[i], costs[2]);

      j++;
    } else {
      dp[i] = dp[i-1];
    }
  }
  return dp[365];
}

