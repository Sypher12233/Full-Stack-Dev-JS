/* Meal Maker

A restaurant has hired you to 
create a function for their website that allows them to set a meal 
1. and price each morning
2. for Today’s Special.
  Use your knowledge of getters and setters to make sure anyone who uses the new function can generate a meal
3. and a price for Today’s Special
without any embarrassing errors!*/
/*
const menu = {
  
  get meals() {
    if (meals === this._meals) {
      return meals;
    } else {
      return 'Please choose from the our menu';
    }
  },
  get mealPrices() {
    if (mealPrices === this.mealPrices) {
      return mealPrices;
    }
  },
}
*/
// const foods = ['Spaghetti', 'Rice', 'Tomatoes', 'Apple Pie', 'Pasta'];
// const num = Math.floor(Math.random() * 5);
// const mealPrices = [4.50, 5.99, 1.99, 3.99, 9.99];

const menu = {
  _meal: '',
  _price: 0,
  set meal (mealToCheck) {
    if (typeof mealToCheck === 'string') {
      this._meal = mealToCheck;
    }
  },
  set price (priceToCheck) {
    if (typeof priceToCheck === 'number') {
      this._price = priceToCheck;
    }
  },
  get todaysSpecial () {
    if (this._meal && this._price) {
      return `Today's Special is ${this._meal} for $${this._price}!`;
    } else {
      return "Meal or price was not set correctly!";
    }
  }
};
menu.meal = 'Chicken Wings';
menu.price = 5.99;
console.log(menu.todaysSpecial);

// switch (num) {
//   case 0:
//     menu.meal = foods[0];
//     menu.price = mealPrices[0]
//     break;
//   case 1:
//     menu.meal = foods[1];
//     menu.price = mealPrices[1];
//     break;
//   case 2:
//     menu.meal = foods[2];
//     menu.price = mealPrices[2];
//     break;
//   case 3:
//     menu.meal = foods[3];
//     menu.price = mealPrices[3];
//     break;
//   case 4:
//     menu.meal = foods[4];
//     menu.price = mealPrices[4];
//     break;
// }

