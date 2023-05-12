import { LinkNode, LinkedList } from ".";

export class DoublyLinkNode<T> extends LinkNode<T> {
  prev: DoublyLinkNode<T> | null = null;
  next: DoublyLinkNode<T> | null = null;
  constructor(value: T) {
    super(value);
  }
}

export default class DoublyLinkedList<T> extends LinkedList<T> {
  tail: DoublyLinkNode<T> | null = null;
  head: DoublyLinkNode<T> | null = null;
  append(value: T) {
    const node = new DoublyLinkNode(value);
    if (!this.head) {
      // 如果头节点不存在, 则新节点同时成为头节点, 尾节点
      this.head = node;
      this.tail = node;
    } else {
      // 如果头节点存在, 将尾节点的next指向新节点
      this.tail!.next = node;
      node.prev = this.tail;
      this.tail = node; // 新节点成为尾节点
    }
  }
  prepend(value: T) {
    const node = new DoublyLinkNode(value);
    if (!this.head) {
      // 如果头节点不存在, 则新节点同时成为头节点, 尾节点
      this.head = node;
      this.tail = node;
    } else {
      // 如果头节点存在, 将新节点的next指向头节点
      node.next = this.head;
      this.head.prev = node;
      this.head = node; // 新节点成为头节点
    }
  }
  delete(value: T) {
    if (!this.head) return; // 如果头节点不存在, 直接返回
    if (this.head.value === value) {
      // 如果头节点的值等于要删除的值
      this.head = this.head.next; // 将头节点指向下一个节点
      if (this.head) { // 如果新头节点存在,即非尾节点
        this.head.prev = null;
      } else {
        this.tail = null;
      }
      return;
    }
    let current = this.head;
    while (current.next) {
      // 遍历链表
      if (current.next.value === value) {
        // 如果下一个节点的值等于要删除的值
        current.next = current.next.next; // 将当前节点的next指向下下个节点
        if (current.next) {
          current.next.prev = current;
        } else {
          this.tail = current;
        }
      } else {
        current = current.next;
      }
    }
  }

  insertAfter(value: T, afterValue: T) {
    const node = new DoublyLinkNode(value);
    if (!this.head) {
      // 如果头节点不存在, 则新节点同时成为头节点, 尾节点
      this.head = node;
      this.tail = node;
    } else {
      let current = this.head;
      while (current) {
        if (current.value === afterValue) {
          node.next = current.next;
          node.prev = current;
          current.next = node;
          if (node.next) {
            node.next.prev = node;
          } else {
            this.tail = node;
          }
          return;
        }
        current = current.next!;
      }
    }
  }

  size() {
    let count = 0;
    let current = this.head;
    while (current) {
      count++;
      current = current.next!;
    }
    return count;
  }
}
