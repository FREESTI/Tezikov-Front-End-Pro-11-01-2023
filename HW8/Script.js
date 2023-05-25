
// const age = Number(prompt('рік народження?'))
// calcAge = 2023 - age
// const contry = prompt('де ти живеш?')

// console.log(calcAge)




const userAge = prompt('рік народження?')
const userCity = prompt('де ти живеш?')
const userHobby = prompt('Улюблений вид спорту')


if(userAge == null){
	calcUserAge = ('Шкода, що Ви не захотіли ввести свій рік народження');
} else if (userAge == '') {
	calcUserAge = ('Шкода, що Ви не захотіли ввести свій рік народження');
} else if(userAge == NaN){
	calcUserAge = ('number is Ba_NaN');
} else if (userAge){
	calcUserAge = 2023 - userAge
}

if(userCity == 'Kyiv' || userCity == 'Київ' || userCity == 'Киев'){
	userCityAlert = ('Ти живеш у столиці України');
} else if (userCity == 'Washington',userCity == 'Вашингтон') {
	userCityAlert = ('Ти живеш у столиці США');
} else if(userCity == 'London',userCity == 'Лондон'){
	userCityAlert = ('Ти живеш у столиці Англії ');
} else if (userCity == null ){
	userCityAlert =('Шкода, що Ви не захотіли ввести своє місто');
} else if (userCity){
	userCityAlert = (`Ти живеш у місті ${userCity}`)
}

if (userHobby == 'Хоккей' || userHobby == 'Hockey') {
	userHobbyAlert = ('Круто! Хочеш стати як Гретцки, Уэйн? ');
}	else if (userHobby == ''){
	userHobbyAlert = ('Шкода, що Ви не захотіли ввести свій улюблений вид спорту ');
} else if(userHobby == 'Футбол' || userHobby == 'Football'){
	userHobbyAlert = ('Круто! Хочеш стати як Лионель Андрес Месси?');
}	else if(userHobby == 'Баскетбол' || userHobby == 'Basketball'){
	userHobbyAlert = ('Круто! Хочеш стати як Карим Абдул-Джаббар? ');
}	else if (userHobby == null){
	userHobbyAlert = ('Шкода, що Ви не захотіли ввести свій улюблений вид спорту ');
}	else if (userHobby){
	userHobbyAlert = (`Круто! ${userHobby} `);
}


alert((`${calcUserAge}, ${userCityAlert}, ${userHobbyAlert}`));
















// switch (userAge && userAge.trim() && String(+userAge)) {
// 	case null:
// 			alert('Шкода, що Ви не захотіли ввести свій рік народження');
// 			break;
// 	case '':
// 			alert('Шкода, що Ви не захотіли ввести свій рік народження');
// 			break
// 	case 'NaN':
// 			console.log('number is Ba_NaN');
// 			break;
// 	default:
// 		alert (2023 - userAge)
// }

// switch (userCity) {
//   case "Kyiv":
//   case "Київ":
//   case "Киев":
//     alert(`Ти живеш у столиці України`);
//     break;
//   case "Washington":
//   case "Вашингтон":
//     alert(`Ти живеш у столиці США`);
//     break;
//   case "London":
//   case "Лондон":
//     alert(`Ти живеш у столиці Англії`);
//     break;
//   default:
// 		alert(`Ти живеш у місті ${userCity}`)
// }

// alert(a  + d )

































// let firstNumber = prompt('Введите первое число')
// let secondNumber = prompt('Введите второе число')

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









// let numOrStr = prompt('input number or string');
// console.log(numOrStr);
// switch (numOrStr && numOrStr.trim() && String(+numOrStr)) {
//     case null:
//         console.log('ви скасували');
//         break;
//     case '':
//         console.log('Empty String');
//         break
//     case 'NaN':
//         console.log('number is Ba_NaN');
//         break;
//     default:
//         console.log('OK!');
// }//