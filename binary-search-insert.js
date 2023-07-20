class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  
  insert(value) {
    this.root = this.insertHelper(this.root, value);
  }
  
  insertHelper(root, value) {
    if (!root) {
      return new TreeNode(value);  
    }
    
    if (root.value > value) {
      root.left = this.insertHelper(root.left, value);
    } else if (root.value < value) {
      root.right = this.insertHelper(root.right, value);
    }
    
    return root;
  }
}

const tree = new BinarySearchTree();

tree.insert(4);
tree.insert(5);
tree.insert(1);
tree.insert(2);
tree.insert(0);
tree.insert(-1);

console.log(tree);