// 优先队列
class QueueElement<T> {
  constructor(public element: T, public priority: number) {
    this.element = element;
    this.priority = priority;
  }
}

class PriorityQueue<T> {
  private items: QueueElement<T>[] = [];
  // 入队
  enqueue(element: T, priority: number) {
    //priority 值越小，优先级越大
    const queueElement = new QueueElement(element, priority); // 创建新的项
    if (this.isEmpty()) {
      // 队列为空时，直接将新项入队, 优先级为 0
      this.items.push(queueElement);
    } else {
      let added = false; // 用于标记新项是否已经被添加
      for (let i = 0; i < this.items.length; i++) {
        // 遍历队列，找到第一个优先级比新项小的项，将新项插入到其前面
        if (queueElement.priority < this.items[i].priority) {
          this.items.splice(i, 0, queueElement); // 插入新项
          added = true; // 标记新项已经被添加
          break
        }
      }
      if (!added) {
        // 如果新项没有被添加，说明新项的优先级是最小的，直接将新项入队尾
        this.items.push(queueElement);
      }
    }
  }
  // 出队
  dequeue() {
    return this.items.shift();
  }
  // 查看队首元素
  peek() {
    return this.items[0];
  }
  // 判断队列是否为空
  isEmpty() {
    return this.items.length === 0;
  }
  // 获取队列的大小
  get size() {
    return this.items.length;
  }
  // 清空队列
  clear() {
    this.items = [];
  }
  toArray() {
    return this.items.slice();
  }
  print() {
    console.log(this.items.map((item) => `${item.element}-${item.priority}`).join(","));
  }
}


export { PriorityQueue };