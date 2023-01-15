function numberOfGoodPaths(vals, edges) {
  const n = vals.length;
  const m = edges.length;
  let result = 0;

  const x = new Array(n).fill(null);
  const y = new Array(n).fill(null);

  for (let i = 0; i < n; i++) {
    y[i] = i;
    x[i] = [vals[i], 1];
  }

  edges.sort(
    (a, b) =>
      Math.max(vals[a[0]], vals[a[1]]) - Math.max(vals[b[0]], vals[b[1]])
  );

  for (let i = 0; i < m; i++) {
    const a = helper(y, edges[i][0]);
    const b = helper(y, edges[i][1]);

    if (x[a][0] != x[b][0]) {
      if (x[a][0] > x[b][0]) y[b] = a;
      else y[a] = b;
    } else {
      y[a] = b;
      result += x[a][1] * x[b][1];
      x[b][1] += x[a][1];
    }
  }

  return result + n;

  function helper(y, i) {
    if (i == y[i]) return i;
    y[i] = helper(y, y[i]);
    return y[i];
  }
}
