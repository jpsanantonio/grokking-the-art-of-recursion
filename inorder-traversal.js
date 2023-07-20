class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function inorderTraversal(root) {
  const result = [];
  
  inorderTraversalHelper(root, result);
  
  return result;
}

function inorderTraversalHelper(node, result) {
  if (!node) {
    return;
  }
  
  inorderTraversalHelper(node.left, result);
  result.push(node.value);
  inorderTraversalHelper(node.right, result);
}

const root = new TreeNode(1);
root.right = new TreeNode(2);
root.right.left = new TreeNode(3);

const result = inorderTraversal(root);

console.log("Inorder Traversal:", result);