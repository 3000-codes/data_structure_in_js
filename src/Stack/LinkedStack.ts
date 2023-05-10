import LinkedList from "../LinkedList/index";

class LinkedStack<T> {
  private linkedList: LinkedList<T> = new LinkedList<T>();

  push(value: T) {
    this.linkedList.prepend(value);
  }

  pop() {
    return this.linkedList.deleteHead();
  }

  isEmpty() {
    return !this.linkedList.head;
  }

  toArray() {
    return this.linkedList.toArray();
  }
}

export { LinkedStack };
