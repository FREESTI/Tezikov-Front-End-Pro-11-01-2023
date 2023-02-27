class Hamburger {
  static size_small = { price: 50, calories: 20 };
  static size_big = { price: 100, calories: 40 };
  static stuffing_cheese = { price: 10, calories: 20 };
  static stuffing_salad = { price: 20, calories: 5 };
  static stuffing_potato = { price: 15, calories: 10 };
  static additive_spice = { price: 15, calories: 0 };
  static additive_mayo = { price: 20, calories: 5 };

  constructor(size, stuffing) {
    this.size = size;
    this.stuffing = stuffing;
    this.toppings = [];
  }

  addTopping(topping) {
    this.toppings.push(topping);
  }

  calcPrice() {
    let price = this.size.price + this.stuffing.price;
    for (let i = 0; i < this.toppings.length; i++) {
      price += this.toppings[i].price;
    }
    return price;
  }

  calcCalories() {
    let calories = this.size.calories + this.stuffing.calories;
    for (let i = 0; i < this.toppings.length; i++) {
      calories += this.toppings[i].calories;
    }
    return calories;
  }
}

const hamburger = new Hamburger(Hamburger.size_small, Hamburger.stuffing_cheese);
hamburger.addTopping(Hamburger.additive_mayo);
console.log("Calories: " + hamburger.calcCalories());
console.log("Price: " + hamburger.calcPrice());
hamburger.addTopping(Hamburger.additive_spice);
console.log("Price with spice: " + hamburger.calcPrice());
