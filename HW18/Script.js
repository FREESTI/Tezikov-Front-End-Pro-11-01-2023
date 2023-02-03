
//Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.
function calculateAverage(arr) {
  let sum = 0
  let numElements = 0

  arr.forEach(element => {
    if (typeof element === 'number') {
      sum += element
      numElements++
    }
  });

  return sum/numElements
} 
const array = [1, 3, 4.25, 9,]
console.log(calculateAverage(array))




//Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.
function domath(x, znak, y) {
  switch (znak) {
    case "+":
      console.log(x + y);
      break
    case "-":
      console.log(x - y)
      break
    case "*":
      console.log(x * y)
      break
    case "/":
      console.log(x / y)
      break
    case "%":
      console.log(x % y)
      break
    case "^":
      console.log(Math.pow(x, y))
      break
    default:
      console.log("Invalid operator!")
  }
}
domath(10, "+", 5)




//Написати функцію заповнення даними користувача двомірного масиву. Довжину основного масиву і внутрішніх масивів задає користувач. Значення всіх елементів всіх масивів задає користувач.
function fill2DArray(length, value) {
  const arr2 = []
  
  for (let i = 0; i < length; i++) {
    arr2[i] = []
    for (let j = 0; j < length; j++) {
      arr2[i][j] = value
    }
     for (let j = 0; j < length; j++) {
      arr2[i][j] = value
    }
  }
  console.log(arr2)
  return arr2
}

const userArray = fill2DArray(2, 1000, 2000)




//Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.
function removeChars(str, chars) {
  var newStr = ''
  for (var i = 0; i < str.length; i++) {
    if (chars.indexOf(str[i]) === -1) {
      newStr += str[i]
    }
  }
  return newStr
}
console.log(removeChars("hello world", ['h', 'w']))

  
