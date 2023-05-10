import { ArrayStack } from "./";

// 栈的应用

// 1.十进制转二进制(除2取余法)
function decimalToBinary(decNumber: number) {
  const stack = new ArrayStack<number>();

  while (decNumber > 0) {
    stack.push(decNumber % 2); // 余数入栈
    decNumber = Math.floor(decNumber / 2); // 商作为下一次运算的被除数
  }
  let binaryStr = "";
  while (!stack.isEmpty()) {
    binaryStr += stack.pop(); // 依次出栈
  }
  return binaryStr; // 返回二进制字符串
}

// 2.十进制转任意进制(除n取余法)
function decimalToAny(decNumber: number, base: number) {
  const stack = new ArrayStack<number>();
  while (decNumber > 0) {
    stack.push(decNumber % base); // 余数入栈
    decNumber = Math.floor(decNumber / base); // 商作为下一次运算的被除数
  }
  let binaryStr = "";
  while (!stack.isEmpty()) {
    binaryStr += stack.pop(); // 依次出栈
  }
  return binaryStr; // 返回二进制字符串
}

// 3.括号匹配:判断表达式中的括号是否匹配(此处只考虑小括号)
function isBracketMatch(str: string) {
  const stack = new ArrayStack<string>();
  for (let i = 0; i < str.length; i++) {
    const item = str[i];
    if (item === "(") {
      stack.push(item);
    } else if (item === ")") {
      if (stack.isEmpty()) {
        return false;
      }
      stack.pop();
    }
  }
  return stack.isEmpty();
}

// 4.栈实现递归
// 递归的本质是栈结构,可以用栈来模拟递归的过程
function factorial(n: number) {
  const stack = new ArrayStack<number>();
  let res = 1;
  while (n > 1) {
    stack.push(n--);
  }
  while (!stack.isEmpty()) {
    res *= stack.pop()!;
  }
  return res;
}

// 5.中缀表达式转后缀表达式(未完成)
// 规则1: 如果遇到操作数,我们就直接将其输出。
// 规则2: 如果遇到操作符,我们就将其放入到栈中,遇到左括号时,我们也将其放入栈中。
// 规则3: 如果遇到一个右括号,那么就将栈元素弹出,将弹出的操作符输出直到遇到左括号为止。注意,左括号只弹出并不输出。
// 规则4: 如果遇到任何其他的操作符,如(*/+-等,也将其弹出。但是,在压入新操作符之前,需要先检查栈顶操作符的优先级
// 规则5: 如果遇到了输入的末尾,那么将栈中所有元素依次弹出。
// 规则6: 最终得到的输出即为逆波兰式。
function infixToSuffix(str: string) {
  return str;
}

// 6.后缀表达式求值(未完成)
// 规则1: 从左到右遍历后缀表达式
// 规则2: 如果遇到操作数,则将操作数压入堆栈
// 规则3: 如果遇到操作符,弹出栈顶的两个操作数,用操作符对它们做相应的计算(次顶元素 OP 栈顶元素),并将结果入栈
// 规则4: 重复上述过程直到表达式最右端
// 规则5: 最后运算得出的值即为表达式的结果

// 其他 : 用栈实现浏览器的前进后退功能, 用栈实现编辑器的撤销重做功能, 等等

export { decimalToBinary, decimalToAny, isBracketMatch, infixToSuffix, factorial };
