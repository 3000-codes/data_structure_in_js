import LinkedList from "./linkedList";

class Stack<T> {
  list: LinkedList<T> = new LinkedList<T>();

  push(item: T) {
    this.list.prepend(item);
  }

  pop() {
    return this.list.deleteHead();
  }

  peek() {
    return this.list.head?.value;
  }

  isEmpty() {
    return !this.list.head;
  }
}

const stack = new Stack<number>();

stack.push(1);

console.log(stack);

class ArrayStack<T> {
  private items: T[] = [];

  push(item: T) {
    this.items.push(item);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

export { Stack, ArrayStack };
