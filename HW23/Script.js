function Car() {
  this.drive = function () {
    console.log("Вождение автомобиля");
  };

  this.brake = function () {
    console.log("Торможение автомобиля");
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

const lamborghini = new Lamborghini();
lamborghini.drive();
lamborghini.brake();
lamborghini.openDoors();
