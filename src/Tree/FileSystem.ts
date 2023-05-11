class TreeNode {
  parent: TreeNode | null;
  children: TreeNode[];
  value: string;
  constructor(value: string, parent: TreeNode | null = null) {
    this.value = value;
    this.parent = parent;
    this.children = [];
  }
  addChild(value: string) {
    const segments = value.split("/");
    if (segments.length === 0) return;
    if (segments.length === 1) {
      // 如果只有一个元素，那么就是当前节点的子节点
      const node: TreeNode = new TreeNode(value, this);
      this.children.push(node);
      return { node, index: this.children.length - 1 };
    }
    const existingChildNode = this.children.find((child) => child.value === segments[0]); // 查找当前节点的子节点中是否有与要添加的节点相同的节点
    if (existingChildNode) {
      existingChildNode.addChild(segments.slice(1).join("/")); // 如果有相同的节点，那么就在这个节点上继续添加子节点
    } else {
      // 如果没有相同的节点，那么就创建一个新的节点，并添加到当前节点的子节点中
      const node: TreeNode = new TreeNode(segments[0], this);
      node.addChild(segments.slice(1).join("/")); // 继续添加子节点
      this.children.push(node);
    }
  }
  removeChild(path: string) {
    const segments = path.split("/");
    if (segments.length === 0) return;
    if (segments.length === 1) {
      const existingNodeIndex = this.children.findIndex((child) => child.value === segments[0]);
      if (existingNodeIndex < 0) throw new Error(path + " not found");
      this.children.splice(existingNodeIndex, 1);
    }
    const existingChildNode = this.children.find((child) => child.value === segments[0]);
    if (existingChildNode) {
      existingChildNode.removeChild(segments.slice(1).join("/"));
    }
  }
}

class FileSystem {
  root: TreeNode;
  constructor(value: string) {
    this.root = new TreeNode(value);
  }
  add(value: string) {
    this.root.addChild(value);
  }
  remove(path: string) {
    this.root.removeChild(path);
  }
}

export default FileSystem;
