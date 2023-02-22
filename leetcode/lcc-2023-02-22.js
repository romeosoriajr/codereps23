function shipWithinDays(weights, days) {
  let left = 0;
  let right = 0;

  for (const w of weights) {
    left = Math.max(left, w);
    right += w;
  }

  let result = right;
  let mid;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);

    if (check(mid)) {
      result = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return result;

  function check(capacity) {
    let minDays = 1;
    let curr = 0;

    for (const w of weights) {
      if (curr + w > capacity) {
        minDays += 1;
        curr = 0;
      }

      curr += w;
    }

    return minDays <= days;
  }
}
