function maxLevelSum(root) {
  const queue = [root];
  let maxSum = Number.MIN_SAFE_INTEGER;
  let result = -1;
  let currLevel = 0;

  while (queue.length) {
    currLevel += 1;
    const breadth = queue.length;

    let currSum = 0;
    for (let i = 0; i < breadth; i++) {
      const node = queue.shift();

      currSum += node.val;

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    if (currSum > maxSum) {
      result = currLevel;
      maxSum = currSum;
    }
  }

  return result;
}
