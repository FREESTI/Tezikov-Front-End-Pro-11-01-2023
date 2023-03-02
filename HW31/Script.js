const arr = [1, 1, 2, 3, 4, 5, 5, 5, 6];
const uniqueArr = arr.filter((elem, index, array) => {
  return array.indexOf(elem) === index;
});
console.log(uniqueArr);




const bob = {
  name: "Bob",
};
const jane = {
  name: "Jane",
  kids: ["Tolik", "Vasya"],
};
const GreetMap = new Map();
GreetMap.set(bob, `Hello ${bob.name} nice to see you`);
GreetMap.set(jane, `How your kids doing ${jane.name}?`);

console.log(GreetMap.get(bob));
console.log(GreetMap.get(jane));

function convert(data) {
  if (data instanceof Map) {
    return Object.fromEntries(data);
  } else if (typeof data === "object" && data !== null) {
    return new Map(Object.entries(data));
  } else {
    throw new Error("ERROR");
  }
}




const object = {
  a: 1,
  b: 2,
  с: 3,
};
const map = new Map(Object.entries(object));

const checkMap = convert(object);
console.log(checkMap instanceof Map);

const chekObj = convert(map);
console.log(typeof chekObj);
