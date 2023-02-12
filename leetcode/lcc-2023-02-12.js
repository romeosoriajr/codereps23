function minimumFuelCost(roads, seats) {

  const adj = new Map();
  let result = 0;

  for (let i = 0; i <= roads.length; i++) {
    adj.set(i, new Set());
  }

  for (const [a, b] of roads) {
    adj.get(a).add(b);
    adj.get(b).add(a);
  }

  helper(0, 0);

  return result;

  function helper(curr, prev) {
    let people = 1;

    for (const b of adj.get(curr)) {
      if (prev == b) continue;

      people += helper(b, curr);
    }

    if (curr != 0) result += Math.floor((people + seats - 1) / seats);

    return people;

  }
}

console.log(minimumFuelCost([[0,1],[0,2],[0,3]], 5));
