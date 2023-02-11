function shortestAlternatingPaths (n, redEdges, blueEdges) {

  const graph = {};
  for (let i = 0; i < n; i++) graph[i] = { r: [], b: [] };
  redEdges.forEach(([i, j]) => graph[i].r.push(j));
  blueEdges.forEach(([i, j]) => graph[i].b.push(j));

  const res = Array(n).fill(-1);

  const visited = new Map();
  visited.set('r', new Set());
  visited.set('b', new Set());

  const queue = [
    [0, 'r'],
    [0, 'b'],
  ];

  let len = 0;

  while (queue.length) {
    const j = queue.length;

    for (let i = 0; i < j; i++) {
      const [val, color] = queue.shift();

      if (res[val] === -1) res[val] = len;

      const nextValues = graph[val][color];
      const nextCol = color === 'b' ? 'r' : 'b';

      nextValues.forEach((nextVal) => {
        if (!visited.get(nextCol).has(nextVal)) {
          visited.get(nextCol).add(nextVal);
          queue.push([nextVal, nextCol]);
        }
      });
    }
    len++;
  }

  return res;
}

