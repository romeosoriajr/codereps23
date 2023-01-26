function findCheapestPrice(n, flights, src, dst, k) {
  const adj = new Map();


  for (const [from, to, price] of flights) {
    if (!adj.has(from)) adj.set(from, []);
    const dests = adj.get(from);
    dests.push([to, price]);
  }

  const minCosts = new Array(n).fill(Number.MAX_SAFE_INTEGER);
  const queue = [[src, 0]];

  let stops = 0;

  while (queue.length && stops <= k) {
    let size = queue.length;

    while (size--) {
      const [currStop, currPrice] = queue.shift();

      const neighbors = adj.get(currStop);
      if (!neighbors) continue;

      for (const [nextStop, price] of neighbors) {
        if (minCosts[nextStop] < currPrice + price) continue;
        minCosts[nextStop] = currPrice + price;
        queue.push([nextStop, minCosts[nextStop]]);
      }
    }
    stops += 1;
  }

  return minCosts[dst] == Number.MAX_SAFE_INTEGER ? -1 : minCosts[dst];
}

console.log(
  findCheapestPrice(
    4,
    [
      [0, 1, 100],
      [1, 2, 100],
      [2, 0, 100],
      [1, 3, 600],
      [2, 3, 200],
    ],
    0,
    3,
    1
  )
);
