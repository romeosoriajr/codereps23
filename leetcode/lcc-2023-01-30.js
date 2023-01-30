function tribonacci(n) {
  const arr = [0, 1, 1];

  if (n < 3) return arr[n];

  let i = 3;

  while (i++ <= n) {
    arr.push(arr.at(-1) + arr.at(-2) + arr.at(-3));
  }

  return arr[n];
}
