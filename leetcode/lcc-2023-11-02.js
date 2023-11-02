function averageOfSubtree(root) {
  let result = 0;

  helper(root);

  return result;

  function helper(root) {
    if (!root) return [0, 0];

    let [leftSum, leftNodes] = helper(root.left);
    let [rightSum, rightNodes] = helper(root.right);

    const totalNodes = leftNodes + rightNodes + 1;
    const total = leftSum + rightSum + root.val;

    const avg = parseInt(total / totalNodes);
    if (avg === root.val) {
      result += 1;
    }

    return [total, totalNodes];
  }
}
