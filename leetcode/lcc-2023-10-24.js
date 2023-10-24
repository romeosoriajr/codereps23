function largestValues(root) {
  const result = [];

  const queue = [root];

  while (queue.length) {
    const width = queue.length;

    let max = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < width; i++) {
      const node = queue.shift();

      max = Math.max(max, node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    result.push(max);
  }

  return result;
}
