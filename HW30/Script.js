class SuperMath {
  check(obj) {
    const x = obj.X;
    const y = obj.Y;
    let znak = obj.znak;
    const validOperators = ["+", "-", "*", "/", "%"];
    
    if (!validOperators.includes(znak)) {
      while (!validOperators.includes(znak)) {
        znak = prompt(`Помилка: неправильний оператор. Будь ласка, введіть правильний оператор (${validOperators.join(", ")}):`);
      }
    }
    
    let result;
    const performOperation = confirm(`Бажаєте виконати операцію ${x} ${znak} ${y}?`);
    
    if (performOperation) {
      switch (znak) {
        case "+":
          result = x + y;
          break;
        case "-":
          result = x - y;
          break;
        case "*":
          result = x * y;
          break;
        case "/":
          result = x / y;
          break;
        case "%":
          result = x % y;
          break;
      }
      alert(`Результат: ${result}`);
    } else {
      this.check({ X: parseInt(newX), Y: parseInt(newY), znak: newZnak });
    }
  }
}
const p = new SuperMath();

const x = prompt("Введите значение X:");
const y = prompt("Введите значение Y:");
let znak = prompt("Введите знак (+, -, *, / или %):");

const obj = { X: parseInt(x), Y: parseInt(y), znak: znak };
p.check(obj);
