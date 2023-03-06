function findKthPositive(arr, k) {
  let low = 0;
  let high = arr.length;

  while (low < high) {
    const mid = Math.floor(low + (high - low) / 2);
    if (arr[mid] - mid > k) high = mid;
    else low = mid + 1;
  }

  return low + k;
}
