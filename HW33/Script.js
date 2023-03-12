function* randomNum (min, max){
  for(let i = 0; i < 10; i++){
    yield Math.floor(Math.random() * (max - min + 1) + min)
  }
}

const generator = randomNum(1, 10)
for(const num of generator){
  console.log(num)
}



async function DailySchedule() {
  return new Promise ( resolve =>{
    setTimeout(() => {
      console.log('Просыпаемся и встаем из кровати')
      resolve()
    }, 1000);
  })
}
async function shower (){
  console.log('Принимаем душ')
}
async function Cooking (){
  await DailySchedule()
  await shower()
  console.log('Готовим и завтракаем')
}
Cooking()
