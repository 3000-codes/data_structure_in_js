import LinkedList from "./";

function example() {
  const list = new LinkedList<number>();
  list.append(1);
  list.append(2);
  list.append(3);
  list.append(4);
  list.append(5);

  list.print();
  console.log("------------------");
  list.delete(5);
  list.print();
  console.log("------------------");
  list.insertAfter(2.5, 2);
  list.insertAfter(2.5, 2);
  list.insertAfter(2.5, 2);
  list.print();
  console.log("------------------");
  list.delete(2.5);
  list.print();
  console.log("------------------");
  list.reverse();
  list.print();
}
