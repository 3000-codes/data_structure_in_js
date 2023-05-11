class TreeNode<T> {
  parent: TreeNode<T> | null;
  children: TreeNode<T>[];
  value: T;
  constructor(value: T, parent: TreeNode<T> | null = null) {
    this.value = value;
    this.parent = parent;
    this.children = [];
  }
  addChild(value: T) {
    const node: TreeNode<T> = new TreeNode(value, this);
    this.children.push(node);
    return { node, index: this.children.length - 1 };
  }
  removeChild(index: number) {
    this.children.splice(index, 1);
  }
}

class Tree<T> {
  root: TreeNode<T>;
  constructor(value: T) {
    this.root = new TreeNode(value);
  }
}



export { Tree, TreeNode };
