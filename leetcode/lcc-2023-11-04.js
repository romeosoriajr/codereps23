function getLastMoment(n, left, right) {
  let result = 0;

  for (let val of left) {
    result = Math.max(result, val);
  }
  for (let val of right) {
    result = Math.max(result, n - val);
  }

  return result;
}

console.log(getLastMoment(4, [4, 3], [0, 1]));
