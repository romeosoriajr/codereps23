function longestPath(parent, s) {
  let result = 1;

  const map = new Map();

  for (let i = 1; i < parent.length; i++) {
    const j = parent[i];

    if (!map.has(j)) map.set(j, []);

    map.get(j).push(i);
  }

  helper(0);
  return result;

  function helper(node) {
    if (!map.has(node)) return 1;
    let max = 0;
    let nextMax = 0;

    for (const neighbor of map.get(node)) {
      const response = helper(neighbor);
      if (s.charAt(node) == s.charAt(neighbor)) continue;

      if (response > max) {
        [nextMax, max] = [max, response];
      } else if (response > nextMax) {
        nextMax = response;
      }
    }

    result = Math.max(result, max + nextMax + 1);
    return max + 1;
  }
}
