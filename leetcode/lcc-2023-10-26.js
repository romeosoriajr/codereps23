function numFactoredBinaryTrees(arr) {
  const mod = 10 ** 9 + 7;
  arr.sort((a, b) => a - b);
  let result = 0;
  const dp = new Map();

  for (const x of arr) {
    let ways = 1;
    const max = Math.sqrt(x);

    for (let j = 0, left = arr[0]; left <= max; left = arr[++j]) {
      if (x % left !== 0) continue;
      const right = x / left;
      if (dp.has(right)) {
        const leftWays = dp.get(left);
        const rightWays = dp.get(right);
        ways = (ways + leftWays * rightWays * (left === right ? 1 : 2)) % mod;
      }
    }
    dp.set(x, ways);
    result = (result + ways) % mod;
  }
  return result;
}
console.log(numFactoredBinaryTrees([15, 13, 22, 7, 11]));
