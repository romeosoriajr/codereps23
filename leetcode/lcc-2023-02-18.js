function invertTree(root) {
  if (!root) return root;

  if (root.left) invertTree(root.left);
  if (root.right) invertTree(root.right);
  [root.left, root.right] = [root.right, root.left];

  return root;
}


