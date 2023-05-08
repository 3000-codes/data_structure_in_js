class LinkNode<T> {
  value: T;
  next: LinkNode<T> | null;
  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList<T> {
  head: LinkNode<T> | null = null;
  tail: LinkNode<T> | null = null;

  // 追加节点
  append(value: T) {
    const node = new LinkNode(value); // 创建一个节点
    if (this.tail) {
      // 如果尾节点存在, 将尾节点的next指向新节点
      this.tail.next = node;
    }
    this.tail = node; // 新节点成为尾节点
    if (!this.head) {
      // 如果头节点不存在, 则新节点同时成为头节点
      this.head = node;
    }
  }
  // 添加到头部
  prepend(value: T) {
    const node = new LinkNode(value);
    if (this.head) {
      // 如果头节点存在, 将新节点的next指向头节点
      node.next = this.head;
    }
    this.head = node; // 新节点成为头节点
    if (!this.tail) {
      // 如果尾节点不存在, 则新节点同时成为尾节点
      this.tail = node;
    }
  }

  // 删除节点
  delete(value: T) {
    if (!this.head) return; // 如果头节点不存在, 直接返回
    if (this.head.value === value) {
      // 如果头节点的值等于要删除的值
      this.head = this.head.next; // 将头节点指向下一个节点
      return;
    }
    let current = this.head;
    while (current.next) {
      // 遍历链表
      if (current.next.value === value) {
        // 如果下一个节点的值等于要删除的值
        current.next = current.next.next; // 将当前节点的next指向下下个节点
      } else {
        current = current.next;
      }
    }
  }

  // 插入节点: 在某个节点后面插入
  insertAfter(value: T, target: T) {
    const node = new LinkNode(value);
    let current = this.head;
    while (current) {
      if (current.value === target) {
        // 找到要插入的节点
        node.next = current.next; // 将target节点的next指向新节点
        current.next = node; // 将当前节点的next指向新节点
        break;
      }
      current = current.next;
    }
  }

  //  查找节点
  find(value: T) {
    let current = this.head;
    if(!current) return null;
    while (current) {
      if (current.value === value) {
        return current;
      }
      current = current.next;
    }
    return null;
  }

  // 反转链表
  reverse(){
    let current = this.head;
    let prev = null;
    while(current){
      const next = current.next; // 保存下一个节点
      current.next = prev; // 当前节点的next指向上一个节点
      prev = current; // 上一个节点变成当前节点
      current = next; // 当前节点变成下一个节点
    }
    this.tail = this.head;
    this.head = prev;
  }

  print() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }

  toArray() {
    const result: T[] = [];
    let current = this.head;
    while (current) {
      result.push(current.value);
      current = current.next;
    }
    return result;
  }

  [Symbol.iterator]() {
    let current = this.head;
    return {
      next() {
        if (current) {
          const value = current.value;
          current = current.next;
          return {
            value,
            done: false,
          };
        } else {
          return {
            done: true,
            value: undefined,
          };
        }
      },
    };
  }
}

const list = new LinkedList<number>();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);

list.print();
console.log("------------------");
list.delete(5);
list.print();
console.log("------------------");
list.insertAfter(2.5, 2);
list.insertAfter(2.5, 2);
list.insertAfter(2.5, 2);
list.print();
console.log("------------------");
list.delete(2.5);
list.print();
console.log("------------------");
list.reverse();
list.print();