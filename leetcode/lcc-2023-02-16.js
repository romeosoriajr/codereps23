function maxDepth(root) {

  const queue = [root];

  let depth = 0;

  while (queue.length) {
    depth += 1;

    const breadth = queue.length;

    while (breadth--) {
      const node = queue.shift();

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  return depth;
}
