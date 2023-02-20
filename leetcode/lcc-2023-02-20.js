function searchInsert(nums, target) {
  const n = nums.length;
  if (target > nums[n - 1]) return n;
  let left = 0;
  let right = n - 1;
  let mid;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);

    if (nums[mid] == target) return mid;

    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return low;
}

