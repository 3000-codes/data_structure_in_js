# data_structure_in_js

+ Array:
  javascript中的数组是一种特殊的对象，它的键名是按照一定规则排列的整数，而且有length属性，可以用来存储任何类型的数据。
+ Set:
  Set对象允许你存储任何类型的唯一值，无论是原始值或者是对象引用。
+ Object:
  Object对象是JavaScript中最常见的一种类型。Object对象的键名只能是字符串或者Symbol类型(其他类型将转化为字符串)，值可以是任意类型。
+ Map:
  Map对象保存键值对，并且能够记住键的原始插入顺序。任何值(对象或者原始值) 都可以作为一个键或一个值。

### Array

#### 1. 数组的创建

```javascript
// 1. 使用Array构造函数
var arr = new Array();
var arr = new Array(1, 2, 3);
var arr = new Array(3); // 创建一个长度为3的数组
// 2. 使用数组字面量
var arr = [];
var arr = [1, 2, 3];
```

#### 2. 数组的访问

```javascript
var arr = [1, 2, 3];
// 正常索引
console.log(arr[0]); // 1
console.log(arr[1]); // 2
console.log(arr[2]); // 3

console.log(arr.at(0)); // 1
console.log(arr.at(1)); // 2
console.log(arr.at(2)); // 3

// 超出索引
console.log(arr[3]); // undefined
console.log(arr.at(3)); // undefined
// 负索引
console.log(arr[-1]); // undefined
console.log(arr.at(-1)); // 3
```

#### 3. 数组的遍历

```javascript
var arr = [1, 2, 3];
// 1. for循环
for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
// 2. for...of
for (var item of arr) {
  console.log(item);
}
// 3. forEach
arr.forEach(function (item) {
  console.log(item);
});

...and more
```

#### 4. 数组的添加

```javascript
var arr = [1, 2, 3];
// 1. push: 在数组末尾添加一个或多个元素，并返回数组的新长度
arr.push(4);
console.log(arr); // [1, 2, 3, 4]

// 2. unshift: 在数组开头添加一个或多个元素，并返回数组的新长度
arr.unshift(0);
console.log(arr); // [0, 1, 2, 3, 4]

// 3. splice: 在指定位置插入一个或多个元素，并返回数组的新长度
arr.splice(2, 0, 1.5);

// 4. concat: 连接两个或多个数组，并返回结果
var arr2 = [5, 6, 7];
var arr3 = arr.concat(arr2);
console.log(arr3); // [0, 1, 1.5, 2, 3, 4, 5, 6, 7]
```

#### 5. 数组的删除

```javascript
var arr = [0, 1, 1.5, 2, 3, 4, 5, 6, 7];
// 1. pop: 删除数组末尾的元素，并返回该元素
arr.pop();
console.log(arr); // [0, 1, 1.5, 2, 3, 4, 5, 6]

// 2. shift: 删除数组开头的元素，并返回该元素
arr.shift();
console.log(arr); // [1, 1.5, 2, 3, 4, 5, 6]

// 3. splice: 删除指定位置的元素，并返回该元素
arr.splice(2, 1);
console.log(arr); // [1, 1.5, 3, 4, 5, 6]

// 4. slice: 删除指定位置的元素，并返回该元素
arr.slice(2, 3);
console.log(arr); // [1, 1.5, 4, 5, 6]

// 5. length: 将数组截取为指定长度
arr.length = 3;
console.log(arr); // [1, 1.5, 3]
```

#### 6. 数组的修改

```javascript
var arr = [1, 2, 3];
// 1. 直接修改
arr[0] = 0;
console.log(arr); // [0, 2, 3]

// 2. splice: 修改指定位置的元素，并返回该元素
arr.splice(1, 1, 1.5);
console.log(arr); // [0, 1.5, 3]

// 3. fill: 用指定的元素填充数组
arr.fill(0);
console.log(arr); // [0, 0, 0]
```

### Set

#### 1. Set的创建

```javascript
//  使用Set构造函数
var set = new Set();
var set = new Set([1, 2, 3]);
```

#### 2. Set的添加

```javascript
var set = new Set([1, 2, 3]);
// 1. add: 添加一个元素
set.add(4);
console.log(set); // Set(4) {1, 2, 3, 4}

// 2. add: 添加多个元素
set.add(5).add(6);

// 3. add: 添加一个已存在的元素
set.add(1); // 不会报错，但是也不会添加
console.log(set); // Set(6) {1, 2, 3, 4, 5, 6}
```

#### 3. Set的删除

```javascript
var set = new Set([1, 2, 3]);
// 1. delete: 删除一个元素: 如果该元素存在，则返回true，否则返回false
set.delete(3); // true
console.log(set); // Set(2) {1, 2}

// 2. clear: 清空所有元素
set.clear();
console.log(set); // Set(0) {}
```

#### 4. Set的遍历

```javascript
var set = new Set([1, 2, 3]);
// 1. for...of
for (var item of set) {
  console.log(item);
}
// 2. forEach
set.forEach(function (item) {
  console.log(item);
});
```

#### 5. Set的判断

```javascript
var set = new Set([1, 2, 3]);
// 1. has: 判断是否存在某个元素
console.log(set.has(1)); // true
console.log(set.has(4)); // false

// 2. size: 获取元素个数
console.log(set.size); // 3
```

#### 6. Set的转换

```javascript
var set = new Set([1, 2, 3]);
// 1. Array.from: 将Set转换为数组
var arr = Array.from(set);
console.log(arr); // [1, 2, 3]

// 2. ...: 将Set转换为数组
var arr = [...set];
console.log(arr); // [1, 2, 3]
```

### Set VS Array

+ Set不允许重复元素, Array允许重复元素
+ Set不支持索引, Array支持索引
+ Set不支持length属性, Array支持length属性
+ Set的遍历顺序是根据插入顺序来定的, Array的遍历顺序是根据索引顺序来定的
+ Set通常用于对数组去重,或者判断某个元素是否存在
+ Array通常用于存储数据,或者对数据进行操作

### Object

#### 1. Object的创建,访问

```javascript
// 1. 使用Object构造函数
var obj = new Object();
var obj = new Object({ name: "张三", age: 18 });

// 2. 使用对象字面量
var obj = {};
var obj = { name: "张三", age: 18 };
```

#### 2. Object的添加

```javascript
var obj = { name: "张三", age: 18 };

// 1. 直接添加
obj.sex = "男";
obj["height"] = 180;

// 2. Object.defineProperty: 添加一个属性
Object.defineProperty(obj, "weight", {
  value: 70,
  writable: true,
  enumerable: true,
  configurable: true,
});

// 3. Object.defineProperties: 添加多个属性
```

#### 3. Object的删除

```javascript
var obj = { name: "张三", age: 18 };

// 1. 直接删除
delete obj.name;

// 2. 实现omit函数
const omit=(prop,{[prop]:_,...rest})=>rest;
omit(obj);

// 3. 遍历删除
```

#### 4. Object的遍历

```javascript
var obj = { name: "张三", age: 18 };

// 1. for...in
for (var key in obj) {
  console.log(key, obj[key]);
}

```

#### 5. Object的判断

```javascript
var obj = { name: "张三", age: 18 };

// 1. hasOwnProperty: 判断是否存在某个属性
console.log(obj.hasOwnProperty("name")); // true

// 2. in: 判断是否存在某个属性,包括原型链上的属性
console.log("name" in obj); // true

```

### Map

#### 1. Map的创建,访问

```javascript
//  使用Map构造函数
var map = new Map();
var map = new Map([
  ["name", "张三"],
  ["age", 18],
]);

//  获取一个元素
console.log(map.get("name")); // 张三
```

#### 2. Map的添加/修改

```javascript
var map = new Map([
  ["name", "张三"],
  ["age", 18],
]);

map.set('sex','男'); //sex不存在, 添加set
map.set('age',20); // age存在, 修改
```

#### 3. Map的删除

```javascript
var map = new Map([
  ["name", "张三"],
  ["age", 18],
]);

// 1. delete: 删除一个元素: 如果该元素存在，则返回true，否则返回false
map.delete("age"); // true
console.log(map); // Map(1) {"name" => "张三"}

// 2. clear: 清空所有元素
map.clear();
```

#### 4. Map的遍历

```javascript
var map = new Map([
  ["name", "张三"],
  ["age", 18],
]);

// 1. for...of
for (var item of map) {
  console.log(item);
}

// 2. forEach
map.forEach(function (value, key) {
  console.log(key, value);
});
```

#### 5. Map的判断

```javascript
var map = new Map([
  ["name", "张三"],
  ["age", 18],
]);

// 1. has: 判断是否存在某个元素
console.log(map.has("name")); // true

// 2. size: 获取元素个数
console.log(map.size); // 2
```

### Map VS Object

+ Map的key可以是任意数据类型, Object的key只能是字符串或者Symbol
+ Map的遍历顺序是根据插入顺序来定的
+ Object的遍历顺序是根据...

## 拓展类型

### Stack
