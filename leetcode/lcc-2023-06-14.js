function getMinimumDifference(root) {
  let result = Number.MAX_SAFE_INTEGER;
  let prev = Number.MAX_SAFE_INTEGER;

  helper(root);
  return result;

  function helper(node) {
    if (node.left) {
      helper(node.left);
    }

    result = Math.min(Math.abs(node.val - prev), result);
    prev = node.val;

    if (node.right) {
      helper(node.right);
    }
  }
}
