function isCompleteTree(root) {
  const queue = [];

  queue.push(root);

  let hasNull = false;

  while (queue.length) {
    const curr = queue.shift();

    if (curr == null) hasNull = true;
    else {
      if (hasNull) return false;
      queue.push(curr.left);
      queue.push(curr.right);
    }
  }

  return true;
}
