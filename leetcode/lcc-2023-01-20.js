function findSubsequences(nums) {
  if (nums.length < 2) return [];
  const result = [];

  helper(0, []);

  return result;

  function helper(start, curr) {
    if (curr.length >= 2) {
      result.push([...curr]);
    }

    const seen = new Set();

    for (let i = start; i < nums.length; i++) {
      const num = nums[i];
      if ((curr.length && num < curr[curr.length - 1]) || seen.has(nums[i]))
        continue;
      seen.add(num);
      curr.push(num);
      helper(i + 1, curr);
      curr.pop();
    }
    return;
  }
}

const nums = [4, 6, 7, 7];
console.log(findSubsequences(nums));
