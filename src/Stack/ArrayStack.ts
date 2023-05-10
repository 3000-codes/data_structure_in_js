class ArrayStack<T> {
  private items: T[] = []; // 存储数据
  // 入栈
  push(item: T) {
    this.items.push(item);
  }

  // 出栈,返回栈顶元素
  pop() {
    return this.items.pop();
  }

  // 返回栈顶元素
  peek() {
    return this.items[this.items.length - 1];
  }

  // 判断栈是否为空
  isEmpty() {
    return this.items.length === 0;
  }

  // 返回栈的大小
  size() {
    return this.items.length;
  }

  // 清空栈
  clear() {
    this.items = [];
  }

  // 转换成数组
  toArray() {
    return this.items.slice();
  }

  // 打印栈
  print() {
    console.log(this.items.join(","));
  }
}

export { ArrayStack };
