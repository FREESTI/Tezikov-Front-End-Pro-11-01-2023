class Human {
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
  }
}

class Apartment {
  residents = [];

  addResident(residents) {
    this.residents.push(residents);
  }
}

class House {
  constructor(maxApartments) {
    this.apartments = [];
    this.maxApartments = maxApartments;
  }
  addApartment(apartment) {
    if (this.apartments.length < this.maxApartments) {
      this.apartments.push(apartment);
    } else {
      console.log(
        "Неможливо додати квартиру - досягнуто максимальну кількість квартир у будинку"
      );
    }
  }
}

const person1 = new Human("John", "Male");
const person2 = new Human("Mary", "Female");
const person3 = new Human("Peter", "Male");

const apartment1 = new Apartment();
const apartment2 = new Apartment();

apartment1.addResident(person1);
apartment1.addResident(person2);
apartment2.addResident(person3);

const house = new House(2);

house.addApartment(apartment1);
house.addApartment(apartment2);

console.log(apartment1.residents);
console.log(apartment2.residents);
