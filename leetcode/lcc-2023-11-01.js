function findMode(root) {
  let maxSeen = 0;
  const seen = new Map(); // num, seen

  const result = [];

  helper(root);

  return result;

  function helper(node) {
    if (!node) return;

    const count = (seen.get(node.val) || 0) + 1;

    seenCount.set(node.val, count);

    if (count == maxSeen) {
      result.push(node.val);
    } else if (count > maxSeen) {
      maxSeen = count;
      result = [node.val];
    }

    helper(node.left);
    helper(node.right);
  }
}
