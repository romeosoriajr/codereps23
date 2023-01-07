function canCompleteCircuit(gas, cost) {
  const n = gas.length;

  let totalGas = 0;
  let totalCost = 0;
  let currGas = 0;
  let start = 0;

  for (let i = 0; i < n; i++) {
    totalGas += gas[i];
    totalCost += cost[i];

    currGas += gas[i] - cost[i];

    if (currGas < 0) {
      start = i + 1;
      currGas = 0;
    }
  }

  return totalGas < totalCost ? -1 : start;
}
