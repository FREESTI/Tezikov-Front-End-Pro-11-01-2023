



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


