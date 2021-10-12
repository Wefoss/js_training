function funcSquiare(n) {
  return n * n;
}

function OtherMethod() {
  this.push = function () {
    for (let i = 0; i < arguments.length; i++) {
      this[this.length++] = arguments[i];
    }
    return this.length;
  };
  this.pop = function () {
    const item = this[this.length--];
    delete this[this.length];
    return item;
  };
  this.forEach = function (func) {
    for (let i = 0; i < this.length; i++) {
      func(this[i]);
    }
  };
  this.some = function (func) {
    for (let i = 0; i < this.length; i++) {
      if (func(this[i])) {
        return true;
      }
    }
    return false;
  };
  this.every = function (func) {
    for (let i = 0; i < this.length; i++) {
      if (func(this[i]) === false) {
        return false;
      }
    }
    return true;
  };
  this.unshift = function () {
    for (let i = this.length - 1; i >= 0; i--) {
      this[i + arguments.length] = this[i];
      this[i] = arguments[i];
      
    }
    this.length = this.length + arguments.length
    return this;
  };
  
  this.shift = function () {

     for (let i = 1; i < this.length; i++) {
       this[i - 1] = this[i]
        } 
     while(this.length) {
      this.pop()
      break
     }
     
    return 
  };
  this.reverse = function () {
     let arr = []
    for (let i = this.length -1; i >= 0; i--) {
       arr.push(this[i])
          }
       return arr;
  };
  this.concat = function () {
    const obj = Object.values(this).slice(0, -1);
    for (let i = 0; i < arguments.length; i++) {
      if (typeof arguments[i] === "object") {
        Object.values(arguments[i]).forEach((el, i) => {
          if (el === this.length) return;
          obj.push(el);
        });
      } else obj.push(arguments[i]);
    }
    return obj;
  };
  this.map = function (func) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
      result.push(func(this[i]));
    }
    return result;
  };
}

function MyArray() {
  this.length = 0;
  for (let i = 0; i < arguments.length; i++) {
    this.push(arguments[i]);
  }
}

MyArray.prototype = new OtherMethod();

const myArray = new MyArray(11, 24, 45, 62, 2);
const myArray1 = new MyArray(44, 68, 1, 0, 41, 200);
console.log(myArray1.reverse());
console.log(myArray1);
const myArray2 = myArray1.concat(myArray1);
const squiare = myArray2.map(funcSquiare);
console.log(myArray2);
console.log(squiare);
