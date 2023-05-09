import LinkedList from "./linkedList";
// 先进先出(FIFO)的数据结构
class ArrayQueue<T> {
  private items: T[] = [];
  // 入队
  enqueue(item: T) {
    this.items.push(item);
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
    console.log(this.items.join(","));
  }
}

class Queue<T>{
    list: LinkedList<T> = new LinkedList<T>();

    enqueue(item: T) {
        this.list.append(item);
    }

    dequeue() {
        return this.list.deleteHead();
    }

    peek() {
        return this.list.head?.value;
    }

    isEmpty() {
        return !this.list.head;
    }
}

export default Queue;
