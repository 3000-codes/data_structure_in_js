import { ArrayQueue } from "./ArrayQueue";
import { PriorityQueue } from "./PriorityQueue";

// 队列的应用

// 1. 击鼓传花
function passGame(nameList: string[], num: number) {
  const queue = new ArrayQueue<string>();
  for (const name of nameList) {
    queue.enqueue(name); // 将所有人加入队列
  }
  while (queue.size > 1) {
    // 队列中只剩下一个人时，游戏结束
    for (let i = 0; i < num - 1; i++) {
      const deq = queue.dequeue()!; // 将前 num - 1 个人从队列头部移除
      queue.enqueue(deq); // 并重新加入队列尾部
    }
    queue.dequeue();
  }
  return queue.peek(); // 返回剩下的那个人
}

// 2. 回文数判断 (双端队列实现)
function isPalindrome(word: string) {}

// 3. 斐波那契数列
function fibonacci(n: number) {
  const queue = new ArrayQueue<number>();
  queue.enqueue(1);
  queue.enqueue(1);
  for (let i = 0; i < n - 2; i++) {
    const deq1 = queue.dequeue()!;
    const deq2 = queue.dequeue()!;
    queue.enqueue(deq2);
    queue.enqueue(deq1 + deq2);
  }
  return queue.peek();
}

function test_PriorityQueue() {
  const priorityQueue = new PriorityQueue();

  // 入队 enqueue() 测试
  priorityQueue.enqueue("A", 10);
  priorityQueue.enqueue("B", 15);
  priorityQueue.enqueue("C", 11);
  priorityQueue.enqueue("D", 20);
  priorityQueue.enqueue("E", 18);
  priorityQueue.enqueue("F", 19);

  return priorityQueue;
}

export { passGame, isPalindrome, fibonacci, test_PriorityQueue };
