const arr = [4, 1, -3, 2, 6, 3, 5, 9, 7, 8]
arr.splice(1, 3); 
arr.sort((a, b) => a - b)
console.log( arr );



const nameUsers = ['Michael', 'William ', 'Liam', 'Alexander', 'Jacob', 'Mason', 'Jack',]
const nameSort = nameUsers.sort();
nameSort.splice(1, 3); 
console.log(nameSort);
