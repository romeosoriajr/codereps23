function subarraysDivByK(nums, k) {
  const n = nums.length;
  const sums = new Array(k).fill(0);
  sums[0] += 1;

  let count = 0;
  let currSum = 0;

  for (let i = 0; i < n; i++) {
    currSum = (currSum + (nums[i] % k) + k) % k;
    count += sums[currSum];
    sums[currSum]++;
  }

  return count;
}
