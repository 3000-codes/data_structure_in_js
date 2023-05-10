import LinkedList from "@/LinkedList";

class LinkedQueue<T> {
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

export { LinkedQueue };
