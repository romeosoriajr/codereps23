function minScore(n, roads) {

  let result = Number.MAX_SAFE_INTEGER;
  const map = new Map();

  for (let [a, b, dist] of roads) {

    if (!map.has(a)) map.set(a, new Map())
    map.get(a).set(b, dist);

    if (!map.has(b)) map.set(b, new Map())
    map.get(b).set(a, dist);
  }

  const visited = new Set();
  const queue = [1];

  while (queue.length) {
    const currPos = queue.shift();

    const neighbors = map.get(currPos);

    for (const [neighbor, score] of neighbors.entries()) {

      if (!visited.has(neighbor)) {
        queue.push(neighbor);
        visited.add(neighbor);
      }
      result = Math.min(result, score);
    }
  }

  return result;

}
