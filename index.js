"use strict";
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
myCar.getInfo();
myCar.getModel();
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
console.log(getMostExpensiveProduct(products));
