class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
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

    this.tail = prev;
    this.tail.next = null;
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
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  shift() {
    if (!this.head) {
      return undefined;
    }

    const old = this.head;
    this.head = old.next;

    old.next = null;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }

    return old;
  }

  getFirst() {
    if (!this.head) {
      return undefined;
    }
    return this.head;
  }

  getLast() {
    if (!this.tail) {
      return undefined;
    }

    return this.tail;
  }

  get(index) {
    let counter = 0;
    let temp = this.head;

    while (temp) {
      if (counter === index) {
        return temp;
      }

      counter++;
      temp = temp.next;
    }

    return undefined;
  }

  set(index, value) {
    // let temp = this.head;
    // let counter = 1;

    // while (temp) {
    //   if (counter === index) {
    //     temp.value = value;
    //     return temp;
    //   }

    //   counter++;
    //   temp = temp.next;
    // }
    // return undefined;

    let temp = this.get(index);
    if (temp) {
      temp.value = value;
      return true;
    }
    return false;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) {
      return undefined;
    }

    if (index === 0) {
      return this.unshift(value);
    }

    if (index === this.length) {
      return this.push(value);
    }

    const newNode = new Node(value);

    let temp = this.get(index - 1);

    if (!temp) {
      return undefined;
    }

    newNode.next = temp.next;
    temp.next = newNode;

    this.length++;

    return newNode;
  }
}

const myLinkedList = new LinkedList();
myLinkedList.push(10);
myLinkedList.push(20);
myLinkedList.push(40);
myLinkedList.insert(2, 30);
// myLinkedList.unshift(9);

// console.log(myLinkedList.getFirst());
// console.log(myLinkedList.getLast());
// console.log(myLinkedList.get(1));
// console.log(myLinkedList.set(1, 0));
console.log(myLinkedList);
