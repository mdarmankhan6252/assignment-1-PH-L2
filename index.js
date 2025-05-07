"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function formatString(input, toUpper) {
    if (toUpper) {
        return input.toUpperCase();
    }
    else {
        return input.toLowerCase();
    }
}
// console.log(formatString('Arman', false))
// -----------------------------------
function filterByRating(items) {
    const filteredDataByRating = items.filter((item) => item.rating >= 4);
    return filteredDataByRating;
}
const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 3.0 }
];
// console.log(filterByRating(books));
// -----------------------------------
function concatenateArrays(...arrays) {
    return [].concat(...arrays);
}
// console.log(concatenateArrays(['Arman', 'Yeassin'], ["JS", "TS"], ["C++"], ['Tomi', 'Ami']));
//---------------------------------
class Vehicle {
    constructor(make, year) {
        this.make = make;
        this.year = year;
    }
    getInfo() {
        console.log(`Make: ${this.make}, Year: ${this.year}`);
    }
}
class Car extends Vehicle {
    constructor(make, year, model) {
        super(make, year);
        this.model = model;
    }
    getModel() {
        console.log(`Model: ${this.model}`);
    }
}
const myCar = new Car('Toyota', 2024, 'Corolla');
// myCar.getInfo();
// myCar.getModel();
// ----------------------------
function processValue(value) {
    if (typeof value === 'string') {
        return value.length;
    }
    else {
        return value * 2;
    }
}
function getMostExpensiveProduct(products) {
    if (products.length === 0) {
        return null;
    }
    return products.reduce((maxValue, currentValue) => {
        return currentValue.price > maxValue.price ? currentValue : maxValue;
    });
}
const products = [
    { name: "Pen", price: 100 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 }
];
// console.log(getMostExpensiveProduct(products));
// ---------------------------------
var Day;
(function (Day) {
    Day[Day["Monday"] = 0] = "Monday";
    Day[Day["TuesDay"] = 1] = "TuesDay";
    Day[Day["Wednesday"] = 2] = "Wednesday";
    Day[Day["Thursday"] = 3] = "Thursday";
    Day[Day["Friday"] = 4] = "Friday";
    Day[Day["Saturday"] = 5] = "Saturday";
    Day[Day["Sunday"] = 6] = "Sunday";
})(Day || (Day = {}));
function getDayType(day) {
    if (day === 6) {
        return 'Weekend';
    }
    return 'Weekday';
}
// ------------------
// async function squareAsync(n: number): Promise<number> {
//    return new Promise((resolve, reject) =>{
//       setTimeout(() =>{
//          if(n < 0){
//             reject(new Error('Negative number is not allowed!'))
//          }else{
//             resolve(n * n)
//          }
//       }, 5000)
//    })
// }
// squareAsync(4).then(console.log)
// // squareAsync(-3).catch(console.error);
function squareAsync(n) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (n < 0) {
                    reject(new Error('Negative number is not allowed!'));
                }
                else {
                    resolve(n * n);
                }
            }, 1000);
        });
    });
}
squareAsync(4).then(console.log);
