const arr = [4, 1, -3, 2, 6, 3, 5, 9, 7, 8]
arr.splice(2, 4); 
arr.sort((a, b) => a - b)
console.log( arr );



const nameUsers = ['Michael', 'William ', 'Liam', 'Alexander', 'Jacob', 'Mason', 'Jack',]
const nameSort = nameUsers.sort();
nameSort.splice(2, 4); 
console.log(nameSort);