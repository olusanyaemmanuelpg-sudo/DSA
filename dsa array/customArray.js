class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  get(index) {
    return this.data[index];
  }

  pop() {
    delete this.data[this.length - 1];
    this.length--;
  }

  shift() {
    const firstItem = this.data[0];

    for (let i = 0; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }

    delete this.data[this.length - 1];

    this.length--;

    return firstItem;
  }

  delete(index) {
    const deletedItem = this.data[index];

    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }

    delete this.data[this.length - 1];
    this.length--;

    return deletedItem;
  }
}

const newArray = new MyArray();

newArray.push('Apple');
newArray.push('Orange');
newArray.push('Pineapple');
newArray.push('Pear');
newArray.push('Grape');

//newArray.pop();
//console.log(newArray.get(3));

console.log(newArray);
console.log(newArray.shift());
console.log(newArray);
console.log(newArray.delete(2));
console.log(newArray);
