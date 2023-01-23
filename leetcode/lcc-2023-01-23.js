function findJudge(n, trust) {
  const trusts = new Map();

  const trustedBy = new Map();

  for (let i = 1; i <= n; i++) {
    trusts.set(i, new Set());
    trustedBy.set(i, new Set());
  }

  for (const [a, b] of trust) {
    trusts.get(a).add(b);
    trustedBy.get(b).add(a);
  }

  for (let i = 1; i <= n; i++) {
    if (trusts.get(i).size == 0 && trustedBy.get(i).size == n - 1) return i;
  }

  return -1;
}

const n = 3;
const trust = [
  [1, 3],
  [2, 3],
];

console.log(findJudge(n, trust));
