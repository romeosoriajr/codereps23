function buildArray(target, n) {
  const result = [];
  let j = 0;

  for (let i = 1; i <= n && j < target.length; i++) {
    result.push("Push");
    if (target[j] == i) {
      j++;
    } else {
      result.push("Pop");
    }
  }

  return result;
}
console.log(buildArray([1, 2], 4));
