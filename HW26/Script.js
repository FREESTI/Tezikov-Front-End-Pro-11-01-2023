class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  info() {
    console.log(`Ім'я: ${this.name} Вік: ${this.age}`);
  }
}

class Car {
  constructor(make, model, year, licensePlate, person) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.licensePlate = licensePlate;
    if (person.age >= 18) {
      this.person = person;
    } else {
      console.log("Власник повинен бути старше 18 років");
    }
  }
  getInfo() {
    console.log(
      `Марка: ${this.make} Модель:  ${this.model} Рік випуску:  ${this.year} Номерний знак:  ${this.licensePlate} `
    );
    console.log("Інформація про власника:");
    this.person.info();
  }
}

const person = new Person("Іван", 45);
const person2 = new Person("Марія", 21);
const person3 = new Person("Олексій", 15);

person.info();
person2.info();
person3.info();

const car1 = new Car("Toyota", "Camry", 2010, "BC1234", person);
const car2 = new Car("Honda", "Accord", 2015, "AB5678", person2);

car1.getInfo();
car2.getInfo();
