function maxSubarraySumCircular(nums) {
  let maxSum = nums[0];
  let minSum = nums[0];
  let currMax = 0;
  let currMin = 0;
  let totalSum = 0;

  for (const num of nums) {
    currMax = Math.max(currMax + num, num);
    maxSum = Math.max(maxSum, currMax);
    currMin = Math.min(currMin + num, num);
    minSum = Math.min(minSum, currMin);
    totalSum += num;
  }

  return maxSum > 0 ? Math.max(maxSum, totalSum - minSum) : maxSum;
}

