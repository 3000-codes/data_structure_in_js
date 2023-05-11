import { decimalToBinary, decimalToAny, factorial } from "./Stack/examples";
import { passGame, test_PriorityQueue, fibonacci } from "./Queue/examples";
import { fileSystem } from "./Tree/example";

// console.log(passGame(["John", "Jack", "Camila", "Ingrid", "Carl"], 7));

// console.log(isPalindrome("abccba"));

// console.log(fibonacci(8));

console.group("栈的应用");
console.log("十进制转二进制：", decimalToBinary(10));
console.log("十进制转任意进制：", decimalToAny(10, 8));
console.log("5 的阶乘：", factorial(5));
console.groupEnd();

console.group("队列的应用");
console.log("击鼓传花：", passGame(["John", "Jack", "Camila", "Ingrid", "Carl"], 7));
// console.log("回文数判断：", isPalindrome("123321"));
console.log("斐波那契数列：", fibonacci(8));
console.log("优先队列：", test_PriorityQueue());
console.groupEnd();

console.group("树的应用");
console.log("文件系统：", fileSystem());
console.groupEnd();
