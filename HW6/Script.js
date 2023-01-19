
//Получить от пользователя 3 строчки и вывести их в произвольном порядке одной командой (конкатенация);//
//const firstLine = prompt("Первая строка")
//const secondLine = prompt("Вторая строка")
//const thirdLine = prompt("Третья строка")
//alert(firstLine +' ' + secondLine + ' ' + thirdLine );







//Разбить по цифрам пятизначное число и вывести в исходном порядке через пробел.//
const num = 123456789
let i = 1, 
    sNum = num.toString(),
    nNum = num.toString()[0],
    length = sNum.length-1;
for(i; i<= length; i+=1 ){
   nNum += ' ' +   Math.round(sNum[i],  10)
} 
alert(nNum)