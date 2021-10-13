
function recursione (num, str) {
    let right = ')'
    let left = '('
  
    if(num < 1) {
      return '()'
    } 
      console.log(str);
     
    num = recursione(num - 1, `${left}`+str+`${right}`)
  }
  recursione(6, '()')
  
  
  let arrs = [1,2,3,4,5,6,7]
  let max = Math.max(...arrs)
  let min = Math.min(...arrs)
  console.log(max, min);
  
  const arrowFunc = (...arg) => arg.reduce((acc, el) => acc + el, 0)
  
  let num = 10
  
  console.log(Math.pow(2, -4));