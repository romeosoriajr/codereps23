function minEatingSpeed(piles, targetHours) {
  let low = 1;
  let high = Math.max(...piles);
  let result = -1;

  while (low <= high) {
    const mid = Math.floor((high + low) / 2);

    if (helper(mid) <= targetHours) {
      result = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return result;

  function helper(num) {
    let total = 0;

    for (let i = 0; i < piles.length; i++) {
      const count = Math.ceil(piles[i] / num);
      total += count;
    }

    return total;
  }
}
