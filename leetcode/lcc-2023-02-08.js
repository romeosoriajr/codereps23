function jump(nums) {
  for (let i = 1; i < nums.length; i++) {
    nums[i] = Math.max(nums[i] + i, nums[i - 1]);
  }

  let index = 0;
  let result = 0;

  while (index < nums.length - 1) {
    result++;
    index = nums[index];
  }

  return result;
}
