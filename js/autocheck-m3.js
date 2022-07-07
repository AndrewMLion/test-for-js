// **** Example JSV2 Block 3 19

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   const result = [];
//   for (const product of products) {
//     if (product.hasOwnProperty([propName])) {
//       result.push(product[propName]);
//     }
//   }
//   return result;
// }
// // console.log(getAllPropValues(propName));

// getAllPropValues('name');
// getAllPropValues('quantity');
// getAllPropValues('price');
// getAllPropValues('category');

// console.log(getAllPropValues('name'));

//  ***** Example JSV2 Block 3 20

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// console.table(products);

// function calculateTotalPrice(productName) {
//   let result = 0;

//   for (const product of products) {
//     const { name, price, quantity } = product;

//     if (name === productName) {
//       return (result = price * quantity);
//     }
//   }
//   return result;
// }

// calculateTotalPrice('Blaster');
// calculateTotalPrice('Radar');
// calculateTotalPrice('Droid');
// calculateTotalPrice('Grip');
// calculateTotalPrice('Scanner');

// console.log(calculateTotalPrice('Radar'));

//  ***** Example JSV2 Block 3 21

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line
// const { yesterday, today, tomorrow } = highTemperatures;

// // const yesterday = highTemperatures.yesterday;
// // const today = highTemperatures.today;
// // const tomorrow = highTemperatures.tomorrow;

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;

//  ***** Example JSV2 Block 3 22

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line
// const {
//   yesterday,
//   today,
//   tomorrow,
//   icon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
// } = highTemperatures;

// // const yesterday = highTemperatures.yesterday;
// // const today = highTemperatures.today;
// // const tomorrow = highTemperatures.tomorrow;
// // const icon = highTemperatures.icon;

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;

//  ***** Example JSV2 Block 3 23

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// const {
//   yesterday: highYesterday,
//   today: highToday,
//   tomorrow: highTomorrow,
//   icon: highIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
// } = highTemperatures;

// // const highYesterday = highTemperatures.yesterday;
// // const highToday = highTemperatures.today;
// // const highTomorrow = highTemperatures.tomorrow;
// // const highIcon = highTemperatures.icon;

// // Change code above this line
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

//  ***** Example JSV2 Block 3 24

// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const { hex, rgb } of colors) {
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }

//  ***** Example JSV2 Block 3 25

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Change code below this line

// const {today:{low: lowToday, high: highToday, icon:todayIcon="https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"}, tomorrow:{low: lowTomorrow, high: highTomorrow, icon: tomorrowIcon="https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"}} = forecast;

// // const highToday = forecast.today.high;
// // const lowToday = forecast.today.low;
// // const todayIcon = forecast.today.icon;

// // const highTomorrow = forecast.tomorrow.high;
// // const lowTomorrow = forecast.tomorrow.low;
// // const tomorrowIcon = forecast.tomorrow.icon;

//  ***** Example JSV2 Block 3 26

// function calculateMeanTemperature(forecast) {
//   const {
//     today: { low: todayLow, high: todayHigh },
//     tomorrow: { low: tomorrowLow, high: tomorrowHigh },
//   } = forecast;

//   // const todayLow = forecast.today.low;
//   // const todayHigh = forecast.today.high;
//   // const tomorrowLow = forecast.tomorrow.low;
//   // const tomorrowHigh = forecast.tomorrow.high;

//   // Change code above this line
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }

//  ***** Example JSV2 Block 3 27

// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);

// console.log('bestScore: ', bestScore);
// console.log('worstScore: ', worstScore);

//  ***** Example JSV2 Block 3 28

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [
//   ...firstGroupScores,
//   ...secondGroupScores,
//   ...thirdGroupScores,
// ];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

//  ***** Example JSV2 Block 3 29

// const defaultSettings = {
//   theme: 'light',
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// // Change code below this line
// const finalSettings = { ...defaultSettings, ...overrideSettings };

//  ***** Example JSV2 Block 3 30

// function makeTask(data) {
//   const completed = false;
//   const category = 'General';
//   const priority = 'Normal';
//   // Change code below this line
//   return { ...{ category, priority, completed }, ...data };
//   // Change code above this line
// }

//  ***** Example JSV2 Block 3 31

// // Change code below this line
// function add(...args) {
//   let total = 0;
//   for (const arg of args) {
//     total += arg;
//   }

//   // Change code above this line
// }

//  ***** Example JSV2 Block 3 32

// Change code below this line
// function add(...args) {
//   // console.log(args);
//   let total = 0;
//   for (i = 0; i < args.length; i += 1) {
//     // console.log(arg);
//     if (args[i] > args[0]) {
//       total += args[i];
//     }
//   }
//   console.log(total);
//   return total;
//   // Change code above this line
// }

//  ***** Example JSV2 Block 3 33

// function findMatches(array1, ...array2) {
//   const matches = []; // Don't change this line
//   console.log(array1);
//   console.log(array2);

//   for (let i = 0; i < array1.length; i += 1) {
//     if (array2.includes(array1[i])) matches.push(array1[i]);
//     //  console.log(newArray);
//   }
//   return matches;
// }

//  ***** Example JSV2 Block 3 34

// const bookShelf = {
//   books: ['The last kingdom', 'The guardian of dreams'],
//   getBooks() {
//     return 'Returning all books';
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },

//   removeBook(bookName) {
//     return `Deleting book ${bookName}`;
//   },
//   updateBook(oldName, newName) {
//     return `Updating book ${oldName} to ${newName}`;
//   },
// };

// bookShelf.addBook('Haze');
// bookShelf.removeBook('Red sunset');
// bookShelf.updateBook('Sands of dune', 'Dune');

// console.log(bookShelf.addBook('Haze'));

//  ***** Example JSV2 Block 3 35

// const bookShelf = {
//   books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
//   updateBook(oldName, newName) {
//     // Change code below this line
//     // const bookIndex = this.books.indexOf(oldName);
//     this.books.splice(this.books.indexOf(oldName), 1, newName);

//     // Change code above this line
//   },
//   // let bookIndex = bookShelf.books.indexOf('Haze'),
// };
// console.log(bookShelf.updateBook('Haze', 'Dungeon chronicles'));

//  ***** Example JSV2 Block 3 36

// const atTheOldToad = {

//   // Change code below this line
//   potions: [],

//   // Change code above this line
// };

//  ***** Example JSV2 Block 3 37

// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },

//   // Change code above this line
// };

// console.log(atTheOldToad.getPotions());

//  ***** Example JSV2 Block 3 38

// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   addPotion(potionName) {
//     // Change code below this line
//     this.potions.push(potionName);
//      // Change code above this line
//   },
// };
// atTheOldToad.addPotion('Invisibility');
// console.log(atTheOldToad);

//  ***** Example JSV2 Block 3 39

// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   removePotion(potionName) {

//     this.potions.splice(this.potions.indexOf(potionName), 1);

//   },
// };

// После первого вызова метода atTheOldToad.removePotion("Dragon breath"), в свойстве potions будет массив ["Speed potion", Stone skin"]
// После второго вызова метода atTheOldToad.removePotion("Speed potion"), в свойстве potions будет массив ["Stone skin"]

//  ***** Example JSV2 Block 3 40

// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   updatePotionName(oldName, newName) {
//     // Change code below this line

//     this.potions.splice(this.potions.indexOf(oldName), 1, newName);
//     // Change code above this line
//   },
// };

// atTheOldToad.updatePotionName('Dragon breath', 'Polymorth');
// console.log(atTheOldToad.updatePotionName('Dragon breath', 'Polymorth'));
// atTheOldToad.updatePotionName('Stone skin', 'Invisibility');

// После первого вызова метода atTheOldToad.updatePotionName("Dragon breath", "Polymorth"), в свойстве potions будет массив ["Speed potion", "Polymorth", "Stone skin"]
// После второго вызова метода atTheOldToad.updatePotionName("Stone skin", "Invisibility"), в свойстве potions будет массив ["Speed potion", "Polymorth", "Invisibility"]

//  ***** Example JSV2 Block 3 41

const atTheOldToad = {
  potions: [
    { name: 'Speed potion', price: 460 },
    { name: 'Dragon breath', price: 780 },
    { name: 'Stone skin', price: 520 },
  ],

  // Change code below this line
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    for (let i = 0; i < this.potions.length; i += 1) {
      const potion = this.potions[i];
      if (newPotion.name === potion.name) {
        return `Error! Potion ${newPotion.name} is already in your inventory!`;
      }
    }
    this.potions.push(newPotion);
  },

  removePotion(potionName) {
    for (let i = 0; i < this.potions.length; i += 1) {
      const potion = this.potions[i];
      if (potionName === potion.name) {
        this.potions.splice(i, 1);
        return `Potion ${potionName} is not in inventory!`;
      }
    }
  },

  updatePotionName(oldName, newName) {
    for (const potion of this.potions) {
      console.log(potion.name);
      if (oldName === potion.name) {
        potion.name = newName;
      }
    }
    return `Potion ${oldName} is not in inventory!`;
  },
  // Change code above this line
};

// console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.addPotion({ name: 'Invisibility', price: 620 }));
// atTheOldToad.addPotion({ name: 'Invisibility', price: 620 });
// console.log(atTheOldToad.addPotion({ name: 'Power potion', price: 270 }));
// atTheOldToad.addPotion({ name: 'Power potion', price: 270 });

// atTheOldToad.addPotion({ name: 'Stone skin', price: 240 });

atTheOldToad.updatePotionName('Dragon breath', 'Polymorth');

console.log(atTheOldToad.potions);

// atTheOldToad.removePotion('Dragon breath');

console.table(atTheOldToad.potions);
