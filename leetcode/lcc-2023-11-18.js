function maxFrequency(arr, k) {
  let result = 1;
  let i = 0;

  let sum = 0;

  arr.sort((a, b) => a - b);

  for (let j = 0; j < arr.length; j++) {
    sum += arr[j];

    while (sum + k < arr[j] * (j - i + 1)) {
      sum -= arr[i];
      i += 1;
    }
    result = Math.max(result, j - i + 1);
  }

  return result;
}
