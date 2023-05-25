function sum ()
 {
  let result = 0
  return function (y) {
    result += y
    return result
  }
}

const s = sum(3);
console.log(s(8))
console.log(s(20))