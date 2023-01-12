function countSubTrees(n, edges, labels) {
  const adj = new Map();

  const result = new Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    adj.set(i, new Set());
  }

  for (const [a, b] of edges) {
    adj.get(a).add(b);
    adj.get(b).add(a);
  }

  helper(0, -1);

  return result;

  function helper(curr, parent) {
    const count = new Array(26).fill(0);

    for (const x of adj.get(curr)) {
      if (parent != x) {
        const subresult = helper(x, curr);

        for (let i = 0; i < 26; i++) {
          count[i] += subresult[i];
        }
      }
    }

    result[curr] = ++count[labels.charCodeAt(curr) - "a".charCodeAt(0)];

    return count;
  }
}
