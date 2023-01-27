const arr =  ["apple", "carrot", "pear", "celery",]




//1.Виведіть послідовно кожен елемент масиву з допомогою forEach
arr.forEach(function(entry) {
	console.log(entry)
});




//2.Виведіть послідовно кожен елемент масиву з допомогою for ... of
for (let value of arr) {
  console.log((value))
}
