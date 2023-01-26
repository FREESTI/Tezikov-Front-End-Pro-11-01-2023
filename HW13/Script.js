const arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47, ]




//1.Найти сумму и количество положительных элементов.
let result = 0
const num = arr.filter(elem =>(elem>0))
for(let i = 0; i < arr.length; i++){
	if (arr[i] > 0) {
		result += arr[i]
	}
}
console.log('Сумма:', result, 'Количество положительных элементов:', num.length)




//2.Найдите минимальный элемент массива и его порядковый номер.
const min = arr => arr.reduce((x, y) => Math.min(x, y))
const numMin = arr.indexOf( min(arr))
console.log('Минимальный элемент:', min(arr),'Порядковый номер:', numMin)




// 3.Найдите максимальный элемент массива и его порядковый номер.
const max = arr => arr.reduce((x, y) => Math.max(x, y))
const numMax = arr.indexOf( max(arr))
console.log('Минимальный элемент:', max(arr),'Порядковый номер:', numMax)




//4.Определить количество отрицательных частей.
let positive = arr.filter(elem =>(elem <0))
console.log(positive.length)




//5.Найти количество нечетных положительных элементов
const res = arr
			.filter( (num) => num%2 )
			.filter(elem =>(elem>0))
console.log(res.length)




//6.Найти количество парных положительных частей.
const res2 = arr
			.filter(elem => elem % 2 == 0)
			.filter(elem =>(elem>0))
console.log(res2.length)




//7.Найти сумму четных положительных элементов.
let result2 = 0 
const sumEven = arr
				.filter(elem => elem % 2 == 0)
				.filter(elem =>(elem>0))
				for(let i = 0; i < sumEven.length; i++){
					if (sumEven[i] > 0) {
						result2 += sumEven[i]
					}
				}
console.log(result2)




//8.Найти сумму нечетных положительных элементов.
let result3 = 0
const sumOdd= arr
			.filter( (num) => num%2 )
			.filter(elem =>(elem>0))
			for(let i = 0; i < sumOdd.length; i++){
				if (sumOdd[i] > 0) {
					result3 += sumOdd[i]
				}
			}

console.log(result3)




//9.Найти произведение положительных элементов.
const num2 = arr
		.filter(elem =>(elem>0))
		.reduce((acc, rec) => acc * rec)
console.log(num2);




//10.
let max2 = arr[0]
let maxi = 0
for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max2) {
    max2 = arr[i]
    arr[maxi] = 0
    maxi = i
  } else {
    arr[i] = 0
  }
}

console.log(arr)