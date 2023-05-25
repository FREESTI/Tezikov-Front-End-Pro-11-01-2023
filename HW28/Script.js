
//Создать функцию которая будет принимать миллисекунды и вернет true или false в зависимости от того сегодня ли то число которое было передано
function isToday(milliseconds) {
  const date = new Date(milliseconds);
  const today = new Date();
  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  );
}

const milliseconds = Date.now();
console.log(isToday(milliseconds));



//Создать функцию которая вернет дату и время в формате 13.10.2022 13:13 принимая миллисекунды
function formatDate(milliseconds2) {
  const date = new Date(milliseconds2);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  return `${day}.${month}.${year} ${hours}:${minutes}`;
}

const milliseconds2 = 0;
const formattedDate = formatDate(milliseconds2);
console.log(formattedDate);


//Создать функцию которая принимает миллисекунды и вернет количество времени которое прошло или должно пройти с текущего момента.
function getTimeFromMilliseconds(milliseconds3) {
  const now = new Date().getTime(); 
  const targetTime = now + milliseconds3; 
  const timeDiff = targetTime - now; 


  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

  return `${days} дней, ${hours} часов, ${minutes} минут, ${seconds} секунд`;
}

const milliseconds3 = 200000000; 
const time = getTimeFromMilliseconds(milliseconds3);

console.log(time); 