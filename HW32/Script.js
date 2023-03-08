new Promise((resolve) => {

  setTimeout(() => resolve('Позавтракал'), 1000); 

}).then((result) => { 

  console.log(result);
  return 'Сходил в спортзал';

}).then((result) => {
  console.log(result); 
  return 'Принял душ';

}).then((result) => {

  console.log(result);
  return 'Вышел на работу';

}).then((result) => {

  console.log(result);
  return result;

});
