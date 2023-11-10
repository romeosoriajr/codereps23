function restoreArray(adjacentPairs) {
  const map = new Map();
  for (const [a, b] of adjacentPairs) {
    if (!map.has(a)) {
      map.set(a, [b]);
    } else {
      map.get(a).push(b);
    }
    if (!map.has(b)) {
      map.set(b, [a]);
    } else {
      map.get(b).push(a);
    }
  }

  let start;
  for (const key of map.keys()) {
    if (map.get(key).length == 1) start = key;
  }

  let ans = [];
  let visit = new Set();
  ans.push(start);
  visit.add(start);
  helper(start);
  return ans;

  function helper(num) {
    let vals = map.get(num);
    if (!visit.has(num)) {
      visit.add(num);
      ans.push(num);
    }
    for (let i of vals) {
      if (!visit.has(i)) {
        helper(i);
      }
    }
  }
}
