const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];           
const newConcat = arr1.concat(arr2);
arr1.reverse()

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
arr1.push(...arr2)

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
arr1.unshift(...arr2)
console.log(arr1);


const arr = ['js', 'html', 'css']
const shiftItem = arr.shift()
const popItem = arr.pop()
alert(shiftItem)
alert(popItem)

const arr = [1,2,3,4,5,6]
const newSlice = arr.slice(0, 3)
const newSliceBack = arr.slice(3, 5)


const arr = [1,2,3,4,5] /** 1,4,5 */
const newSplice = arr.splice(1, 2)


const arr = [1,2,3,4,5] 
const newSplice = arr.splice(1, arr.length-2) /** 2,3,4 */

const arr = [1,2,3,4,5] /** 1,2,3,a,b,c,4,5 */
arr.splice(3, 0, 'a', 'b', 'c')


const arr = [1,2,3,4,5] 
arr.splice(1, 0, 'a', 'b', ...arr.splice(4, 0, 'c'),...arr.splice(arr.length -0, 0, 'e'))

const arr = [3, 4, 1, 2, 7].sort()

const obj = {
  js: 'test',
  jq: 'hello',
  css: 'transition'
}
console.log(Object.keys(obj));



const hasElem  = (arr, str) => {
  return arr.some(el => el === str)
}
console.log(hasElem(['js', 'css', 'winter is coming'], 'cfwefw'));



const findOneNum  = (arr, num) => { 
  if(isNaN(num)) {
    return 
  }
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] === num) {
      return true
    }
    
  }
  return false
}

 const arr = [1,2,3,3,5,6,7,7,8] 
 const arr2 = [1,2,3,4,5,6]

 const lookSameNum  = (items) => {
   for (let i = 0; i < items.length; i++) {
     if(items[i] === items[i - 1])
     return true
   }
   return false
 }

 
const randomNums = (max, min) => {
  let arr = []
  for (let i = 0; i < 10; i++) {
     arr.push(Math.floor(Math.random() * (max - min + 1)) + min) 
      }
      return arr
}
console.log(randomNums(78, 10));

 const arr = [4, -2, 5, 19, -130, 0, 10]

 const findMaxMinNum = (items) => {
   const max = Math.max(...items)
   const min = items.reduce((acc, el) => {
       if(acc < el) {
         return acc
       } else return acc = el
   }, 0)
   return [max, min]
 }

 console.log(findMaxMinNum(arr));

const arr = [12, 15, 20, 25, 59, 79]
const arifmeticheskoe = (arr) => {
  let result = 0
  for (let i = 0; i < arr.length; i++) {
      result+=arr[i]    
  }
  return result/arr.length
}

console.log(arifmeticheskoe(arr));