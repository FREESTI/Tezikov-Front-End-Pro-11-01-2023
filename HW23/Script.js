function Car() {
  this.drive = function () {
    console.log("Вождение автомобиля");
  };

  this.brake = function () {
    console.log("Торможение автомобиля");
  };

  this.openDoors = function () {
    console.log("Открытие дверей автомобиля");
  };
}

function Lamborghini() {
  Car.call(this);

  this.openDoors = function () {
    console.log("Открытие дверей Lamborghini в вертикальном положении");
  };
}

Lamborghini.prototype = Object.create(Car.prototype);
Lamborghini.prototype.constructor = Lamborghini;

let myLambo = new Lamborghini();

myLambo.drive();
myLambo.brake();
myLambo.openDoors();

let myCar = new Car();

myCar.drive();
myCar.brake();
myCar.openDoors();
