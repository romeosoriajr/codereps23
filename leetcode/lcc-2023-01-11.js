function minTime(n, edges, hasApple) {
  const list = new Map();

  for (let i = 0; i < n; i++) {
    list.set(i, []);
  }

  for (const edge of edges) {
    list.get(edge[0]).push(edge[1]);
    list.get(edge[1]).push(edge[0]);
  }

  return helper(0, list, hasApple, 0);

  function helper(i, list, hasApple, parent) {
    let total = 0;

    for (const neighbor of list.get(i)) {
      if (neighbor == parent) continue;

      total += helper(neighbor, list, hasApple, i);
    }

    if (i != 0 && (hasApple[i] || total > 0)) {
      total += 2;
    }

    return total;
  }
}
