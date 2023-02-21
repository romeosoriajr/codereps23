function singleNonDuplicate(nums) {
  const n = nums.length;

  let left = 0;
  let right = n - 1;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (mid % 2 == 1) mid--;
    if (nums[mid] != nums[mid + 1]) {
      right = mid;
    } else {
      left = mid + 2;
    }
  }

  return nums[left];
}

