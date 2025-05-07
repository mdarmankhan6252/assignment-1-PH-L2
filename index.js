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
console.log(filterByRating(books));
