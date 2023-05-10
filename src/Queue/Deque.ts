// 双端队列
class Deque<T> {
  items: Record<string | number, T> = {}; // 用对象存储数据
  count = 0; // 队列大小
  lowestCount = 0; // 队列头部
  // 在队列头添加元素
  addFront(element: T) {
    if (this.isEmpty()) {
      // 队列为空时，直接调用 addBack 方法
      this.addBack(element);
    } else if (this.lowestCount > 0) {
      // 队列头部不为 0 时，将队列头部索引减一
      this.lowestCount--;
      this.items[this.lowestCount] = element; // 将新元素添加到队列头部
    } else {
      // 队列头部为 0 时，将队列中的所有元素后移一位，再将新元素添加到队列头部
      for (let i = this.count; i > 0; i--) {
        this.items[i] = this.items[i - 1];
      }
      this.items[0] = element; // 将新元素添加到队列头部
    }
    this.count++;
    return element;
  }

  // 在队列头部移除元素
  removeFront() {
    if (this.isEmpty()) {
      return undefined;
    }
    const result = this.items[this.lowestCount]; // 获取队列头部元素
    delete this.items[this.lowestCount]; // 删除队列头部元素
    this.lowestCount++; // 队列头部索引加一
    return result;
  }

  // 在队列尾部添加元素
  addBack(element: T) {
    this.items[this.count] = element;
    this.count++;
    return element;
  }

  // 在队列尾部移除元素
  removeBack() {
    if (this.isEmpty()) {
      return undefined;
    }
    this.count--;
    const result = this.items[this.count];
    delete this.items[this.count];
    return result;
  }

  // 查看队列头部元素
  peekFront() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.lowestCount];
  }

  // 查看队列尾部元素
  peekBack() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.count - 1];
  }

  // 获取队列大小
  size() {
    return this.count - this.lowestCount;
  }

  isEmpty() {
    return this.size() === 0;
  }

  clear() {
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  }

  toString() {
    if (this.isEmpty()) {
      return "";
    }
    let objString = `${this.items[this.lowestCount]}`;
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`;
    }
    return objString;
  }
}
