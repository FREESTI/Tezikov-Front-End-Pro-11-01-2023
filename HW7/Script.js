let example = prompt('+ - * /')
let firstNumber = +prompt('Введите первое число')
let secondNumber = +prompt('Введите второе число')

// if (example == '-') {
//     alert(firstNumber - secondNumber)
// } else if (example == '+') {
//     alert(+firstNumber + +secondNumber)
// }
// else if (example == '*') {
//     alert(firstNumber * secondNumber)
// }
// else if (example == '/') {
//     alert(firstNumber / secondNumber)
// }

switch (example){
    case '+':
        alert(`${firstNumber} + ${secondNumber} = ${firstNumber +secondNumber }`);
    break;
    case '-':
        alert(`${firstNumber} - ${secondNumber} = ${firstNumber -secondNumber }`);
    break;
    case '*':
        alert(`${firstNumber} * ${secondNumber} = ${firstNumber *secondNumber }`);
    break;
    case '/':
        alert(`${firstNumber} / ${secondNumber} = ${firstNumber /secondNumber }`);
    break;

}
