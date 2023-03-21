function zeroFilledSubarray(nums) {
  let total = 0;
  let curr = 0;

  for (const num of nums) {
    if (num == 0) {
      curr += 1;
      total += curr;
    } else {
      curr = 0;
    }
  }

  return total;
}
