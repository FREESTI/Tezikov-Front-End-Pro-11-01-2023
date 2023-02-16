//1. Создать функцию которая будет принимать имя пользователя и время через которое он хочет чтоб его поприветствовали. Время пользователь хочет вводить строкой в разном формате например '10 minutes' , '20 seconds', '1 hour', '2 hours'

function greetUserWithDelay(username, time) {
  const delayTime = convertToMilliseconds(time);
  setTimeout(() => {
    console.log(`Hello, ${username}!`);
  }, delayTime);
}

function convertToMilliseconds(time) {
  try {
    const timeArray = time.split(" ");
    const value = parseInt(timeArray[0]);
    const unit = timeArray[1].toLowerCase();
    switch (unit) {
      case "second":
      case "seconds":
        return value * 1000;
      case "minute":
      case "minutes":
        return value * 60 * 1000;
      case "hour":
      case "hours":
        return value * 60 * 60 * 1000;
      default:
        throw new Error("ERROR))");
    }
  } catch (err) {
    console.error(err);
  }
}
greetUserWithDelay('John', '4 secondU')




//2. Создать функцию которая будет или сериализировать или десериализировать объект в зависимости от того в какой форме он был передан

function serializeOrDeserialize(obj) {
  if (typeof obj === "string") {
    return JSON.parse(obj);
  } else {
    return JSON.stringify(obj);
  }
}

const myObject = {
  name: "John",
  age: 30,
};

const serializedObject = JSON.stringify(myObject);

// const mySerializedObject = serializeOrDeserialize(myObject);
const deserializedObject = serializeOrDeserialize(serializedObject);




//3. Создать функцию которая вернет true или false в зависимости от того что в нее передать JSON строку или обычную строку

function isJSON(str) {
  try {
    JSON.parse(str);
    return true;
  } catch (err) {
    return false;
  }
}

const jsonString = '{"name": "John", "age": 30}';
const normalString = "Hello, world!";

console.log(isJSON(jsonString));
console.log(isJSON(normalString));
