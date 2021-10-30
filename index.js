function funcSquiare(n) {
  return n * n;
}
function concatArr(arr) {
  for (let i = 0; i < arr.length; i++) {
    return arr;
  }
}

class MyArray {
  constructor(array) {
    this.length = 0;
    for (let i = 0; i < arguments.length; i++) {
      this.push(arguments[i]);
    }
  }
  push() {
    for (let i = 0; i < arguments.length; i++) {
      this[this.length++] = arguments[i];
    }
    return this.length;
  }
  pop() {
    const item = this[this.length--];
    delete this[this.length];
    return item;
  }
  forEach(func) {
    for (let i = 0; i < this.length; i++) {
      func(this[i]);
    }
  }
  some(func) {
    for (let i = 0; i < this.length; i++) {
      if (func(this[i])) {
        return true;
      }
    }
    return false;
  }
  every(func) {
    for (let i = 0; i < this.length; i++) {
      if (func(this[i]) === false) {
        return false;
      }
    }
    return true;
  }
  unshift() {
    if (!arguments.length) {
      return;
    }
    for (let i = this.length - 1; i >= 0; i--) {
      this[i + arguments.length] = this[i];
      this[i] = arguments[i];
    }
    this.length = this.length + arguments.length;
    return this.length;
  }

  shift() {
    let item = this[0];
    for (let i = 1; i < this.length; i++) {
      this[i - 1] = this[i];
    }
    while (this.length) {
      this.pop();
      return item;
    }
  }
  reverse() {
    for (let i = 0; i < Math.floor(this.length / 2); i++) {
      let tmp = this[i];
      let a = this.length - 1 - i;
      let b = this.length - a - 1;
      tmp = this[a];
      this[a] = this[b];
      this[b] = tmp;
    }
    return this;
  }

  concat(arrs) {
    let obj = new MyArray();
    for (let i = 0; i < this.length; i++) {
      obj.push(this[i]);
    }
    for (let i = 0; i < arrs.length; i++) {
      obj.push(arrs[i]);
    }
    return obj;
  }

  map(func) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
      result.push(func(this[i]));
    }
    return result;
  }

  flat(deeps) {
    let result = new MyArray();
    this.forEach((el) => {
      if (MyArray.checkObj(el) && deeps) {
        result = result.concat(el.flat(deeps - 1));
      } else {
        if (el !== undefined) {
          result.push(el);
        }
      }
    });
    return result;
  }

  static checkObj(obj) {
    return obj instanceof MyArray;
  }

  [Symbol.iterator]() {
    let i = 0;
    const temp = this;
    return {
      next() {
        return {
          value: temp[i++],
          done: i > temp.length,
        };
      },
    };
  }
}

const myArray = new MyArray(11, 24, 45, 62, 2);
const myArray1 = new MyArray(44, 68, 1, 0, 41, 200, 7);
console.log(MyArray.checkObj(myArray));
console.log(myArray1.reverse());
console.log(myArray1);
const myArray2 = myArray1.concat(myArray1);
const squiare = myArray2.map(funcSquiare);
console.log(myArray2);
console.log(squiare);

// const test = new MyArray(1, 2, 3, new MyArray(3, 4, 5, new MyArray(3, 4, 5, new MyArray(3, 4, 8))),new MyArray(3, 4, 5),new MyArray(3, 4, 15));
// console.log(...test)
