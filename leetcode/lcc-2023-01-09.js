function preorderTraversal(root) {
  const result = [];

  helper(root, result);

  return result;

  function helper(node, arr) {
    if (!node) return;
    arr.push(node.val);
    helper(node.left, arr);
    helper(node.right, arr);
  }

}

