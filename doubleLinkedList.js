class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  pop() {
    if (!this.head) {
      return undefined;
    }

    let temp = this.head;
    let prev = this.head;

    while (temp.next) {
      prev = temp;
      temp = prev.next;
    }

    temp.prev = null;
    this.tail = prev;
    prev.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return temp;
  }

  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return newNode;
  }

  shift() {
    if (!this.head) {
      return undefined;
    }

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }

    const old = this.head;

    this.head = old.next;
    old.next = null;
    this.head.prev = null;

    this.length--;
    return old;
  }
}

const linkedList = new DoublyLinkedList();
linkedList.push(1);
linkedList.push(2);
linkedList.push(3);
// console.log(linkedList.pop());
// console.log(linkedList.unshift(0));
console.log(linkedList.shift());
console.log(linkedList);
