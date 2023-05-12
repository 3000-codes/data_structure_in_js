import LinkedList from "./";
import DoublyLinkedList,{DoublyLinkNode} from "./DoublyLinkedList";
import LRU from "./LRU";

// 判断回文字符串
function isPalindrome(str: string) {
  const list = new LinkedList<string>();
  for (let i = 0; i < str.length; i++) {
    list.append(str[i]);
  }
  let current = list.head;
  let reverseStr = "";
  while (current) {
    reverseStr = current.value + reverseStr;
    current = current.next;
  }
  return reverseStr === str;
}

function LRUcache(){

}



export { isPalindrome,LRUcache };