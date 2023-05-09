import LinkedList from "./linkedList";
// js中的对象就是一种hash table

function demo1() {
  const word = "Hello World";
  // 查找第一个重复的字符 O(n^2)
  function findFirstReq(str: string) {
    let len = str.length;
    for (let i = 0; i < len; i++) {
      for (let j = i + 1; j < len; j++) {
        if (str[i] === str[j]) {
          return str[i];
        }
      }
    }
  }

  console.log(findFirstReq(word));
}

function demo2() {
  const word = "Hello World";
  // 查找第一个重复的字符 O(n)
  function findFirstReq(str: string) {
    let len = str.length;
    let map = new Map();
    for (let i = 0; i < len; i++) {
      if (map.has(str[i])) {
        return str[i];
      } else {
        map.set(str[i], 1);
      }
    }
  }

  console.log(findFirstReq(word));
}

// 哈希表: 一种以键-值(key-value) 存储数据的结构，我们只要输入待查找的值即key，即可查找到其对应的值value。
// 可以看做
class HashTable {
  buckets: any[] = Array(128).fill(null);

  hash(key: string) {
    // 创建一个唯一的hash值
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % 128;
  }

  set(key: string, value: any) {
    const keyHash = this.hash(key);
    this.buckets[keyHash] = value;
  }

  get(key: string) {
    const keyHash = this.hash(key);
    return this.buckets[keyHash];
  }

  showInfo() {
    for (let i = 0; i < 128; i++) {
      if (this.buckets[i] !== null) {
        console.log(i, this.buckets[i]);
      }
    }
  }
}

function demo3() {
  const hashTable = new HashTable();
  hashTable.set("name", "张三");
  hashTable.set("age", 18);
  hashTable.showInfo();
  console.log(hashTable.get("name"));
}

class HashTablePro {
  size: number;
  buckets: any[];
  constructor() {
    this.size = 16;
    this.buckets = Array.from({ length: this.size }, () => []);
  }

  hash(key: string) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.size;
  }

  set(key: string, value: any) {
    const keyHash = this.hash(key);
    const bucketArray = this.buckets[keyHash];
    const storedElement = bucketArray.find((element: any) => {
      // 通过key找到对应的value
      return element.key === key;
    });
    // 如果找到了就更新value，否则就push到数组中
    if (storedElement) {
      storedElement.value = value;
    } else {
      bucketArray.push({ key, value });
    }
  }

  get(key: string) {
    const keyHash = this.hash(key);
    const bucketArray = this.buckets[keyHash];
    const storedElement = bucketArray.find((element: any) => {
      return element.key === key;
    });
    return storedElement;
  }

  showInfo() {
    for (let i = 0; i < this.size; i++) {
      if (this.buckets[i] !== null) {
        console.log(i, this.buckets[i]);
      }
    }
  }
}

function demo4() {
  const hashTable = new HashTablePro();
  hashTable.set("name", "张三");
  hashTable.set("age", 18);
  hashTable.showInfo();
  console.log(hashTable.get("name"));
}

class HashTableProMax {
  buckets: any[] = Array(128).fill(null);

  hash(key: string) {
    // 创建一个唯一的hash值
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % 128;
  }

  set(key: string, value: any) {
    let keyHash = this.hash(key);
    // 开放寻址法
    if (this.buckets[keyHash] === null || this.buckets[keyHash].key === key) {
      this.buckets[keyHash] = { key, value };
    } else {
      while (this.buckets[keyHash] !== null) {
        keyHash++;
      }
      this.buckets[keyHash] = { key, value };
    }
  }

  get(key: string) {
    let keyHash = this.hash(key);
    while (this.buckets[keyHash].key !== key) {
      keyHash++;
    }
    return this.buckets[keyHash];
  }

  showInfo() {
    for (let i = 0; i < 128; i++) {
      if (this.buckets[i] !== null) {
        console.log(i, this.buckets[i]);
      }
    }
  }
}

function demo5() {
  const hashTable = new HashTableProMax();
  hashTable.set("name", "张三");
  hashTable.set("age", 18);
  hashTable.showInfo();
  console.log(hashTable.get("name"));
}

export default HashTable;
export { demo1, demo2, demo3, demo4, demo5 };
