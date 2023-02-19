function zigzagLevelOrder(root) {
  if (!root) return [];
  const queue = [root];
  let toggle = true;

  const result = [];
  while (queue.length) {
    const breadth = queue.length;

    const level = [];

    for (let i = 0; i < breadth; i++) {
      const node = queue.shift();
      level.push(node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    if (toggle) {
      result.push(level);
    } else {
      const reverse = [];

      for (const val of level) {
        reverse.unshift(val);
      }

      result.push(reverse);
    }

    toggle = !toggle;
  }

  return result;
}
